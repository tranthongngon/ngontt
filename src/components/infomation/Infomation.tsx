import Profile from "../profile/Profile";
import Socials from "../socials/Socials";
import "./infomation.scss";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Infomation() {
  return (
    <section className="infomation">
      <motion.div
        initial={{ opacity: 0, top: 50 }}
        whileInView={{ opacity: 1, top: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="infomation__profile"
      >
        <Link to="/about" className="infomation__wrap">
          <Profile class="is-light" />
          <div className="brief">
            <p className="brief-text">
              I'm Ema, a photographer based in Prague. I capture authentic
              moments and tell stories through my images, blending creativity
              and emotion in each shot.
            </p>
          </div>
        </Link>
      </motion.div>
      <Socials columns={1} width="1px" />
    </section>
  );
}
