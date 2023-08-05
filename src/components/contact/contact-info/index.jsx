import React from "react";
import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer any questions you may have doubt
                freelance writing or content marketing
            </h4>
            <div className="contact-option">
                <FaPhoneAlt/>
                <span className="text">+91 8436584325</span>
            </div>
            <div className="contact-option">
                <MdEmail/>
                <span className="text">example@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
