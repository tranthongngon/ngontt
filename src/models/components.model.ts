import Image1 from '../assets/images/slide1.png';
import Image2 from '../assets/images/slide2.png'
import Image3 from '../assets/images/slide3.png'
export type SildeType = {
  link: string;
  uriImage: string;
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
