//Modules
import React from "react";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
//Components
import Layout from "../components/Layout/Layout";
import { StyledContainer } from "../Elements";

const NotFoundPage = () => (
  <Layout>
    <Fade ssrFadeout duration={500}>
      <StyledContainer>
        <h1>404 : Page Not Found</h1>
        <h1>
          <Link to="/" className="not-found-link">
            Return Home
          </Link>
        </h1>
      </StyledContainer>
    </Fade>
  </Layout>
);

export default NotFoundPage;
