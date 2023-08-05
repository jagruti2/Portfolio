import React from "react";
import "./style.scss";
import { BsAwardFill } from "react-icons/bs";
import {FaUser} from "react-icons/fa"
import hand from "../../../images/hand.png";
import girl from "../../../images/girl.png";
import CallToAction from "../../shared/CallToAction";


const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello I am</span> 
                            {/* <span className="icon">
                                <img src={hand} />
                            </span> */}
                           <span></span>
                            {/* <span className="text">I am</span> */}
                        </span>
                        <span className="big-text"> Jagruti Chavan</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet. Id modi minima et quibusdam
                        beatae in animi quas. Qui inventore dicta et voluptate
                        cumque qui iure quam. Ut voluptate saepe vel temporibus
                        temporibus eum magnam placeat 33 asperiores quia cum
                        inventore similique.
                    </p>
                    <CallToAction text="Contact Me"/>
                </div>

                <div className="right-col">
                    <img src={girl} alt="JS Dev Hindi"/>

                    <div className="highlights horizintal">
                        <div className="icon">
                        <BsAwardFill/>
                        </div>
                       <div className="text">Best Design Award</div>
                    </div>
                    <div className="highlights vertical">
                        <div className="icons">
                            <FaUser/>
                            </div>
                            <div className="text">
                                <span>4k+</span>
                                Happy Customers
                            </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
