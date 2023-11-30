/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles.scss";

const Swiper = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item, index) => (
                    <div className="swiper-slide" key={index}>
                        {item}
                    </div>
                ))}
            </div>
            <button className="swiper-button prev" onClick={handlePrev}>
                Prev
            </button>
            <button className="swiper-button next" onClick={handleNext}>
                Next
            </button>
        </div>
    );
};

export default Swiper;
