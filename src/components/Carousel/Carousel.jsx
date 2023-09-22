import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import "swiper/css";

const Carousel = ({ data, componentRender }) => {
  const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
      swiper.slideTo(0, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    return <></>;
  };
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data}/>
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {
          data.map((item) => {
            return (
              <SwiperSlide>{componentRender(item)}</SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
};

export default Carousel;
