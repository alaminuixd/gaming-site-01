import React from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [hasClicked, setHasClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadedVideos, setLoadedVideos] = React.useState(0);

  const totalVideos = 4;
  const nextVideoRef = React.useRef(null);

  const handleVideoLoaded = () => {
    setLoadedVideos((prev) => {
      return prev + 1;
    });
  };
  const upcomingVideoIndex = (currentIndex + 1) % totalVideos;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
    console.log(upcomingVideoIndex);
  };
  // different approach
  const handleMiniVdClick2 = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next === totalVideos ? 0 : next; // Reset manually if needed
    });
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  React.useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-l bg-kblue-75"
      >
        <div>
          <div className="absolute-center bg-blue-600 mask-clip-path z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex + 1)}
                loop
                muted
                id="current-video"
                className="size-65 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoaded}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
