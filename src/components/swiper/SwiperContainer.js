import { useEffect } from 'react';

import styles from './SwiperContainer.module.css';

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperItem from './SwiperItem';


function SwiperContainer() {
    SwiperCore.user([Pagination, Autoplay, Navigation]);

    return (<div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}>
            <SwiperItem
                src="https://image.delishkitchen.tv/recipe/245581622575890778/1.webp?version=1642497809&w=300"
                title='Food 1'
                body='ごはんがすすむ♪豚バラ肉と玉ねぎの甘辛炒め'
            />
            <SwiperItem
                src="https://image.delishkitchen.tv/recipe/245581622575890778/1.webp?version=1642497809&w=300"
                title='Food 2'
                body='可愛く仕上げて♪Wいちごのレアチーズケーキ'
                />
            <SwiperItem
                src="https://image.delishkitchen.tv/recipe/245581622575890778/1.webp?version=1642497809&w=300"
                title='Food 3'
                body='可愛く仕上げて♪Wいちごのレアチーズケーキ'
                />
            <SwiperItem
                src="https://image.delishkitchen.tv/recipe/245581622575890778/1.webp?version=1642497809&w=300"
                title='Food 4'
                body='ごはんがすすむ♪豚バラ肉と玉ねぎの甘辛炒め'
                />
            <SwiperItem
                src="https://image.delishkitchen.tv/recipe/245581622575890778/1.webp?version=1642497809&w=300"
                title='Food 5'
                body='可愛く仕上げて♪Wいちごのレアチーズケーキ'
                />
            <SwiperItem
                src="https://image.delishkitchen.tv/recipe/245581622575890778/1.webp?version=1642497809&w=300"
                title='Food 6'
                body='可愛く仕上げて♪Wいちごのレアチーズケーキ'
            />
            <SwiperItem
                src="https://image.delishkitchen.tv/recipe/245581622575890778/1.webp?version=1642497809&w=300"
                title='Food 7'
                body='ごはんがすすむ♪豚バラ肉と玉ねぎの甘辛炒め'
                />
            </Swiper>
        {/* <div className={styles['swiper-button-next']}></div>
        <div className={styles['swiper-button-prev']}></div>
        <div className={styles['swiper-pagination']}></div> */}
    </div>)
}

export default SwiperContainer;