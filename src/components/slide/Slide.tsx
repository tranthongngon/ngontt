import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./slide.scss";
import { dataSlide } from "../../models";
import { Link } from "react-router-dom";

export default function Slide() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="slide">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {dataSlide.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={slide.link} className="slide__item">
              <div className="slide__item-thumb">
                <img src={slide.uriImage} alt="ngontt   " />
              </div>
              <Link to={slide.link} className="slide__item-btn">
                View project{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  color="rgb(255, 255, 255)"
                >
                  <g color="rgb(255, 255, 255)">
                    <path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path>
                  </g>
                </svg>
              </Link>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <button ref={prevRef}>Prev</button>
      <button ref={nextRef}>Next</button>
    </div>
  );
}
