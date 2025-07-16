import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-call">
        <h3>
          Send us message <img src={msg_icon} alt="" srcset="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            Contact@educity.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-call">
        <form action="">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone number</label>
          <input
            type="tel"
            name="phone"
            id=""
            placeholder="Enter Your Phone Number"
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
            required
          />
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            id=""
            rows="6"
            placeholder="Type your message here"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">Send Message <img src={white_arrow} alt="" /></button>
          <p className="contact-note">
            We will get back to you as soon as possible.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
