import { Link } from "react-router-dom";
import Profile from "../../components/profile/Profile";
import "./footer.scss";
import MenuFooter from "../menu/MenuFooter";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, top: 50 }}
      whileInView={{ opacity: 1, top: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="footer"
    >
      <div className="footer__wrap">
        <div className="footer__top">
          <Profile class="is-dark" />
          <motion.div
            initial={{ opacity: 0, top: 50 }}
            whileInView={{ opacity: 1, top: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="footer__top-right"
          >
            <Link className="footer__top-btn" to="/contact">
              Contact Me
            </Link>
          </motion.div>
        </div>
        <div className="footer__bottom">
          <MenuFooter />
          <motion.div
            initial={{ opacity: 0, top: 50 }}
            whileInView={{ opacity: 1, top: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="footer__bottom-copyright"
          >
            © By <span className="white">Ngontt</span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
