import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectType, Schema } from "../../models";
import ThumbProject from "../../components/thumbProject/ThumbProject";
import Footer from "../../layout/footer/Footer";
import { dataProject } from "../../models";
import Socials from "../../components/socials/Socials";
import ProjectInfo from "../../components/projectInfo/ProjectInfo";
import Gallery from "../../components/gallery/Gallery";
import ProjectNext from "../../components/projectNext/ProjectNext";

export default function Detail() {
  const [project, setProject] = useState<ProjectType>();
  const [projectNext, setProjectNext] = useState<ProjectType>()
  let params = useParams<Schema>();

  useEffect(() => {
    if (Object.keys(params).length > 0) {
      if (params.id) {
        setProject(dataProject.filter((p) => p.id === Number(params.id))[0]);
        const index = dataProject.findIndex(p => p.id === Number(params.id));
        if(index === dataProject.length - 1) {
          setProjectNext(dataProject[0]);
        }else {
          setProjectNext(dataProject[index + 1])
        }
      }
    }
    return () => {};
  }, [params]);

  return (
    <div className="detail common">
      <div className="common__sticky">
        {project && <ThumbProject name={project.name} image={project.image} />}
      </div>
      <div className="common__content">
        {project && <ProjectInfo project={project} />}
         {project && <Gallery image={project.gallery} name={project.name}/>}
         {projectNext && <ProjectNext project={projectNext} />}
        <Socials columns={2} width="100%" />
        <Footer />
      </div>
    </div>
  );
}
