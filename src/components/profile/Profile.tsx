import Avatar from "../../assets/images/avatar.png";
import "./profile.scss";
import { motion } from "motion/react";
export type ProfilePropsType = {
  class: string;
};

export default function Profile(props: ProfilePropsType) {
  return (
    <motion.div
      initial={{ opacity: 0, top: 50 }}
      whileInView={{ opacity: 1, top: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`profile ${props.class}`}
    >
      <div className="profile__avatar">
        <img src={Avatar} alt="Ngontt" />
      </div>
      <div className="profile__text">
        <h6 className="profile__text-name">Tran Thong Ngon</h6>
        <span className="profile__text-postion">Frontend Engineer</span>
      </div>
    </motion.div>
  );
}
