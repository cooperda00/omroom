import styled from "styled-components";
import { font, spacing, grays, flex, thinSubTitle } from "../Utilities";

export const StyledForm = styled.form`
  ${flex("column", "flex-start", "center")};
  /* padding-top: ${spacing.L}; */

  .input-group {
    ${flex("column", "flex-start", "center")};
    margin-bottom: ${spacing.M};
    width: 100%;

    label {
      ${thinSubTitle()};
      ${font("M")};
      display: block;
      margin-bottom: ${spacing.S};
      width: 40rem;
    }

    input,
    textarea {
      padding: ${spacing.S};
      ${font("M")};
      width: 40rem;
      border: 1px solid ${grays[3]};
    }

    textarea {
      height: 20rem;
      resize: vertical;
    }
  }

  .error-message {
    ${font("S")};
    margin-top: ${spacing.S};
    color: darkred;
  }
`;
