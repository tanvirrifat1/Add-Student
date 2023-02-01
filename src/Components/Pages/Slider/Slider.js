import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const Slider = () => {
    return (
        <div className='bg-base-200'>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/handsome-businessman-signing-contract-with-partner_1163-5281.jpg?w=1380&t=st=1672724082~exp=1672724682~hmac=c7412164ccdbb9fa9fa2d482501b4b9ad301c77d43bed24c8094e6300e52b66b" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/business-partners-closing-deal_74855-1153.jpg?w=1380&t=st=1672724142~exp=1672724742~hmac=c9c087a12eec4cf5e426b0d583ae286db106da169140e30ba18a6410081e5968" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/hands-holding-puzzle-business-problem-solving-concept_53876-129016.jpg?w=1380&t=st=1672724143~exp=1672724743~hmac=941b2c4bb794b676e04f63f69512f15ce1bea1199486f81d6bf271a36c47629e" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;