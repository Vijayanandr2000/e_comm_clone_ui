import React, { useState, useEffect } from 'react';

import './Slider.css';

import { slides } from '../../utils/Slides';
import { Images } from '../../utils/Image';

const SliderSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide, setCurrentSlide]);

    const handlePrevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    };

    return (
        <div className="slider-section">

            <div className="slider-controls">
                <img
                    src={Images.Arrow.left}
                    alt="Previous"
                    className="slider-btn"
                    onClick={handlePrevSlide}
                />
                {/* <button className="slider-btn" onClick={handlePrevSlide}>Previous</button> */}
                <div className="slider">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            <div className="slide-content">
                                <h1>{slide.mainHeading}</h1>
                                <h2>{slide.subHeading}</h2>
                            </div>
                            <div className="slide-image">
                                <img src={slide.imageUrl} alt="Slide" />
                            </div>
                        </div>
                    ))}
                </div>

                <img
                    src={Images.Arrow.right}
                    alt="Next"
                    className="slider-btn"
                    onClick={handleNextSlide}
                />
                {/* <button className="slider-btn" onClick={handleNextSlide}>Next</button> */}
            </div>
        </div>
    );
};

export default SliderSection;
