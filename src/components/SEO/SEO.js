//Modules
import React from "react";
import Helmet from "react-helmet";

const SEO = ({ title, description }) => {
  return (
    <Helmet title={`${title} | Omroom`}>
      <meta
        name="keywords"
        content={`omroom, spirit, bkk, bangkok, well-being, holistic, spirituality, meditation, alternative medicine, therapy, reiki, past life, energy healing`}
      />

      <meta
        name="description"
        content={`${description} | Healing and Spiritual Development in the Heart of Bangkok`}
      />

      {/* <meta name="image" content={`${siteUrl}${image}`} /> */}

      {/* GOOGLE ICON */}
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={`${title} | Omroom`} />

      <meta
        name="twitter:description"
        content={`${description} | Healing and Spiritual Development in the Heart of Bangkok`}
      />

      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/cooperda00/omroom/master/src/images/omroom_twitter.jpg"
      />

      <meta name="twitter:creator" content="@omroom" />

      {/* FACEBOOK */}
      <meta
        property="og:url"
        content="https://omroom.net"
        prefix="og: http://ogp.me/ns#"
      />

      <meta
        property="og:type"
        content="website"
        prefix="og: http://ogp.me/ns#"
      />

      <meta
        property="og:title"
        content={`${title} | Omroom`}
        prefix="og: http://ogp.me/ns#"
      />

      <meta
        property="og:description"
        content={`${description} | Healing and Spiritual Development in the Heart of Bangkok`}
        prefix="og: http://ogp.me/ns#"
      />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/cooperda00/omroom/master/src/images/omroom_og.jpg"
        prefix="og: http://ogp.me/ns#"
      />
      <meta
        property="og:image:width"
        content="1200"
        prefix="og: http://ogp.me/ns#"
      />
      <meta
        property="og:image:height"
        content="630"
        prefix="og: http://ogp.me/ns#"
      />
    </Helmet>
  );
};

export default SEO;
