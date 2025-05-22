import React, { useEffect, useRef, useState } from "react";
import "./StopWatch.css";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(updateElapsedTime, 50);
    }
    console.log(elapsedTime.toLocaleString("en-us"));
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);
  useEffect(() => {
    setInterval(() => {
      console.log(elapsedTime);
    }, 1000);
  }, [startTimeRef]);

  // utility function
  const updateElapsedTime = () => {
    setElapsedTime(Date.now() - startTimeRef.current);
  };
  // handler functions
  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current);
  };
  const stop = () => {
    setIsRunning(false);
  };
  const toggleTimer = () => {
    isRunning ? stop() : start();
  };
  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };
  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // Pad with leading zeros to ensure 2 digits
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };
  return (
    <div className="min-h-screen w-full size-1/3 bg-gray-200 flex justify-center items-center flex-col text-6xl">
      <div className="font-mono">{formatTime()}</div>
      <div className="stop-watch-buton-group">
        <button
          className={
            isRunning
              ? `bg-red-600 hover:bg-red-700`
              : `bg-green-600  hover:bg-green-700`
          }
          onClick={toggleTimer}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className={`bg-blue-600 hover:bg-blue-700 ${
            !isRunning && elapsedTime === 0
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={reset}
          disabled={!isRunning && elapsedTime === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
