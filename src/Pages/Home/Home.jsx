import React from "react";
import Backgrounddsn1 from "../../Components/Home/Backgrounddsn1";
import Navbar from "../../Components/Home/Navbar";
import Title from "../../Components/Home/Title";
import star1 from '../../Assets/Home/Star 1.png';
import star2 from '../../Assets/Home/Star 2.png';
import star3 from '../../Assets/Home/Star 3.png';
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
          <img className="star1" src={star1} alt="" />
          <img className="star2" src={star2} alt="" />
          <img className="star3" src={star3} alt="" />
        </div>
      </div>
      <div className="bg1">
        <Backgrounddsn1 color="A485FF" height="300" width="300" />
      </div>
      <div className="bg2">
        <Backgrounddsn1 color="75d4fd" height="300" width="300" />
      </div>
      <div className="bg3">
        <Backgrounddsn1 color="75D4FD" height="300" width="300" />
      </div>
    </div>
  );
}

export default Home;
