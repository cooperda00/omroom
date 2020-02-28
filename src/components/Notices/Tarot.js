//Modules
import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
//Styles
import { StyledCTA } from "../../Elements";
import { flex, font, spacing, thinSubTitle } from "../../Utilities";
import styled from "styled-components";

const Tarot = () => {
  const data = useStaticQuery(query);
  const image = data.moon_venus.childImageSharp.fluid;

  return (
    <StyledWrapper>
      <div className="image-container">
        <Image fluid={image} className="image" />
      </div>

      <div className="copy">
        <h2>Discount on Tarot Reading</h2>
        <p>
          This week the Moon and Venus shared a rare kiss. Due to this
          auspicious celestial event, we are offering a discount on online Tarot
          Readings.
        </p>
        <p>
          We are currently providing an online Tarot Reading session for $66,
          down from $80. This offer is valid until the 24th March 2020.
        </p>

        <div className="button-wrapper">
          <StyledCTA to="/contact">Book A Session</StyledCTA>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  padding: 0 ${spacing.M};

  .image-container {
    ${flex("column", "flex-start", "center")};
    width: 100%;

    @media (min-width: 1000px) {
        ${flex("column", "flex-start", "flex-start")};
        width: 50%;
    }

    .image {
        width: 80%;
    }
  }

  .copy {
    h2 {
      ${font("M")};
      ${thinSubTitle()}
      margin-bottom: ${spacing.S};
      text-align: center;

      @media (min-width: 1000px) {
        text-align: left;
      }
    }

    p {
      ${font("S")};
      margin-bottom: ${spacing.S};

      a {
        color: dodgerblue;
      }
    }

    .button-wrapper {
      ${flex("column", "flex-start", "center")};
      width: 100%;
      margin-top: ${spacing.M};

      @media (min-width: 1000px) {
        ${flex("column", "flex-start", "flex-start")};
      }

      a {
        ${font("S")};
      }
    }
  }

  div {
    margin-bottom: ${spacing.M};
  }

  @media (min-width: 1000px) {
    ${flex("row", "space-between", "flex-start")};

    div {
      width: 48%;

      p {
        ${font("SM")};
        text-align: justify;
      }
    }
  }
`;

const query = graphql`
  {
    moon_venus: file(relativePath: { eq: "moon_venus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Tarot;
