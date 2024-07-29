import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Trending from "./Trending";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trending />
    </div>
  );
}

export default HomePage;
