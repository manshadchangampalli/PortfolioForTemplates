import React from 'react'
import "./Projects.scss"
import img1 from "../../Assets/Projects/Projectsimg1.png";
import img2 from "../../Assets/Projects/Projectsimg2.png";
import img3 from "../../Assets/Projects/Projectsimg3.png";
import Backgrounddsn1 from "../../Components/Home/Backgrounddsn1";

function Projects() {
    return (
        <div className="projects">
            <div className="projects-title">
                 <h1>Recent projects</h1>
                 <p>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  typinng fast....</p>
            </div>
            <div className="projects-items">
                    <div className="img1"><img className="img" src={img1} alt="no" /></div>
                    <div className="img2"><img className="img" src={img2} alt="no" /></div>
                    <div className="img3"><img className="img" src={img3} alt="no" /></div>
            </div>
            <div className="bg-img">
            <Backgrounddsn1 color="A485FF" height="320" width="400" />
            </div>
        </div>
    )
}

export default Projects
