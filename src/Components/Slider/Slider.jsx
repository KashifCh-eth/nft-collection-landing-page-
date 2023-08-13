import React from "react";
import Slider from "react-slick";
import styles from './Slider.module.scss';
import './OverRide.scss'

export default function SliderComponent({ imgs }) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    imgs.map((item,index)=>(
                        <div key={index} className={styles.slideImgDiv}>
                            <img src={item} alt="img" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );

}