import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"React JS UI Developer"}
            disc={`I offer expert React.js development services to build interactive and responsive web applications. With a strong focus on user experience, I craft elegant solutions that combine modern design with efficient coding practices`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Restful APIs Integration"}
            disc={`I specialize in seamless integration of React.js frontend with Node.js backend, creating dynamic web applications powered by robust APIs, ensuring a smooth user experience.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Figma/PSD/XD/PDF to Dynamic Websites"}
            disc={`Transforming your design files (Figma/PSD/XD/PDF) into vibrant, interactive websites that captivate users. I bring your vision to life with pixel-perfect precision and responsive layouts, ensuring a seamless experience across all devices.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
