import React from 'react'
import cloud from "../../images/cloud.png"
import cloud11 from "../../images/cloud11.png"
import IntroContent from './intro-content'
import "../style.scss"
import Navigation from '../navigation-bar'



function Intro() {
    return (
        <div>
            <div className='Intro-section'>
                <div className="vector-bg" id="parallax">
                </div>

                <img src={cloud} className='cloud ' />
                <img src={cloud11} className='cloud-soft' />
                <div className='content'>
                    <Navigation/>
                    <IntroContent/>
                </div>
            </div>
           
        </div>
    )
}

export default Intro;
