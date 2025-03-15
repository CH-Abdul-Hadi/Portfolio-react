import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import style from "./Icons.module.css";

function Icons() {
  return (
    <footer className={style.icons}>
      <a
        href="https://github.com/username"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        className={style.socialLink}
      >
        <FaGithub className={style.socialIcon} />
      </a>
      <a
        href="https://linkedin.com/in/username"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        className={style.socialLink}
      >
        <FaLinkedin className={style.socialIcon} />
      </a>
      <a
        href="https://wa.me/phonenumber"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        className={style.socialLink}
      >
        <FaWhatsapp className={style.socialIcon} />
      </a>
    </footer>
  );
}

export default Icons;
