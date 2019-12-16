//Modules
import React from "react";
import Image from "gatsby-image";
//Styles
import styled from "styled-components";
import { flex, spacing, colors } from "../../Utilities";
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
  opacity: 0.2;
`;

const Content = styled.div`
  ${flex("column", "flex-end", "flex-end")};
  padding: ${spacing.XL};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
`;

export default Hero;
