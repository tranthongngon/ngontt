import { getListImg } from "../../utils";
import "./gallery.scss";
import { motion } from "motion/react";
export type GalleryPropsType = {
  image: string[];
  name: string;
};

export default function Gallery(props: GalleryPropsType) {
  return (
    <section className="gallery">
      {getListImg('gallery').map((img, index) => (
        <motion.div
          className="gallery__img"
          initial={{ opacity: 0, top: 50 }}
          whileInView={{ opacity: 1, top: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          key={index}
        >
          <img src={img} alt={props.name} />
        </motion.div>
      ))}
    </section>
  );
}
