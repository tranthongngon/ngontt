import "./work-brief.scss";
import { motion } from "motion/react";

export default function WorkBrief() {
  return (
    <motion.div
      initial={{ opacity: 0, top: 50 }}
      whileInView={{ opacity: 1, top: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="workbrief"
    >
      <div className="workbrief__wrap">
        <h6 className="workbrief__wrap-name">Work</h6>
        <p className="workbrief__wrap-brief">
          My work captures authentic moments. From portraits to landscapes, I
          create visually striking images that resonate deeply.
        </p>
      </div>
    </motion.div>
  );
}
