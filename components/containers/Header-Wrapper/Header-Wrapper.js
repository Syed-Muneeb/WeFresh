import React from "react";
import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";

const Header_Wrapper = () => {
  return (
    <div className="Header_Wrapper">
      <div className="small__bg"></div>
      <Nav />
      <Hero />
    </div>
  );
};

export default Header_Wrapper;
