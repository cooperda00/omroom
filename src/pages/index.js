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
import SeparationBand from "../components/SeparationBand/SeparationBand";
import SEO from "../components/SEO/SEO";
import Video from "../components/Video/Video";

const IndexPage = ({ data }) => {
  const bg = data.bgImage.childImageSharp.fluid;
  const band1 = data.band_1.childImageSharp.fluid;
  const band2 = data.band_2.childImageSharp.fluid;
  const band3 = data.band_3.childImageSharp.fluid;
  return (
    <Layout>
      <SEO title="Home" description="Home" />
      <Hero image={bg} title="Omroom">
        <h1>Welcome to Omroom</h1>
        <h2>Bangkok's leading facilitator of personal and spiritual growth</h2>
        <StyledCTA to="./contact">Book A Session</StyledCTA>
      </Hero>
      <BasicInfo />
      <Video />
      <SeparationBand image1={band1} image2={band2} image3={band3} />
      <Testimonials />
    </Layout>
  );
};

export const query = graphql`
  {
    bgImage: file(relativePath: { eq: "lotus_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    band_1: file(relativePath: { eq: "space_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    band_2: file(relativePath: { eq: "sep_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    band_3: file(relativePath: { eq: "space_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
