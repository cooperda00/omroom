import { Link } from "gatsby";
import styled from "styled-components";
import { grays, spacing, font, colors, thinSubTitle } from "../Utilities";

export const StyledButton = styled.button`
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

export const StyledExternal = styled.a`
  ${font("S")}
  ${thinSubTitle()};
  position: relative;
  border: none;
  border-radius: 0.2rem;
  background: ${colors.primary};
  padding: ${spacing.S} ${spacing.SM};
  color: ${grays[5]} !important;
  cursor: pointer;
  transition: 0.5s;
  border-bottom: 0.3rem solid ${colors.primaryD};
  text-align: center;

  &:hover {
    background: ${colors.primaryD};
  }

  @media (min-width: 1000px) {
    ${font("M")}
  }
`;

export const StyledCTA = styled(Link)`
  ${font("S")}
  ${thinSubTitle()};
  position: relative;
  border: none;
  border-radius: 0.2rem;
  background: ${colors.primary};
  padding: ${spacing.S} ${spacing.SM};
  color: ${grays[5]} !important;
  cursor: pointer;
  transition: 0.5s;
  border-bottom: 0.3rem solid ${colors.primaryD};
  text-align: center;

  &:hover {
    background: ${colors.primaryD};
  }

  @media (min-width: 1000px) {
    ${font("M")}
  }
`;
