import React from 'react'
import "./style.scss"
import CallToAction from "../shared/CallToAction"
import logo from "../../images/logo.png"

import { scrollToSection } from "../utils/helper";
  const Navigation = () => {
    return <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="" />
      </div>
      <div className="navigation">
          <span className='navigation-item'>Skills</span>
          <span className='navigation-item'>Portfolio</span>
          <span className='navigation-item'>Blogs & Articles</span>
          <CallToAction text = "Contact Me"/>
        </div>

      {/* <ul className="navigation">
        <li
          className="navigation-item"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </li>
        <li
          className="navigation-item"
          onClick={() => scrollToSection("portfolio")}
        >
          Portfolio
        </li>
        <li
          className="navigation-item"
          onClick={() => scrollToSection("blogs")}
        >
          Blog & Articles
        </li>
        <li
          className="navigation-item"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul> */}
    </div>


  }

export default Navigation;
