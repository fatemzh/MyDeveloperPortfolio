import React, { useRef } from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { WORK_EXPERIENCE } from "../../utils/data";
import "./WorkExperience.css";
import Slider from "react-slick";

const WorkExperience = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="experience-container" id="WorkExperience">
      <h5>Projects</h5>
      <div className="experience-content">
        <button
          className="arrow-right"
          onClick={slideRight}
          aria-label="Slide right"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
        <button
          className="arrow-left"
          onClick={slideLeft}
          aria-label="Slide left"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
