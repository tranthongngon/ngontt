import Image1 from "../assets/images/slide1.png";
import Image2 from "../assets/images/slide2.png";
import Image3 from "../assets/images/slide3.png";
import { getImageByName, getListImg } from "../utils";

export type Schema = { [key: string]: any };

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

export type ProjectType = {
  name: string;
  image: string;
  id: number;
  year: number;
  client: string;
  type: string;
  location: string;
  gallery: string[];
  brief: string;
};

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

export const dataProject: ProjectType[] = [
  {
    name: "LTCQ",
    image: getImageByName("p-1.png") ?? "",
    id: 1,
    brief:
      "A travel photography series capturing the cultural richness and vibrant colors of an off-the-beaten-path destination.",
      client: 'government',
    year: 2024,
    gallery: [],
    type: 'document storage',
    location: 'VietNam'
  },
  {
    name: "Dirary",
    image: getImageByName("p-2.png") ?? "",
    id: 2,
    brief:
      "A travel photography series capturing the cultural richness and vibrant colors of an off-the-beaten-path destination.",
      client: 'government',
    year: 2024,
    gallery: [],
    type: 'personal storage',
    location: 'VietNam'
  },
  {
    name: "Visualize",
    image: getImageByName("p-3.png") ?? "",
    id: 3,
    brief:
      "A travel photography series capturing the cultural richness and vibrant colors of an off-the-beaten-path destination.",
      client: 'government',
    year: 2024,
    gallery: [],
    type: 'data analytics',
    location: 'VietNam'
  },
  {
    name: "Analytics",
    image: getImageByName("p-4.png") ?? "",
    id: 4,
    brief:
      "A travel photography series capturing the cultural richness and vibrant colors of an off-the-beaten-path destination.",
      client: 'government',
    year: 2024,
    gallery: [],
    type: 'data analytics',
    location: 'VietNam'
  },
  {
    name: "Honey",
    image: getImageByName("p-5.png") ?? "",
    id: 5,
    brief:
      "A travel photography series capturing the cultural richness and vibrant colors of an off-the-beaten-path destination.",
      client: 'government',
    year: 2024,
    gallery: [],
    type: 'work manage',
    location: 'VietNam'
  },
  {
    name: "Xapp",
    image: getImageByName("p-6.png") ?? "",
    id: 6,
    brief:
      "A travel photography series capturing the cultural richness and vibrant colors of an off-the-beaten-path destination.",
      client: 'government',
    year: 2024,
    gallery: [],
    type: 'design website',
    location: 'VietNam'
  },
];
