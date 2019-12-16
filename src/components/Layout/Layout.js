//Modules
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
//Modules
import Header from "./Header";
import Footer from "./Footer";
//Base CSS
import "./base.css";
//Styled Components
import styled from "styled-components";
import { colors } from "../../Utilities";

const Layout = ({ children }) => {
  const data = useStaticQuery(query);

  return (
    <>
      <Header />
      <StyledMainContainer>{children}</StyledMainContainer>
      <Footer />
    </>
  );
};

const StyledMainContainer = styled.main`
  width: 100%;
  min-height: 85vh;
`;

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Layout;
