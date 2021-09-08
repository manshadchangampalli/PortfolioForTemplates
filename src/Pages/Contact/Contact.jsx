import React from "react";
import instagram from "../../Assets/Contact/instagram-square-brands 1.png";
import whatsapp from "../../Assets/Contact/whatsapp-square-brands 1.png";
import snapchat from "../../Assets/Contact/snapchat-square-brands 1.png";
import twitter from "../../Assets/Contact/twitter-square-brands 1.png";
import line from "../../Assets/Contact/line-brands 1.png";
import facebook from "../../Assets/Contact/facebook-square-brands 1.png";
import ContactBox from "../../Components/Contact/ContactBox";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>
          Contact Us
          <br />
          <span>Ways To Contact me</span>
        </h1>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document typeface
          without relying on meaningful content.
        </p>
      </div>
      <div className="contact-div">
        <ContactBox socialmedia={instagram} name="instgram" />
        <ContactBox socialmedia={whatsapp} name="whatsapp" />
        <ContactBox socialmedia={facebook} name="facebook" />
        <ContactBox socialmedia={snapchat} name="snapchat" />
        <ContactBox socialmedia={twitter} name="twitter" />
        <ContactBox socialmedia={line} name="line" />
        
      </div>
      <div className="copywrite"></div>
    </div>
  );
}

export default Contact;
