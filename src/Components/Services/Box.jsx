import React, { useState } from "react";
import Box1img from "./Box1img";
import Box2img from "./Box2img";
import Box3img from "./Box3img";


function Box(props) {
    // const [img, setImg] = useState()
    var img ;
    if(props.Boximg=="Boximg1"){
         img =<Box1img/>
    }
    else if(props.Boximg=="Boximg2"){
        img =<Box2img/>
    }
    else if(props.Boximg=="Boximg3"){
        img =<Box3img/>
    } 
    
  return (
    <div className="box">
      {img}
      <h1>{props.title}</h1>
      <p>
          {props.paragraph}
      </p>
      <a href="">LEARN MORE</a>
    </div>
  );
}

export default Box;
