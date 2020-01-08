//Modules
import React from "react";
//Styles
import { StyledContainer } from "../../Elements";
import { flex, font, spacing } from "../../Utilities";
import styled from "styled-components";
//Components
import Therapy from "./Therapy";

const Therapies = ({ therapies }) => {
  return (
    <StyledContainer>
      <h1>Our Therapies</h1>

      <TherapyGrid>
        {therapies.map((therapy, i) => {
          return <Therapy key={i} therapy={therapy} />;
        })}
      </TherapyGrid>
    </StyledContainer>
  );
};

const TherapyGrid = styled.div`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  margin-top: -3rem;
`;

export default Therapies;
