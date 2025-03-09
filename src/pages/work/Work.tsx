import { useEffect, useState } from "react";
import Socials from "../../components/socials/Socials";
import Footer from "../../layout/footer/Footer";
import { dataProject } from "../../models";
import "./work.scss";
import ThumbProject from "../../components/thumbProject/ThumbProject";
import WorkBrief from "../../components/workBrief/WorkBrief";
import WorkList from "../../components/workList/WorkList";
import ListProject from "../../components/listProject/ListProject";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default function Work() {
  const isScreen = useMediaQuery("(max-width: 1199px)");
  const [name, setName] = useState<string>(dataProject[0].name);
  const [image, setImage] = useState<string>(dataProject[0].image);
  const onHandleHover = (name: string, image: string) => {
    setImage(image);
    setName(name);
  };
  return (
    <div className="work common">
      {!isScreen && (
        <div className="common__sticky">
          <ThumbProject name={name} image={image}></ThumbProject>
        </div>
      )}
      <div className="common__content">
        <WorkBrief />
        {!isScreen && <WorkList handleHover={onHandleHover} />}
        {isScreen && <ListProject hideHeader={true} hideFooter={true}/>}
        <Socials columns={2} width="100%" />
        <Footer />
      </div>
    </div>
  );
}
