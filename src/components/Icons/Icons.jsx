import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import style from "./Icons.module.css";

function Icons() {
  return (
    <footer className={style.icons}>
      <a
        href="https://github.com/CH-Abdul-Hadi"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        className={style.socialLink}
      >
        <FaGithub className={style.socialIcon} />
      </a>
      <a
        href="www.linkedin.com/in/abdul-hadi-shahid-2b7a15271"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        className={style.socialLink}
      >
        <FaLinkedin className={style.socialIcon} />
      </a>
      <a
        href="https://wa.me/+923279058035"
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
