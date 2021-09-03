import React from "react";
import Navbar from "../../Components/Home/Navbar";
import Title from "../../Components/Home/Title";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero-section">
        <Title
          heading1="Hey, Iam"
          heading2="Niz Man"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit quas ? Enim, mollitia vero libero labore eligendi molestias sint eum ut,deserunt"
          button_name="Hire Me"
        />
        <div className="image"></div>
      </div>
    </div>
  );
}

export default Home;
