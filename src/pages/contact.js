//Modules
import React from "react";
//Components
import Layout from "../components/Layout/Layout";
import Contact from "../components/Contact/Contact";
import SEO from "../components/SEO/SEO";

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact" />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
