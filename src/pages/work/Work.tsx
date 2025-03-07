import { useState } from "react";
import Socials from "../../components/socials/Socials";
import Footer from "../../layout/footer/Footer";
import { dataProject } from "../../models";
import "./work.scss";
import ThumbProject from "../../components/thumbProject/ThumbProject";
import WorkBrief from "../../components/workBrief/WorkBrief";
import WorkList from "../../components/workList/WorkList";

export default function Work() {
  const [name, setName] = useState<string>(dataProject[0].name);
  const [image, setImage] = useState<string>(dataProject[0].image);
  const onHandleHover = (name: string, image: string) => {
    setImage(image);
    setName(name)
  }
  return (
    <div className="work common">
      <div className="common__sticky">
        <ThumbProject name={name} image={image}></ThumbProject>
      </div>
      <div className="common__content">
        <WorkBrief/>
        <WorkList handleHover={onHandleHover}/>
        <Socials columns={2} width="100%" />
        <Footer />
      </div>
    </div>
  );
}
