import "./about-brief.scss";
import { motion } from "motion/react";

export default function AboutBrief() {
  return (
    <motion.div
      initial={{ opacity: 0, top: 50 }}
      whileInView={{ opacity: 1, top: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="aboutbrief"
    >
      <div className="aboutbrief__wrap">
        <h6 className="aboutbrief__wrap-name">About</h6>
        <div className="aboutbrief__wrap-text">
          <p className="aboutbrief__wrap-brief">
            With a focus on both candid moments and stunning landscapes, I
            strive to evoke emotion and tell stories through my work. My
            photography blends the rawness of everyday life with the artistry of
            fine art, allowing viewers to connect with each image on a deeper
            level.
          </p>
          <p className="aboutbrief__wrap-brief">
            Whether I’m exploring urban environments or venturing into nature,
            my goal is to highlight the extraordinary in the ordinary. Through
            my lens, I invite you to join me on this visual journey of discovery
            and inspiration.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
