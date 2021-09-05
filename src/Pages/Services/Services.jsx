import React from "react";
import Backgrounddsn1 from "../../Components/Home/Backgrounddsn1";
import Title from "../../Components/Home/Title";
import Box from "../../Components/Services/Box";
import "./Services.scss";

function Services() {
  return (
    <div className="services">
      <div className="services-title">
        <div className="services-title-div">
          <Title
            heading1="My awsome"
            heading2="Services"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.dgfhhfhfd sint eum ut,deserunt"
            button_name="Download cv"
          />
        </div>
      </div>
      <div className="services-box1">
        <Box
          Boximg="Boximg1"
          title="Design"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        />
      </div>
      <div className="services-box2">
        <Box
          Boximg="Boximg2"
          title="Developer"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        />
      </div>
      <div className="services-box3">
        <Box
          Boximg="Boximg3"
          title="UI/UX"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        />
      </div>
      <div className="bgimg1">
        <Backgrounddsn1 color="75D4FD" height="525" width="426" />
      </div>
      <div className="bgimg2">
        <Backgrounddsn1 color="A485FF" height="320" width="400" />
      </div>
    </div>
  );
}

export default Services;
