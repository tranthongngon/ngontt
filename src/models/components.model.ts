import Image1 from "../assets/images/slide1.png";
import Image2 from "../assets/images/slide2.png";
import Image3 from "../assets/images/slide3.png";

export type SildeType = {
  link: string;
  uriImage: string;
};

export type InfomationType = {
  name: string;
  icon: string;
  link: string;
};

export enum SVGEnum {
  INSTAGRAM = "INSTAGRAM",
  FACEBOOK = "FACEBOOK",
  LINKEDIN = "LINKEDIN",
  GITHUB = "GITHUB",
  EMAIL = "EMAIL",
}

export const dataSlide: SildeType[] = [
  {
    link: "https://analytics-dev.inetcloud.vn/analytics/vinaco/visualize/page/index.cpx",
    uriImage: Image1,
  },
  {
    link: "https://analytics-dev.inetcloud.vn/analytics/vinaco/visualize/page/index.cpx",
    uriImage: Image2,
  },
  {
    link: "https://analytics-dev.inetcloud.vn/analytics/vinaco/visualize/page/index.cpx",
    uriImage: Image3,
  },
];

export const dataInfo: InfomationType[] = [
  {
    name: "Instagram",
    icon: SVGEnum.INSTAGRAM,
    link: "https://www.instagram.com/ngon.tt/",
  },
  {
    name: "Facebook",
    icon: SVGEnum.FACEBOOK,
    link: "https://www.facebook.com/tranthongngon/",
  },
  {
    name: "LinkedIn",
    icon: SVGEnum.LINKEDIN,
    link: "https://www.linkedin.com/in/ngontt/",
  },
  {
    name: "Github",
    icon: SVGEnum.GITHUB,
    link: "https://github.com/tranthongngon",
  },
  { name: "Contact Me", icon: SVGEnum.EMAIL, link: "tranngon.work@gmail.com" },
];
