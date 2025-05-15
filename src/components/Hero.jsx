import React from "react";

const Hero = () => {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-l bg-kblue-75"
      >
        <div>
          <div className="absolute-center bg-blue-600 mask-clip-path z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div className="ktc">Mini Video Player</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
