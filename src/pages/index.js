//Modules
import React from "react";
import Image from "gatsby-image";
import { graphql } from "gatsby";
//CSS
import "./css/index.css";

const IndexPage = ({ data }) => {
  const image = data.image.childImageSharp.fluid;
  return (
    <main className="main">
      <Image
        fluid={image}
        style={{
          height: "100vh",
          width: "100vw"
        }}
        imgStyle={{
          objectFit: "contain"
        }}
      />

      <div className="message">
        <h2>Site Under Construction</h2>
        <p>
          In the meantime, please contact{" "}
          <a href="mailto:mutsumi@omroom.net">consult@omroom.net</a> with
          enquiries.
        </p>
        <p>WhatsApp: +66 814 228 171 / +66 814 228 138</p>
      </div>
    </main>
  );
};

export const data = graphql`
  {
    image: file(relativePath: { eq: "logo_sky.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
