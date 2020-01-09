//Styles
import styled from "styled-components";
import { maxContentWidth, font, thinTitle, spacing } from "../Utilities";

export const StyledContainer = styled.section`
  width: 100%;
  max-width: ${maxContentWidth};
  margin: 5rem auto;

  h1 {
    ${font("L")};
    ${thinTitle()};
    width: 100%;
    text-align: center;
    margin-bottom: ${spacing.L};
    padding: 0 ${spacing.S};

    @media (min-width: 500px) {
      ${font("XL")};
    }
  }

  .not-found-link {
    color: dodgerblue;
    cursor: pointer;
  }
`;
