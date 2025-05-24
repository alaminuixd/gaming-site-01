import React, { useState } from "react";

const Videos = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const [loadedVideos, setLoadedVideos] = React.useState(0);

  const totalVideos = 4;
  // functions
  const getVideoSrc = (index) => {
    return `/videos/hero-${index}.mp4`;
  };
  const handleVideoLoaded = () => {
    setLoadedVideos((prev) => {
      return prev + 1;
    });
  };
  const upcommingVideoIndex = (currentVideoIndex % totalVideos) + 1;
  const handleMiniVideoClick = () => {
    setCurrentVideoIndex(upcommingVideoIndex);
  };
  console.log(loadedVideos);
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div className="absolute-center bg-blue-600 mask-clip-path z-50 size-64 cursor-pointer overflow-hidden rounded-lg opacity-0 hover:opacity-100">
        <div
          onClick={handleMiniVideoClick}
          className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
        >
          <video
            src={getVideoSrc(upcommingVideoIndex)}
            loop
            autoPlay
            muted
            className="size-65 origin-center scale-150 object-cover object-center"
            onLoadedData={handleVideoLoaded}
          />
        </div>
      </div>
      <video
        src={getVideoSrc(currentVideoIndex)}
        muted
        autoPlay
        loop
        className="absolute left-0 top-0 size-full object-cover object-center z-10"
      />
    </div>
  );
};

export default Videos;
