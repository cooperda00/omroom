//Modules
import React from "react";
import Image from "gatsby-image";
//Styles
import styled from "styled-components";
import { flex, spacing, colors, maxContentWidth } from "../../Utilities";

const SeparationBand = ({ image1, image2, image3 }) => {
  return (
    <StyledBand>
      <div className="container">
        <div className="image-container">
          <Image fluid={image1} className="image" alt="" />
        </div>
        <div className="image-container">
          <Image fluid={image2} className="image" alt="" />
        </div>
        <div className="image-container">
          <Image fluid={image3} className="image" alt="" />
        </div>
      </div>
    </StyledBand>
  );
};

const StyledBand = styled.section`
  width: 100vw;
  min-height: 50vh;
  padding: ${spacing.L} 0;
  background: ${colors.primaryLL};

  .container {
    ${flex("column", "flex-start", "center")};
    max-width: ${maxContentWidth};
    width: 100%;
    height: 100%;
    margin: 0 auto;

    .image-container {
      height: 100%;
      width: 90%;
      margin-bottom: ${spacing.M};

      .image {
        border-radius: 5px;
        width: 100%;
        height: 100%;
      }
    }

    @media (min-width: 1000px) {
      ${flex("row", "space-between", "center")};

      .image-container {
        width: 30%;
        margin-bottom: 0;
      }
    }
  }
`;

export default SeparationBand;
