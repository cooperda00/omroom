//Modules
import React from "react";
import { Link } from "gatsby";
//Styles
import styled from "styled-components";
import {
  flex,
  maxContentWidth,
  spacing,
  font,
  colors,
  grays,
  thinSubTitle,
  thinTitle
} from "../../Utilities";
//Components
//Constants
import { menu } from "../../constants/menu";
import { social } from "../../constants/social";

const Footer = () => (
  <StyledFooter>
    <StyledWrapper>
      <div className="social-wrapper">
        <p className="in-touch">Get In Touch: </p>
        <div className="social-icons">
          {social.map((link, i) => {
            return (
              <a
                href={link.path}
                key={i}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>

      <div className="nav-wrapper">
        <p>Navigation:</p>
        <div className="nav">
          {menu.map((menuItem, i) => {
            return (
              <Link
                key={i}
                to={menuItem.path}
                className="nav-item"
                activeClassName="active-link-footer"
              >
                {menuItem.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="facebook-widget">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fomroombangkok&tabs=timeline&width=300&height=370&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="300"
          height="370"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="Facebook Widget"
        ></iframe>
      </div>
    </StyledWrapper>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  width: 100vw;
  border-top: 0.1rem solid ${colors.primaryL};
  background: ${colors.primaryLL};
`;

const StyledWrapper = styled.div`
  ${flex("column", "space-around", "center")};

  margin: 0 auto;
  padding: ${spacing.M} 0;
  width: 100%;
  max-width: ${maxContentWidth};
  height: 100%;

  @media (min-width: 1000px) {
    ${flex("row", "space-around", "flex-start")};
  }

  .nav-wrapper {
    ${flex("column", "space-around", "center")};
    margin-top: ${spacing.M};
    p {
      ${font("M")};
      ${thinTitle()};
    }
    .nav {
      ${flex("column", "flex-start", "flex-start")}
      ${font("SM")};
      margin-left: 0;
      margin-top: ${spacing.SM};

      .nav-item {
        ${thinSubTitle()};
        margin-bottom: ${spacing.S};
        transition: 0.5s;
      }

      .nav-item:hover {
        color: ${colors.secondaryDD};
      }
    }

    @media (min-width: 1000px) {
      margin-top: 0;

      .nav {
        margin-left: ${spacing.L};
      }
    }
  }

  .social-wrapper {
    ${flex("column", "space-around", "center")};

    .in-touch {
      ${font("M")};
      ${thinTitle()};
    }

    .social-icons {
      margin-top: ${spacing.S};

      a {
        ${font("L")};
        color: ${grays[5]};
        margin-right: ${spacing.S};
        transition: 0.5s;
        white-space: nowrap;
      }

      a:hover {
        color: ${colors.secondaryDD};
      }
    }
  }

  .facebook-widget {
    margin-top: ${spacing.M};

    @media (min-width: 1000px) {
      margin-top: 0;
    }
  }
`;

export default Footer;
