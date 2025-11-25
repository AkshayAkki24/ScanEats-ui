import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "./Categories";
import Restaurants from "./Restaurants";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Restaurants />
    </>
  );
}
