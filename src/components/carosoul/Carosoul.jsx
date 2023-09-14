// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/1.jpg";
import slide2 from "../../assets/2.jpg";
import slide3 from "../../assets/3.jpg";
import slide4 from "../../assets/4.jpg";

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={slide1} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" srcset="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
