import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import img1 from "../assets/hero_sec_slider/img1.jpg";
import img2 from "../assets/hero_sec_slider/img2.jpg";
import img3 from "../assets/hero_sec_slider/img3.jpg";
import React from "react";

const MainSlider = () => {
  return (
    <div className="mainSlider w-[75%] h-[470px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        effect="fade"
      >
        <SwiperSlide>
          <img
            src={img1}
            alt=""
            className="w-[100%] p-[20px] h-[470px] rounded-[25px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt=""
            className="w-[100%] p-[20px] h-[470px] rounded-[25px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt=""
            className="w-[100%] p-[20px] h-[470px] rounded-[25px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default React.memo(MainSlider);
