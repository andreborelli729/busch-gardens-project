import React from 'react';
import{Swiper, SwiperSlide} from 'swiper/react';
import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg'
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../../css/homeCarousel.css';
register();

function HomeCarousel(){
    return(
        <section className="homeCarousel">

            <Swiper
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation>
                <SwiperSlide>
                <img src={carousel1} className="homeCarouselImg"></img>

                </SwiperSlide>

                <SwiperSlide>
                <img src={carousel2}  className="homeCarouselImg"></img>

                </SwiperSlide>

                <SwiperSlide>
                <img src={carousel3}  className="homeCarouselImg"></img>

                </SwiperSlide>

            </Swiper>
        </section>
    );
}


export default HomeCarousel;