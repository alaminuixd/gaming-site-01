import React, { useEffect, useState, useRef } from "react";
import "./Test.css";

const Test = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  const timeRef = useRef(0);

  // handers
  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    timeRef.current = Date.now();
    // all consoles
    console.log(isRunning);
    console.log(elapsedTime);
    console.log(intervalIdRef);
    console.log(startTimeRef);
    console.log(timeRef);
  };
  return (
    <div className="min-h-screen w-full size-1/3 bg-gray-200 flex justify-center items-center flex-col">
      <button
        className="bg-blue-600 px-10 py-3 text-white cursor-pointer"
        onClick={start}
      >
        Start
      </button>
    </div>
  );
};

export default Test;
