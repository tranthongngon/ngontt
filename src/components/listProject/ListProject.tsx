import { dataProject } from "../../models";
import ProjectItem from "../projectItem/ProjectItem";
import ArrowDown from "../../assets/images/arr-down.svg?react";
import "./listProject.scss";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
export type ListProjectType = {
  hideHeader: boolean;
  hideFooter: boolean;
};

export default function ListProject(props: ListProjectType) {
  const { hideHeader, hideFooter } = props;
  return (
    <section className="projects">
      {!hideHeader && (
        <motion.div
          initial={{ opacity: 0, top: 50 }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="projects__head"
        >
          <div className="projects__head-wrap">
            <div className="projects__head-title">
              <div className="projects__head-title--text">
                Lastet Work <ArrowDown />{" "}
              </div>
            </div>
            <div className="projects__head-btn">
              <Link to="/work" className="projects__head-btn--view">
                View All
              </Link>
            </div>
          </div>
        </motion.div>
      )}
      <div className="projects__body">
        {dataProject.map((data, index) => (
          <ProjectItem
            key={index}
            name={data.name}
            id={data.id}
            image={data.image}
          />
        ))}
      </div>
      {!hideFooter && (
        <motion.div
          initial={{ opacity: 0, top: 50 }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="projects__footer"
        >
          <Link className="projects__footer-btn" to="/work">
            All Projects
          </Link>
        </motion.div>
      )}
    </section>
  );
}
