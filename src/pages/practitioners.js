//Modules
import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../components/Layout/Layout";
import Practitioners from "../components/Practitioners/Practitioners";

const PractitionersPage = ({ data }) => {
  const practitioners = [
    {
      name: "Mutsumi Adachi",
      modalities: [
        "Memory Therapy",
        "Chakra Cleansing",
        "Shamanic Light and Transformation",
        "Past Life Regression",
        "Tarot Reading",
        "Cranio Sacral Therapy"
      ],
      website: "https://mutsumi-healing.com",
      image: data.mutsumi.childImageSharp.fluid,
      bio: [
        "Mutsumi was born in Tokyo with her Chinese diplomat father and her Japanese artist mother. As a child she was already fluent in Chinese, Japanese and English. She used to be an active fashion designer in Paris, and an amateur for French fusion cooking, with her French husband, they moved to Hong Kong where she had her own fashion trading company.",
        "During her business activity she was trained and followed the Japanese Shingo Esoterism teaching and became a lay disciple. She was a certified Great Vinaya master. She served as a medium and teacher for over 16 years for Shinnyo-en Buddhism organization. Living in Thailand since 1997, which she sees to be a hub of intensive learning for herself and for the not oppose around her.",
        "Mutsumi now promoting holistic energy hearings through Omroom, her wishes to make Omroom a place to introduce different modalities of healing and to help people to discover Self and walk the path of awareness. Mutsumi develops & provides her unique Qi healing courses to many different countries in the globe. This includes Collective awareness and intuitive development Tarot for healing, and memory therapy with sound fork healing. Now she travels around the world to offer her sessions & teach workshops."
      ]
    },

    {
      name: "John Bour",
      modalities: ["Memory Therapy"],
      website: "",
      image: data.john.childImageSharp.fluid,
      bio: [
        "John was born in Paris, grew up in a many different asian countries and speaks 5 languages. He has a very strong penchant for all things art. As a child, he would often draw flip books to animate his stories. In high school, he moved on to fine arts and music. He studied sound engineering and film before going on to open his own film production company in Bangkok. John has since left the busy film world and is currently designing villas as well as doing interior design. He continues to compose music today.",
        "Having grown up as a third culture child, John is able to analyze things from different perspectives allowing him to approach situations without any particular belief system. He learned meditation at a very young age and continues this practice today in several forms and can be very quick to connect to 'Source'. At Omroom, John offers his own kind of memory therapy which he learned and developed through training with his mother, Mutsumi (practitioner and founder of Omroom) and other healing modalities. John is a strong empath and is often described by his clients as kind, calm and grounding"
      ]
    },

    {
      name: "Michael Paul Stephens",
      modalities: ["Reiki"],
      website: "https://michaelpaulstephens.com",
      image: data.mps.childImageSharp.fluid,
      bio: [
        "Michael Paul Stephens is a British author, reiki master and meditation instructor who for the last 10 years has been teaching people to understand human wellbeing and to practice simple but effective wellness techniques in life.",
        "As a reiki master since 2006, Michael offers energy sessions with clients. All his sessions involve the recipient realizing the roots of their problems within their own life, which empowers each individual to their situation with personal compassion rather than becoming dependent on an external healer. He also trains reiki as a certified course over two days.",
        "As a published author of spiritual and wellness books, Michael is passionate about bringing his ideas into a down-to-earth format easy to understand, practice and apply. His four books are “Provolution” (2010), “Equanimous” (2011) “Why are we Here?” (2018) and “We-Topia” (2018)",
        "He has had several spiritual articles published including in Asia Spa Magazine, The Reiki Times and Director Magazine in Thailand and covering both corporate spirituality and personal spirituality."
      ]
    },

    {
      name: "Dr Narindr Vang",
      modalities: ["Hypnotherapy", "Reconnective Energy Healing"],
      website: "https://theenergyhealer.net",
      image: data.narindr.childImageSharp.fluid,
      bio: [
        "Dr. Narindr, trained as a Counseling Psychologist, is a licensed Hypnotherapist and Trainer of both Hypnosis and Energy Pshychology. He is proud to offer you certified Hypnosis from the National Guild of Hypnotists (NGH) in the US, since 1950.",
        "Dr Narindr has spent his time both overseas and locally, and as such has extensive experience dealing with different cultures, issues and needs. His healing is very intuitive and creative, as he strongly believes that every person is different both in terms of past events and meaning in life, thus every session is custom made with integrated healing modalities.",
        "His strong conviction is that once he he accepts a client, he will put his heart and soul fully into it to make sure that the issues at hand are resolved and the clients can move forward and be happy.",
        "At Omroom, Dr. Narindr is offering Hypnotherapy and Reconnective Energy Healing. From time to time there will be workshops being organized for group healing and self-healing learning."
      ]
    }
  ];
  return (
    <Layout>
      <Practitioners practitioners={practitioners} />
    </Layout>
  );
};

export const query = graphql`
  {
    mutsumi: file(relativePath: { eq: "mutsumi_bio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    john: file(relativePath: { eq: "john_bio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    mps: file(relativePath: { eq: "mps_bio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    narindr: file(relativePath: { eq: "narindr_bio.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default PractitionersPage;
