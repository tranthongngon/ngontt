import { motion } from "motion/react";
import { ProjectType } from "../../models";
import "./project-next.scss";
import { Link } from "react-router-dom";
export type ProjectInfoPropsType = {
  project: ProjectType;
};

export default function ProjectNext(props: ProjectInfoPropsType) {
  return (
    <section className="next">
      <motion.div
        initial={{ opacity: 0, top: 50 }}
        whileInView={{ opacity: 1, top: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="next__left"
      >
        <div className="next__left-wrap">
          <span className="name"> Next </span>
          <div className="bottom">
            <p className="bottom__brief"> {props.project.brief} </p>
            <Link
              className="bottom__btn"
              to={`work/${props.project.name.toLocaleLowerCase}/${props.project.id}`}
            >
              View Project
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="next__img"
        initial={{ opacity: 0, top: 50 }}
        whileInView={{ opacity: 1, top: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Link
          to={`work/${props.project.name.toLocaleLowerCase}/${props.project.id}`}
          className="next__img-wrap"
        >
          <div className="next__img-name">
            <div className="next__img-name--wrap">
              {props.project.name}
              <div className="next__img-name--edge">
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
              <div className="next__img-name--edge edge2">
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
          <img src={props.project.image} alt={props.project.name} />
        </Link>
      </motion.div>
    </section>
  );
}
