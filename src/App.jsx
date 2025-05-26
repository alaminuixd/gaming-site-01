import React from "react";
import Hero from "./components/Hero";
import Test from "./components/Test";
import StopWatch from "./components/StopWatch";
import Videos from "./components/Videos";
import About from "./components/About";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
};

export default App;
/* 
      <Hero />
      <section className="z-0 min-h-screen bg-blue-500" />
*/
