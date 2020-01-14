//Styles
import styled from "styled-components";
import {
  maxContentWidth,
  font,
  thinTitle,
  spacing,
  grays,
  flex
} from "../Utilities";

export const StyledContainer = styled.section`
  ${flex("column", "flex-start", "center")};

  width: 100%;
  max-width: ${maxContentWidth};
  margin: 5rem auto;

  h1 {
    ${font("L")};
    ${thinTitle()};
    /* width: 100%; */
    /* text-align: center; */
    margin-bottom: ${spacing.L};
    padding: 0 ${spacing.S};
    border: 0.2rem solid ${grays[5]};
    border-radius: 3px;
    padding: ${spacing.S} ${spacing.M};

    @media (min-width: 500px) {
      ${font("XL")};
    }
  }

  .not-found-link {
    color: dodgerblue;
    cursor: pointer;
  }
`;
