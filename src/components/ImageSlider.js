// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

// import required modules
import { EffectCards } from "swiper";

export function ImageSlider() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> 
          <img src="images/photos/1.jpg" alt='1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/photos/2.jpg" alt='2'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/photos/3.jpg" alt='3'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/photos/4.jpg" alt='4'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/photos/5.jpg" alt='5'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/photos/6.jpg" alt='6'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/photos/7.jpg" alt='7'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/photos/8.jpg" alt='8'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/photos/9.jpg" alt='9'/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}