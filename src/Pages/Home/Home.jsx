import React from "react";
import Backgrounddsn1 from "../../Components/Home/Backgrounddsn1";
import Backgrounddsn2 from "../../Components/Home/Backgrounddsn2";
import Backgrounddsn3 from "../../Components/Home/Backgrounddsn3";
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
        <div className="image">
          <Backgrounddsn2 />
          <Backgrounddsn3 />
        </div>
      </div>
      <Backgrounddsn1 />
    </div>
  );
}

export default Home;
