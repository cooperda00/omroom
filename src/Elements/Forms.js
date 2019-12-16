import styled from "styled-components"
import { font, spacing, grays, flex } from "../Utilities"

export const StyledForm = styled.form`
  ${flex("column", "flex-start", "center")};
  padding-top: ${spacing.L};

  .input-group {
    margin-bottom: ${spacing.M};

    label {
      ${font("M")};
      display: block;
      margin-bottom: ${spacing.S};
    }

    input {
      ${font("M")};
    }
  }

  .error-message {
    ${font("S")};
    margin-top: ${spacing.S};
    color: darkred;
  }
`
