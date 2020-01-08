//Modules
import React from "react";
import Image from "gatsby-image";
//Styles
import styled from "styled-components";
import { flex, font, spacing, thinSubTitle, colors } from "../../Utilities";

const Therapy = ({ therapy }) => {
  return (
    <StyledCard>
      <div className="image-container">
        <Image fluid={therapy.image} className="image" />
      </div>
      <h2 className="title">{therapy.name}</h2>
      <div className="practitioners">
        {therapy.practitioners.map((practitioner, i) => {
          return <p key={i}>{practitioner}</p>;
        })}
      </div>
      <div className="info">
        {therapy.info.map((paragraph, i) => {
          return <p key={i}>{paragraph}</p>;
        })}
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  margin-bottom: ${spacing.L};

  .image-container {
    width: 80%;
    height: 30rem;
    margin-bottom: ${spacing.SM};

    @media (min-width: 400px) {
      width: 80%;
      height: 35rem;
    }

    @media (min-width: 768px) {
      width: 70%;
      height: 45rem;
    }

    @media (min-width: 1024px) {
      width: 60%;
      height: 55rem;
    }

    @media (min-width: 1200px) {
      width: 60%;
      height: 60rem;
    }

    .image {
      height: 100%;
      width: 100%;
    }
  }

  .title {
    ${thinSubTitle()};
    ${font("M")};
    max-width: 80%;
    margin-bottom: ${spacing.SM};
    text-align: center;

    @media (min-width: 768px) {
      ${font("L")};
    }
  }

  .practitioners {
    ${flex("row", "center", "flex-start")};
    margin-bottom: ${spacing.SM};

    p {
      ${font("S")};
      background: ${colors.secondaryLL};
      margin-right: ${spacing.S};
      padding: 0 ${spacing.S};
    }
  }

  .info {
    ${flex("column", "flex-start", "flex-start")};
    width: 80%;

    p {
      ${font("S")};
      margin-bottom: ${spacing.S};
    }
  }
`;

export default Therapy;
