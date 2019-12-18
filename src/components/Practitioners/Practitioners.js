//Modules
import React from "react";

//Styles
import styled from "styled-components";
import {
  flex,
  maxContentWidth,
  font,
  thinTitle,
  spacing
} from "../../Utilities";
import { StyledContainer } from "../../Elements";
//Components
import Practitioner from "./Practitioner";

const Practitioners = ({ practitioners }) => {
  return (
    <StyledContainer>
      <h1>Our Practitioners</h1>
      <PractitionerGrid>
        {practitioners.map((practitioner, i) => (
          <Practitioner practitioner={practitioner} key={i} />
        ))}
      </PractitionerGrid>
    </StyledContainer>
  );
};

const PractitionerGrid = styled.div`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  margin-top: -3rem;
`;

export default Practitioners;
