declare module "@fontsource/dm-sans";
declare module "*.css";
declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "*.svg?react" {
    import { FC, SVGProps } from "react";
    const ReactComponent: FC<SVGProps<SVGSVGElement>>;
    export { ReactComponent };
    export default ReactComponent;
  }
