import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import style from "./Form.module.css";

export default function Form() {
  const { register, handleSubmit, reset } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "fa80c278-3e54-4c3f-8dbf-91bddef0bdbc";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Portfolio Contact Form",
      subject: "New Message from Portfolio",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div className={style.formcard1}>
      <div className={style.formcard2}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <p className={style.formHeading}>Get In Touch</p>

          <div className={style.formField}>
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className={style.inputField}
              type="text"
            />
          </div>

          <div className={style.formField}>
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className={style.inputField}
              type="email"
            />
          </div>

          <div className={style.formField}>
            <input
              {...register("subject", { required: true })}
              placeholder="Subject"
              className={style.inputField}
              type="text"
            />
          </div>

          <div className={style.formField}>
            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              cols={30}
              rows={3}
              className={style.inputField}
            />
          </div>

          <button type="submit" className={style.sendMessageBtn}>
            Send Message
          </button>

          {result && (
            <div
              className={`${style.result} ${
                isSuccess ? style.success : style.error
              }`}
            >
              {result}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
