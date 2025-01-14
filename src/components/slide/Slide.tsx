import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slide.scss";
import { dataSlide } from "../../models";
import { Link } from "react-router-dom";
import { SwiperRef } from "swiper/react";

export default function Slide() {
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null); // Use `any` for Swiper instance as TypeScript doesn't enforce a specific type.

  useEffect(() => {
    if (
      swiperRef.current &&
      prevButtonRef.current &&
      nextButtonRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;

      // Initialize and update navigation
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="slide">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Capture Swiper instance
        }}
        loop={true}
      >
        {dataSlide.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide__item">
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
            </div>
          </SwiperSlide>
        ))}
        <button ref={prevButtonRef} className="btn-slide left">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <path fill="transparent" d="M22.5 12.5 15 20l7.5 7.5" />
          </svg>
        </button>
        <button ref={nextButtonRef} className="btn-slide right">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <path fill="transparent" d="M17.5 12.5 25 20l-7.5 7.5" />
          </svg>
        </button>
      </Swiper>
    </div>
  );
}
