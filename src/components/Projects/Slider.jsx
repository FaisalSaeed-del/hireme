import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Bumpy_Beeds from "../../assets/bumpybeds.png";
import MICLONE from "../../assets/miclone.png";
import CARLISLE from "../../assets/carlisle.png";
import FullSetters from "../../assets/fullsetters.png";
import RAFIKEY from "../../assets/rafiky.png";
import styled from "styled-components";

let data = [
  {
    demo: "https://bumpybeds.com/",
    img: Bumpy_Beeds,
    disc: "The ultimate destination for all things baby cribs, bassinets, and toddler beds",
  },
  {
    demo: "https://example.com/demo1",
    img: MICLONE,
    disc: "Here is the MI clone including all accessries that xiamoi sell on it's website",
  },
  {
    demo: "https://www.ccm-europe.com/gb",
    img: CARLISLE,
    disc: "Welcome to CARLISLE® Construction Materials (CCM) Europe - discover sustainable, innovative, industry-leading waterproofing and sealing solutions for flat roofs, facades, and buildings.",
  },
  {
    demo: "https://fullsetters.com/",
    img: FullSetters,
    disc: "Managing your resume and Applying for Jobs has never been this easier.",
  },
  {
    demo: "https://rafiky.net/en",
    img: RAFIKEY,
    disc: "REMOTE SIMULTANEOUS INTERPRETING ,Remote simultaneous interpretation. We are changing the world.",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
