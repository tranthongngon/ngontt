import ThumbProject from "../../components/thumbProject/ThumbProject";
import Me from "../../assets/images/slide3.png";
import Infomation from "../../components/infomation/Infomation";
import AboutBrief from "../../components/aboutBrief/AboutBrief";
import Footer from "../../layout/footer/Footer";

export default function Contact() {
  return (
    <div className="contact common">
      <div className="common__sticky">
        <ThumbProject name={"Ngontt"} image={Me}></ThumbProject>
      </div>
      <div className="common__content">
        <Infomation />
        <AboutBrief />
        {/* <Socials columns={2} width="100%" /> */}
        <Footer />
      </div>
    </div>
  )
}
