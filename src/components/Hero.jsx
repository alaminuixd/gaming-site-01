import React from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [hasClicked, setHasClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadedVideos, setLoadedVideos] = React.useState(0);

  const totalVideos = 4;
  const nextVideoRef = React.useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => {
      return prev + 1;
    });
  };
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };
  /*   const handleMiniVdClick2 = () => {
    // different approach
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next === totalVideos ? 0 : next; // Reset manually if needed
    });
  }; */

  console.log(nextVideoRef.current);
  useGSAP(
    () => {
      // Your animation code here
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  // console.log(loadedVideos);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-kblue-75"
      >
        <div>
          <div className="absolute-center bg-blue-600 mask-clip-path z-50 size-64 cursor-pointer overflow-hidden rounded-lg opacity-0 hover:opacity-100">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-65 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            autoPlay
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoad={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 z-40 text-blue-50 right-5">
          G<b>a</b>ming
        </h1>
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10 relative">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <h1 className="special-font hero-heading text-red-100 text-8xl mt-10 mb-10">
              My Name is <br />
              Abrar Syed
            </h1>
            <img
              src="/img/abrar.png"
              alt=""
              className="absolute size-70 left-110 top-48"
            />
            <p className="mb-5 max-w-64 font-robert font-normal text-blue-100">
              Enter the Metagame Layer <br /> Unlesh the play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
