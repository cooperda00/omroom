require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Omroom`,
    description: `Healing in the heart of Bangkok`,
    author: `@omroom`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5tpeeyjwtenq`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Omroom`,
        short_name: `Omroom`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7FD1B8`,
        display: `standalone`,
        icon: "src/images/icon.png"
      }
    }
  ]
};
