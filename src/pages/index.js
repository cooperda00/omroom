//Modules
import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import { StyledCTA } from "../Elements";

const IndexPage = ({ data }) => {
  const bg = data.bgImage.childImageSharp.fluid;
  return (
    <Layout>
      <Hero image={bg} title="Omroom">
        <StyledCTA to="./practitioners">Book A Session</StyledCTA>
      </Hero>
      <section>HOME PAGE</section>
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
