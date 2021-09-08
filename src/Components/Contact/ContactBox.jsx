import React from 'react'


function ContactBox (props){
    return(
        <div className="contact-box">
            <img src={props.socialmedia} alt="" />
            <h1>{props.name}</h1>
        </div>
    )
}
export default ContactBox;