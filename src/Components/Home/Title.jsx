import React from "react";
import Button from "../Button/Button";

function Title(props) {
  return (
    <div className="title">
      <div className="headings">
        <h2>{props.heading1}</h2>
        <h1>{props.heading2}</h1>
      </div>
      <p>{props.paragraph}</p>
      <div>
        <Button name={props.button_name} />
      </div>
    </div>
  );
}

export default Title;
