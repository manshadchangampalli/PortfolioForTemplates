import React from "react";
import Title from "../../Components/Home/Title";
import "./Clients.scss";
import icon1 from "../../Assets/Clients/Component 11.png"
import icon2 from "../../Assets/Clients/Component 12.png"
import icon3 from "../../Assets/Clients/Component 13.png"
import icon4 from "../../Assets/Clients/Component 14.png"
import icon5 from "../../Assets/Clients/Component 15.png"
import icon6 from "../../Assets/Clients/Component 16.png"
import Backgrounddsn1 from "../../Components/Home/Backgrounddsn1"

function Clients() {
  return (
    <div className="clients">
      
      <div className="clients-title">
        <Title
          heading1="Work For All This,"
          heading2="Brands & Clients"
          paragraph="Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typinng fast...."
          button_name="Details"
        />
      </div>
      <div className="client-icon">
        <div className="client-icons">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
            <img src={icon5} alt="" />
            <img src={icon6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Clients;
