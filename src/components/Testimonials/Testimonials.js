//Modules
import React from "react";
//Styles
import { StyledContainer } from "../../Elements";
import { flex, font, spacing } from "../../Utilities";
import styled from "styled-components";
//Components
import Testimonial from "./Testimonial";
//Constants
import { testimonialData } from "../../constants/testimonials";

const Testimonials = () => {
  return (
    <StyledContainer>
      <h1>What Our Customers Have To Say</h1>

      <TestimonialsContainer>
        {testimonialData.map((testimonial, i) => {
          return <Testimonial key={i} testimonial={testimonial} />;
        })}
      </TestimonialsContainer>
    </StyledContainer>
  );
};

const TestimonialsContainer = styled.div`
  padding: 0 ${spacing.M};
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${spacing.L};
    grid-row-gap: ${spacing.S};
  }
`;

export default Testimonials;
