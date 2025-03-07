import { Link } from "react-router-dom";
import "./projectItem.scss";
import { motion } from "motion/react";
export type ProjectItemProps = {
  name: string;
  image: string;
  id: number;
};

export default function ProjectItem(props: ProjectItemProps) {
  return (
    <motion.div
      className="project__item"
      initial={{ opacity: 0, top: 50 }}
      whileInView={{ opacity: 1, top: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Link to={`/work/:${props.id}`} className="project__wrap">
        <div className="project__item-tag">
          <div className="project__item-tag--name">
            {props.name}
            <div className="project__item-tag--edge">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-1.74846e-06 1.74846e-06L0 20C-9.65645e-07 8.95431 8.9543 9.65645e-07 20 0L-1.74846e-06 1.74846e-06Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="project__item-tag--edge edge2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-1.74846e-06 1.74846e-06L0 20C-9.65645e-07 8.95431 8.9543 9.65645e-07 20 0L-1.74846e-06 1.74846e-06Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="project__item-thumb">
          <img src={props.image} alt={props.name} />
        </div>
      </Link>
    </motion.div>
  );
}
