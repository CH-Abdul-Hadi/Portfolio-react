import React from "react";
import style from "./Contact.module.css";
import Form from "../Form/Form";
import GithubIcons from "../Icons/GithubIcons";
import WhatsappIcons from "../Icons/WhatsappIcons";
import LinkdinIcons from "../Icons/LinkdinIcons";

function Contact() {
  return (
    <div className={style.contactMain} id="contact">
      <h1 className={style.contactHead}>Contact</h1>
      <div className={style.contactContent}>
        <div className={style.contactText}>
          <span className={style.contactGet}>Get in Touch </span>
          <p>
            I'm always excited to collaborate on new projects, whether it's web
            development, front-end design, or anything in the MERN stack. If you
            have an idea, a question, or just want to say hi — feel free to drop
            me a message using the form below. I'll get back to you as soon as
            possible!
          </p>
          <div className={style.icons}>{/* Keep your icon links */}</div>
        </div>
        <div className={style.formContainer}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
