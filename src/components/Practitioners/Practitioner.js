//Modules
import React from "react";
import Image from "gatsby-image";
import { navigate } from "gatsby";
//Styles
import styled from "styled-components";
import { flex, colors, font, thinSubTitle, spacing } from "../../Utilities";
import { StyledCTA } from "../../Elements";

const Practitioner = ({ practitioner }) => {
  return (
    <StyledPractitioner id={practitioner.id}>
      <div className="image-container">
        <Image
          fluid={practitioner.image}
          alt={practitioner.name}
          className="image"
        />
      </div>

      <div className="details">
        <h2>{practitioner.name}</h2>
        <a
          href={practitioner.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {practitioner.website.replace("https://", "")}
        </a>
        <p className="modalities">
          {practitioner.modalities.map((modality, i) => (
            <span
              key={i}
              onClick={() => {
                navigate(`/therapies/#${modality.id}`);
              }}
            >
              {modality.name}
            </span>
          ))}
        </p>
        <div className="bios">
          {practitioner.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <StyledCTA to="/contact">Book A Session</StyledCTA>
      </div>
    </StyledPractitioner>
  );
};

const StyledPractitioner = styled.div`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  margin-bottom: ${spacing.M};

  @media (min-width: 1000px) {
    ${flex("row", "space-between", "flex-start")};
    height: 55rem;
    margin-bottom: ${spacing.L};
  }

  .image-container {
    height: 30rem;
    width: 100%;
    padding: ${spacing.M};

    @media (min-width: 350px) {
      width: 90%;
    }

    @media (min-width: 400px) {
      width: 80%;
    }

    @media (min-width: 700px) {
      width: 65%;
      height: 40rem;
    }

    @media (min-width: 850px) {
      width: 65%;
      height: 50rem;
    }

    @media (min-width: 1000px) {
      width: 45%;
      height: 100%;
    }

    .image {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }

  .details {
    width: 90%;

    @media (min-width: 1000px) {
      width: 50%;
    }

    h2 {
      ${font("M")};
      ${thinSubTitle()};
    }

    a {
      ${font("SSM")};
      color: dodgerblue;
    }

    .modalities {
      margin-bottom: ${spacing.S};
      margin-top: ${spacing.S};
      ${flex("row", "flex-start", "center")};
      flex-wrap: wrap;

      span {
        ${font("S")};
        padding: ${spacing.XS};
        margin-right: ${spacing.S};
        margin-bottom: ${spacing.XS};
        background: ${colors.primaryLL};
        cursor: pointer;
      }
    }

    .bios {
      margin-bottom: ${spacing.M};
      @media (min-width: 1000px) {
        padding-right: ${spacing.M};
      }

      @media (min-width: 1200px) {
        padding-right: 0;
      }
      p {
        ${font("VS")};
        margin-bottom: ${spacing.S};
      }
    }
  }
`;

export default Practitioner;
