import { ReactNode } from "react";
import { motion } from "motion/react";
import Instagram from "../../assets/images/instagram.svg?react";
import Facenook from "../../assets/images/facebook.svg?react";
import Linkedin from "../../assets/images/linkedin.svg?react";
import Email from "../../assets/images/email.svg?react";
import Github from "../../assets/images/github.svg?react";
import SVG from "../../assets/images/svg.svg?react";
import { dataInfo, SVGEnum } from "../../models";
import Arrow from "../../assets/images/arr-rotate-1.svg?react";
import "./socials.scss";

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

export type SocialsPropsType = {
  columns: number;
  width: string;
};

export default function Socials(props: SocialsPropsType) {
  const child1Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 0, y: -20 },
  };

  const child2Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -20 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, top: 50 }}
      whileInView={{ opacity: 1, top: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="socials"
      style={{
        gridTemplateColumns:
          props.columns === 1 ? "repeat(1, 1fr)," : "repeat(2, 1fr)",
        width: props.width,
      }}
    >
      {dataInfo.map((info, index) => (
        <div
          className={`social column-${
            props.columns
          } ${info.name.toLocaleLowerCase()}`}
          key={index}
        >
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
    </motion.div>
  );
}
