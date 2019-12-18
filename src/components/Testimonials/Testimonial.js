//Modules
import React from "react";
//Styles
import styled from "styled-components";
import { flex, font, spacing, thinSubTitle, colors } from "../../Utilities";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = ({ testimonial }) => {
  const { name, highlight, flag, text } = testimonial;
  return (
    <StyledTestimonial>
      <FaQuoteLeft className="quote-icon" />
      <h2 className="highlight">{highlight}</h2>
      <div className="owner">
        <h3>{name}</h3>
        {flag}
      </div>

      <p>{text}</p>
    </StyledTestimonial>
  );
};

const StyledTestimonial = styled.div`
  margin-bottom: ${spacing.M};

  .quote-icon {
    font-size: 6rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${spacing.SM};
    color: ${colors.primary};
  }

  h2 {
    ${font("M")};
    ${thinSubTitle()}
  }

  .owner {
    ${flex("row", "flex-start", "center")};
    height: 4rem;

    h3 {
      ${font("SSM")};
      letter-spacing: 0.2rem;

      margin-right: ${spacing.S};
    }

    img {
      height: 70%;
    }
  }

  p {
    ${font("S")};
  }
`;

export default Testimonial;
