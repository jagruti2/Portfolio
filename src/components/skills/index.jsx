import React from 'react'
import "./style.scss"
import TechIcons from "../../images/tech-icons.png"
import Section from "../shared/section"
import CallToAction from '../shared/CallToAction'
import {AiOutlineCloudDownload} from "react-icons/ai";
const Skills = () => {
  return <Section 
  background="dark" 
  id="skills">
    <div className="skills-content-wrapper">
        <div className="left-col">
            <img src={TechIcons} alt="JS,HTML,CSS"/>
        </div>
        <div className="right-col">
            <h2>Skills</h2>
            <p>
            Lorem ipsum dolor sit amet. Et quidem odit qui consequatur provident et corrupti fuga cum nisi magnam sed temporibus rerum. Sit modi nihil cum esse perferendis et voluptatibus illo ut eaque exercitationem? Qui libero sunt eos ipsam debitis vel Quis maxime hic aliquam dolores. Est necessitatibus earum sed omnis voluptate ab voluptatum optio eum voluptatem dicta ab consectetur dolore.
            </p>
            <CallToAction text="Download CV" icon={<AiOutlineCloudDownload/>}/>
        </div>
    </div>
  </Section>
  
}

export default Skills
