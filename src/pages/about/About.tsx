import ThumbProject from "../../components/thumbProject/ThumbProject";
import Footer from "../../layout/footer/Footer";
import Me from "../../assets/images/slide3.png";
import Infomation from "../../components/infomation/Infomation";
import AboutBrief from "../../components/aboutBrief/AboutBrief";
import WorkList from "../../components/workList/WorkList";

export default function About() {
  return (
    <div className="about common">
      <div className="common__sticky">
        <ThumbProject name={"Ngontt"} image={Me}></ThumbProject>
      </div>
      <div className="common__content">
        <Infomation />
        <AboutBrief />
        <WorkList />
        {/* <Socials columns={2} width="100%" /> */}
        <Footer />
      </div>
    </div>
  );
}
