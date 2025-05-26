import React from "react";
import "./Test.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  useGSAP(() => {
    // Force a ScrollTrigger refresh after DOM is ready
    setTimeout(() => ScrollTrigger.refresh(), 100);

    gsap.set("#mainElm", {
      // clipPath: "circle(0%)",
      // clip: "rect(110px, 160px, 170px, 60px)",
      clip: "inset: (0)",
    });

    gsap.to("#mainElm", {
      clipPath: "circle(50%)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#mainElm",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="min-h-screen w-full bg-gray-200 flex gap-10 justify-center items-center flex-col">
      <div className="w-64 h-64 bg-blue-600"></div>
      <div className="w-64 h-64 bg-blue-600"></div>
      <div id="mainElm" className="w-64 h-64 bg-blue-600"></div>
      <div className="w-64 h-64 bg-blue-600"></div>
      <div className="w-64 h-64 bg-blue-600"></div>
      <div className="w-64 h-64 bg-blue-600"></div>
    </div>
  );
};

export default Test;
