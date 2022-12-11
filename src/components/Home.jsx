import React from "react";
import Hero from "./Hero";
import Journey from "./Journey";
import Works from "./Works";

const Home = () => {
  return (
    <div className="p-index" id="home">
      <Hero />
      <Works />
      <Journey />
    </div>
  );
};

export default Home;
