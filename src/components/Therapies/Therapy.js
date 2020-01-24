//Modules
import React from "react";
import Image from "gatsby-image";
import { navigate } from "gatsby";
//Styles
import styled from "styled-components";
import { flex, font, spacing, thinSubTitle, colors } from "../../Utilities";

const Therapy = ({ therapy }) => {
  return (
    <StyledCard id={therapy.id}>
      <div className="image-container">
        <Image fluid={therapy.image} className="image" />
      </div>

      <div className="content">
        <h2 className="title">{therapy.name}</h2>
        <div className="practitioners">
          {therapy.practitioners.map((practitioner, i) => {
            return (
              <p
                key={i}
                onClick={() => {
                  navigate(`/practitioners/#${practitioner.id}`);
                }}
              >
                {practitioner.name}
              </p>
            );
          })}
        </div>
        <div className="info">
          {therapy.info.map((paragraph, i) => {
            //Get total no of chars for all paragraphs and make text smaller if too long
            const totalChars = therapy.info.reduce((tot, cur) => {
              return tot + cur.length;
            }, 0);

            return (
              <p key={i} className={totalChars > 700 && "long-text"}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  margin-bottom: ${spacing.L};

  @media (min-width: 1000px) {
    ${flex("row", "center", "flex-start")};
  }

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

    @media (min-width: 1000px) {
      width: 60%;
      height: 55rem;
      padding: ${spacing.SM};
    }

    /* @media (min-width: 1024px) {
      width: 60%;
      height: 55rem;
    }

    @media (min-width: 1200px) {
      width: 60%;
      height: 60rem;
    } */

    .image {
      border-radius: 5px;
      height: 100%;
      width: 100%;
    }
  }

  .content {
    ${flex("column", "flex-start", "center")};

    @media (min-width: 1000px) {
      ${flex("column", "flex-start", "flex-start")};
      width: 40%;
      padding-top: ${spacing.SM};
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

      @media (min-width: 1000px) {
        text-align: left;
      }
    }

    .practitioners {
      ${flex("row", "center", "flex-start")};
      margin-bottom: ${spacing.SM};

      p {
        ${font("S")};
        background: ${colors.primaryLL};
        margin-right: ${spacing.S};
        padding: 0 ${spacing.S};
        cursor: pointer;
      }
    }

    .info {
      ${flex("column", "flex-start", "flex-start")};
      width: 80%;

      p {
        ${font("S")};
        margin-bottom: ${spacing.S};
      }

      .long-text {
        @media (min-width: 1000px) {
          ${font("XS")};
        }
      }
    }
  }
`;

export default Therapy;
