//Modules
import React from "react";
import { graphql } from "gatsby";
//Styles
import { StyledCTA } from "../Elements";
//Components
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import BasicInfo from "../components/BasicInfo/BasicInfo";
import Testimonials from "../components/Testimonials/Testimonials";

const IndexPage = ({ data }) => {
  const bg = data.bgImage.childImageSharp.fluid;
  return (
    <Layout>
      <Hero image={bg} title="Omroom">
        <StyledCTA to="./practitioners">Book A Session</StyledCTA>
      </Hero>
      <BasicInfo />
      <Testimonials />
    </Layout>
  );
};

export const query = graphql`
  {
    bgImage: file(relativePath: { eq: "omroom_interior.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
