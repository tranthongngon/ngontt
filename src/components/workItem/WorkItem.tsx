import { Link } from "react-router-dom";
import ArrowHorizonl from "../../assets/images/arr-h.svg?react";
import { motion } from "motion/react";
import "./work-item.scss";

export type WorkItemPropsType = {
  name: string;
  image: string;
  id: number;
  year: number;
  handleHover: (name: string, image: string) => void;
};

export default function WorkItem(props: WorkItemPropsType) {
  const child1Variants = {
    hidden: { x: 24 },
    visible: { x: 0 },
  };

  const child2Variants = {
    hidden: { x: 24 },
    visible: { x: 0 },
  };
  return (
    <motion.div
      className="work"
      initial={{ opacity: 0, top: 50 }}
      whileInView={{ opacity: 1, top: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onMouseEnter={() => props.handleHover(props.name, props.image)}
    >
      <motion.div className="work-parent" whileHover="visible" initial="hidden">
        <Link to={`${props.name.toLocaleLowerCase()}/${props.id}`} className="work__wrap">
          <div className="work__wrap-name">{props.name}</div>
          <div className="work__wrap-info">
            <motion.div
              className="year"
              variants={child1Variants}
              transition={{ duration: 0.2 }}
            >
              <span>{props.year}</span>
            </motion.div>
            <motion.button
              className="btn"
              variants={child2Variants}
              transition={{ duration: 0.2 }}
            >
              <ArrowHorizonl />
            </motion.button>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
