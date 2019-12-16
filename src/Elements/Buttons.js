import { Link } from "gatsby";
import styled from "styled-components";
import { grays, spacing, font, colors, thinSubTitle } from "../Utilities";

export const StyledButton = styled.button`
  ${font("S")}
  border: none;
  border-radius: 0.2rem;
  background: ${colors.secondaryL};
  padding: ${spacing.XS} ${spacing.S};
  color: ${grays[5]};
  cursor: pointer;
`;

export const StyledCTA = styled(Link)`
  ${font("M")}
  ${thinSubTitle()};
  border: none;
  border-radius: 0.2rem;
  background: ${colors.primary};
  padding: ${spacing.S} ${spacing.SM};
  color: ${grays[5]};
  cursor: pointer;
  transition: 0.5s;
  border-bottom: 0.3rem solid ${colors.primaryD};

  &:hover {
    background: ${colors.primaryD};
  }
`;
