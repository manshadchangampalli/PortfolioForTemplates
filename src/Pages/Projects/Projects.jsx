import React from 'react'
import "./Projects.scss"
import img1 from "../../Assets/Projects/Rectangle 31.png";
import img2 from "../../Assets/Projects/Rectangle 32.png";
import img3 from "../../Assets/Projects/Rectangle 33.png";
import Backgrounddsn1 from "../../Components/Home/Backgrounddsn1";

function Projects() {
    return (
        <div className="projects">
            <div className="projects-title">
                 <h1>Recent projects</h1>
                 <p>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing </p>
            </div>
            <div className="projects-items">
                     <img className="img" src={img1} alt="no" />
                    <img className="img" src={img2} alt="no" />
                    <img className="img" src={img3} alt="no" />
            </div>
            <div className="bg-img">
            <Backgrounddsn1 color="A485FF" height="320" width="400" />
            </div>
        </div>
    )
}

export default Projects
