import React from 'react';
import "./Works.scss";
import Backgrounddsn1 from "../../Components/Home/Backgrounddsn1";
import img1 from '../../Assets/Works/Box1-img.png';
import img2 from '../../Assets/Works/Box2-img.png';
import img3 from '../../Assets/Works/Box3-img.png';
import btn1 from '../../Assets/Works/Btn1.png';
import btn2 from '../../Assets/Works/Btn2.png';


function Works() {
    return (
        <div className="works">
            <div className="works-title">
                <h1>Client's always get <span className="expectional">expectional </span> <br/>
                
                 works from me</h1>
                 
            </div>
            <div className="works-items">
                <div>
                    <img className="btn-prev" src={btn1} alt="no" />
                    <img className="btn-next" src={btn2} alt="no" />
                </div>
                 <div className="imgs">
                    <div className="img1"><img  src={img1} alt="no" /></div>
                    <div className="img2"><img  src={img2} alt="no" /></div>
                    <div className="img3"><img  src={img3} alt="no" /></div>
                    <div className="img4"><img  src={img3} alt="no" /></div>
                </div>
            </div>
            <div className="bgimg1">
                <Backgrounddsn1 color="A485FF" height="320" width="400" />
            </div>
        </div>
    )
}

export default Works
