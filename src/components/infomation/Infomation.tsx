import { ReactNode } from "react";
import Avatar from "../../assets/images/avatar.png";
import { dataInfo, SVGEnum } from "../../models";
import Instagram from "../../assets/images/instagram.svg?react";
import Facenook from "../../assets/images/facebook.svg?react";
import Linkedin from "../../assets/images/linkedin.svg?react";
import Email from "../../assets/images/email.svg?react";
import Github from "../../assets/images/github.svg?react";
import SVG from "../../assets/images/svg.svg?react";
import Arrow from "../../assets/images/arr-rotate-1.svg?react";
import "./infomation.scss";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const SVGIcon = ({ icon }: { icon: string }): ReactNode => {
  switch (icon) {
    case SVGEnum.INSTAGRAM:
      return <Instagram />;
    case SVGEnum.FACEBOOK:
      return <Facenook />;
    case SVGEnum.LINKEDIN:
      return <Linkedin />;
    case SVGEnum.GITHUB:
      return <Github />;
    case SVGEnum.EMAIL:
      return <Email />;
    default:
      return <SVG />;
  }
};

export default function Infomation() {
  const child1Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 0, y: -20 },
  };

  const child2Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -20 },
  };
  return (
    <div className="infomation">
      <div className="infomation__profile">
      <Link to="/about" className="infomation__wrap">
        <div className="profile">
          <div className="profile__avatar">
            <img src={Avatar} alt="Ngontt" />
          </div>
          <div className="profile__text">
            <h6 className="profile__text-name">Tran Thong Ngon</h6>
            <span className="profile__text-postion">Frontend Engineer</span>
          </div>
        </div>
        <div className="brief">
          <p className="brief-text">
            I'm Ema, a photographer based in Prague. I capture authentic moments
            and tell stories through my images, blending creativity and emotion
            in each shot.
          </p>
        </div>
      </Link>
      </div>
      <div className="infomation__social">
        {dataInfo.map((info, index) => (
          <div className="social" key={index}>
            <motion.a
              whileHover="visible"
              initial="hidden"
              href={
                info.icon === SVGEnum.EMAIL ? `mailto:${info.link}` : info.link
              }
              target="_blank"
              className={`${info.icon.toLocaleLowerCase()}`}
            >
              <span className="social-text"> {info.name} </span>
              <div className="social-wrap">
                <motion.span
                  variants={child1Variants}
                  transition={{ duration: 0.2 }}
                  className={`social-svg ${info.name.toLocaleLowerCase()}`}
                >
                  <SVGIcon icon={info.icon} />
                </motion.span>
                <motion.span
                  variants={child2Variants}
                  transition={{ duration: 0.2 }}
                  className="social-svg"
                >
                  <Arrow />
                </motion.span>
              </div>
            </motion.a>
          </div>
        ))}
      </div>
    </div>
  );
}
