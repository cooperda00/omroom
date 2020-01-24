//Modules
import React from "react";
import Fade from "react-reveal/Fade";
//Components
import Layout from "../components/Layout/Layout";
import Contact from "../components/Contact/Contact";
import SEO from "../components/SEO/SEO";

const ContactPage = () => {
  return (
    <Layout>
      <Fade ssrFadeout duration={500}>
        <SEO title="Contact" description="Contact" />
        <Contact />
      </Fade>
    </Layout>
  );
};

export default ContactPage;
