//Modules
import { Link } from "gatsby";
import React, { useState } from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
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
  const [menuStatus, toggleMenuStatus] = useState(false);

  const handleClick = () => {
    toggleMenuStatus(!menuStatus);
  };

  console.log(menuStatus);

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
          <a
            href="https://www.villadulachuahin.com/"
            className="MenuItem villa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Villa du Lac
          </a>
        </NavMenu>

        <Slide right when={menuStatus}>
          {menuStatus && (
            //Styles in base.css
            <nav className="mobile-nav">
              <MobileNavContent>
                {menu.map((menuItem, i) => {
                  return (
                    <Link
                      key={i}
                      to={menuItem.path}
                      className="mobile-item"
                      activeClassName="active-link"
                    >
                      {menuItem.name}
                    </Link>
                  );
                })}
                <a
                  href="https://www.villadulachuahin.com/"
                  className="mobile-item villa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Villa du Lac
                </a>
              </MobileNavContent>
            </nav>
          )}
        </Slide>

        <Fade big when={menuStatus}>
          {menuStatus && (
            <div
              className="backdrop"
              onClick={() => {
                toggleMenuStatus(false);
              }}
            />
          )}
        </Fade>

        <MobileButtonContainer onClick={handleClick}>
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
  position: relative;

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
  margin-left: auto;
  margin-right: ${spacing.S};

  @media (min-width: 1200px) {
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

    @media (min-width: 1000px) {
      margin-right: ${spacing.S};
      ${font("SSM")};
    }

    @media (min-width: 1100px) {
      margin-right: ${spacing.M};
      ${font("SM")};
    }
  }

  .villa {
    /* color: ${colors.secondaryDD}; */
    color: #ADC743;
  }
`;

const MobileButtonContainer = styled.div`
  ${font("L")};
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-right: ${spacing.M};
  z-index: 2000;
  background: none;
  border: none;

  @media (min-width: 768px) {
    ${font("XXL")};
    margin-right: ${spacing.L};
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

const MobileNavContent = styled.div`
  ${flex("column")};
  padding: ${spacing.M};
  margin-top: ${spacing.L};

  @media (min-width: 768px) {
    padding: ${spacing.XL}; 
  }

  .mobile-item {
    ${font("SM")};
    ${thinSubTitle()};
    margin-bottom: ${spacing.S};

    @media (min-width: 768px) {
      ${font("L")};
    }
  }

  .villa {
    /* color: ${colors.secondaryDD}; */
    color: #ADC743;
  }
`;
export default Header;
