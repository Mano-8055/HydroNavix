import { Swiper, SwiperSlide } from "swiper/react";
import { Services } from "../json/services";
import Card1 from "../components/Card1";

import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const ServiceSection = () => {
  return (
    <div className="py-10">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        grabCursor={true}
        spaceBetween={30}
        autoplay={{
          delay: 0, 
          disableOnInteraction: false,
        }}
        speed={3000} 
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1440: { slidesPerView: 4.2 },
        }}
        onSwiper={(swiper) => {
          swiper.el.addEventListener("mouseenter", () => {
            swiper.autoplay.stop();
          });
          swiper.el.addEventListener("mouseleave", () => {
            swiper.autoplay.start();
          });
        }}
      >
        {Services.map((service) => (
          <SwiperSlide key={service.id} className="!h-auto">
            <Card1 title={service.title} id={service.id} img={service.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSection;
