import styles from './SwiperItem.module.css';

// import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";

function SwiperItem(props){
    return (
        <SwiperSlide>
            <img
                src={props.src}
                alt={props.title}
                className={styles['slider_img']}
            />
            <div className={styles['slider__body']}>
                <b>{props.body}</b>
            </div>
        </SwiperSlide>
    );
}

export default SwiperItem;