//Modules
import { Link } from "gatsby";
import React from "react";
//Styled Components
import styled from "styled-components";
import {
  maxContentWidth,
  grays,
  flex,
  thinSubTitle,
  font,
  colors,
  spacing
} from "../../Utilities";
//Menu
import { menu } from "../../constants/menu";
//Logo
import logo from "../../images/omroom_logo_green.svg";
//Icons
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <StyledHeader>
      <div className="HeaderContentContainer">
        <LogoContainer>
          <img src={logo} alt="Omroom Logo" />
        </LogoContainer>

        <NavMenu>
          {menu.map((menuItem, i) => {
            return (
              <Link
                key={i}
                to={menuItem.path}
                className="MenuItem"
                activeClassName="active-link"
              >
                {menuItem.name}
              </Link>
            );
          })}
        </NavMenu>

        <MobileButtonContainer>
          <FaBars />
        </MobileButtonContainer>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: white;
  width: 100vw;
  height: 15vh;
  border-bottom: 0.1rem solid ${colors.primaryL};

  .HeaderContentContainer {
    ${flex("row", "space-between", "center")};
    height: 100%;
    margin: 0 auto;
    max-width: ${maxContentWidth};
  }
`;

const LogoContainer = styled.div`
  ${flex("column", "center", "flex-start")};
  height: 100%;
  margin-left: ${spacing.M};

  img {
    height: 55%;
  }
`;

const NavMenu = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  .MenuItem {
    ${thinSubTitle()};
    ${font("S")};
    margin-right: ${spacing.S};
    transition: 0.5s;

    &:hover {
      color: ${colors.primaryDD};
    }

    @media (min-width: 800px) {
      margin-right: ${spacing.S};
      ${font("SSM")};
    }

    @media (min-width: 1000px) {
      margin-right: ${spacing.M};
      ${font("SM")};
    }
  }
`;

const MobileButtonContainer = styled.button`
  ${font("L")};
  margin-right: ${spacing.S};

  @media (min-width: 768px) {
    display: none;
  }
`;

export default Header;
