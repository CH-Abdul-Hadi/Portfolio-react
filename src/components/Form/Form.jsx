import React from "react";
import style from "./Form.module.css";

const Form = () => {
  return (
    <>
      <div className={style.formcard1}>
        <div className={style.formcard2}>
          <form className={style.form} >
            <p className={style.formHeading}>Get In Touch</p>
            <div className={style.formField}>
              <input
                required
                placeholder="Name"
                className={style.inputField}
                type="text"
              />
            </div>
            <div className={style.formField}>
              <input
                required
                placeholder="Email"
                className={style.inputField}
                type="email"
              />
            </div>
            <div className={style.formField}>
              <input
                required
                placeholder="Subject"
                className={style.inputField}
                type="text"
              />
            </div>
            <div className={style.formField}>
              <textarea
                required
                placeholder="Message"
                cols={30}
                rows={3}
                className={style.inputField}
                defaultValue={""}
              />
            </div>
            <button className={style.sendMessageBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
