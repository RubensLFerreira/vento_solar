import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
        {/* <li>
          <a href="https://www.instagram.com/rubens_l_l/" target="_blank">
            <FaFacebook />
          </a>
        </li> */}
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2022 | Rubens Lima
      </p>
    </footer>
  );
}

export default Footer;
