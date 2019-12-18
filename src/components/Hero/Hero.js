//Modules
import React from "react";
import Image from "gatsby-image";
//Styles
import styled from "styled-components";
import {
  flex,
  spacing,
  colors,
  font,
  thinTitle,
  thinSubTitle
} from "../../Utilities";
//Components
import { StyledCTA } from "../../Elements";

const Hero = ({ image, title, children }) => (
  <HeroContainer>
    <StyledImage
      fluid={image}
      alt={title}
      imgStyle={{
        objectFit: "cover"
      }}
    />
    <Overlay />
    <Content>{children}</Content>
  </HeroContainer>
);

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.secondaryDD};
  opacity: 0.3;
`;

const Content = styled.div`
  ${flex("column", "center", "center")};
  padding: ${spacing.L};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.7)
  );

  h1,
  h2 {
    text-align: center;
    text-shadow: 0 2px 10px black;
    margin-bottom: ${spacing.M};
  }

  h1 {
    ${font("XL")};
    ${thinTitle()};
    color: white;
  }

  h2 {
    ${font("S")};
    color: white;
    font-weight: 300;
  }

  @media (min-width: 1000px) {
    ${flex("column", "flex-end", "flex-end")};
    padding: ${spacing.XL};
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.7)
    );

    h1,
    h2 {
      text-align: right;
      margin-bottom: ${spacing.S};
    }

    h1 {
      ${font("XXL")};
    }

    h2 {
      ${font("M")};
    }
  }
`;

export default Hero;
