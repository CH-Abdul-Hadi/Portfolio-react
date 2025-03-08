import React from "react";
import style from "./Contact.module.css";
import Form from "../Form/Form";
function Contact() {
  return (
    <>
      <div className={style.contactMain}>
        <h1 className={style.contactHead}>Contact</h1>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Contact;
