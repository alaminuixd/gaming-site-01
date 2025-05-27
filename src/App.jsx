import React from "react";
import Hero from "./components/Hero";
import Test from "./components/Test";
import StopWatch from "./components/StopWatch";
import Videos from "./components/Videos";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
/* 
            <Navbar />
      <Hero />
      <About />
*/
