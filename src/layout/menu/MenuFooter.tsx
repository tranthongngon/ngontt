import { menuItems } from "../../models/header.model";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./menu.scss";

export default function MenuFooter() {
  const child1Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 0, y: -16.8 },
  };

  const child2Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -16.8 },
  };
  return (
    <ul className="footer__menu">
      {menuItems.map((m, index) => (
        <motion.li
          initial={{ opacity: 0, top: 50 }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="footer__menu-item"
          key={index}
        >
          <Link to={`/${m.toLocaleLowerCase()}`}>
            <motion.div whileHover="visible" initial="hidden" className="wrap">
              <motion.div
                variants={child1Variants}
                transition={{ duration: 0.2 }}
                className="wrap-item"
              >
                {m}
              </motion.div>
              <motion.div
                variants={child2Variants}
                transition={{ duration: 0.2 }}
                className="wrap-item"
              >
                {m}
              </motion.div>
            </motion.div>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
