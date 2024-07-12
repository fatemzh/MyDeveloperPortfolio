import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

emailjs.init("uSLQ-e9tt3NiI_otd");

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1gouuv2",
        "template_lwcbczl",
        form.current,
        "uSLQ-e9tt3NiI_otd"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-title">
          <h1 id="Contact">Contact</h1>
        </div>
        <div className="content">
          <div className="left">
            <div className="box box_shadow">
              <div className="details">
                <h1>Abid Fatima</h1>
                <h2>Frontend Developer</h2>
                <p>
                  I am available for freelance projects. Feel free to contact me
                  for any collaboration, consultation, or web expertise by
                  reaching out via email or phone. Let's discuss your needs and
                  how I can help you achieve your goals.
                </p>
                <div className="contact-info">
                  <div className="phone">
                    <FaPhone className="contact-icon" />
                    <p>(+41) 76 606 89 45</p>
                  </div>
                  <div className="email">
                    <a href="mailto:abidfatem@gmail.com" className="email-content">
                      <FaEnvelope className="contact-icon" />
                      <p>abidfatem@gmail.com</p>
                    </a>
                  </div>
                  <div className="linkedin">
                    <a href="https://www.linkedin.com/in/fatima-abid-91b200196/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="contact-icon" />
                      Fatima Abid
                    </a>
                  </div>
                  <div className="github">
                    <a href="https://github.com/fatemzh" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="contact-icon" />
                      @fatemzh
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <form onSubmit={sendEmail} ref={form}>
              <div className="input">
                <label htmlFor="user_name">Name</label>
                <input id="user_name" type="text" name="user_name" required />
              </div>
              <div className="input">
                <label htmlFor="user_email">Email</label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button className="btn-send" type="submit">
                Send
              </button>
            </form>
            {isSent && (
              <div className="success-message fadeIn">
                Thank you for your message.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
