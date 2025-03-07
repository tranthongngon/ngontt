import { motion } from "motion/react";
import { ProjectType } from "../../models";
import "./project-info.scss";
export type ProjectInfoPropsType = {
  project: ProjectType;
};

export default function ProjectInfo(props: ProjectInfoPropsType) {
  return (
    <section className="info">
      <motion.div
        initial={{ opacity: 0, top: 50 }}
        whileInView={{ opacity: 1, top: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="info__brief"
      >
        <div className="info__brief-wrap">
          <h6 className="name"> {props.project.name} </h6>
          <p className="brief"> {props.project.brief} </p>
        </div>
      </motion.div>
      <div className="info__detail">
        <motion.div
          className="info__detail-item"
          initial={{ opacity: 0, top: 50 }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="info__detail-item--wrap">
            <span className="key">Year</span>
            <span className="value"> {props.project.year} </span>
          </div>
        </motion.div>
        <motion.div
          className="info__detail-item"
          initial={{ opacity: 0, top: 50 }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="info__detail-item--wrap">
            <span className="key">Client</span>
            <span className="value"> {props.project.client} </span>
          </div>
        </motion.div>
        <motion.div
          className="info__detail-item"
          initial={{ opacity: 0, top: 50 }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="info__detail-item--wrap">
            <span className="key">Type</span>
            <span className="value"> {props.project.type} </span>
          </div>
        </motion.div>
        <motion.div
          className="info__detail-item"
          initial={{ opacity: 0, top: 50 }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="info__detail-item--wrap">
            <span className="key">Location</span>
            <span className="value"> {props.project.location} </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
