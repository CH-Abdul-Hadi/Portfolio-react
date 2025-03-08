import React from "react";
import style from "./Contact.module.css";
import Form from "../Form/Form";
function Contact() {
  return (
    <>
      <div className={style.contactMain}>
        <h1 className={style.contactHead}>Contact</h1>

        <div className={style.contactContent}>
          <div className={style.contactText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            hic enim asperiores sapiente consectetur, reiciendis facilis vel
            officiis dolorem quae beatae cum maiores nobis culpa eum tempora
            eius, corrupti deleniti.
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
