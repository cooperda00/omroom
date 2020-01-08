//Modules
import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../components/Layout/Layout";
import Therapies from "../components/Therapies/Therapies";

const TherapiesPage = ({ data }) => {
  const therapies = [
    {
      name: "Memory Therapy",
      image: data.memoryTherapy.childImageSharp.fluid,
      info: [
        "Mutsumi will use muscle treat to detect and tag into your childhood thoughts pattern, she can clearly analyse your thoughts pattern and your reality through your own experiences.",
        "By talking to the energy of the related person while you followed her guided words into a meditative mind, your brain & heart will get into a coherence state. Your mind will shift into theta brain wave, we can reverse your belief system and set free the old energy that has been carried from your family members.",
        "Plus implement the real potential of who you are, expand your energy field."
      ],
      practitioners: ["Mutsumi Adachi", "John Bour"]
    },

    {
      name: "Shamanic Light and Transformation",
      image: data.shamanicLight.childImageSharp.fluid,
      info: [
        "Guide you to the abbeys of your subconscious mind, sometimes get into fractions of your past life memories.",
        "Speak to your true self and get in touch with your higher light. ",
        "We will use colour, shapes, metaphors to let you release the blocked energy.",
        "Clear and release unnecessary energy with the help of your innate wisdom."
      ],
      practitioners: ["Mutsumi Adachi"]
    },

    {
      name: "Chakra Cleansing",
      image: data.chakraCleansing.childImageSharp.fluid,
      info: [
        "Chakras are our energy system, interior and exteriorly connected to everything around us.",
        "Detect your blockage through the memories stuck inside your energy chakras, bring you back to the true essence of yourself."
      ],
      practitioners: ["Mutsumi Adachi"]
    },

    {
      name: "Past Life Regression Therapy",
      image: data.pastLife.childImageSharp.fluid,
      info: [
        "Past life regression is a therapeutic technique for accessing and re-experiencing a person's past lives or incarnations. Based on the theory that your reactions and the way you respond to problems are based in the past, past life regression is a holistic therapy that works with a person as a whole - not only the body and mind, but your emotions and spirit too. it's a path for personal growth and healing. To enable you to get the most out of your session, it is important to have a specific 'intention'.",

        "By examining the experiences that are thought to have first caused the problem, practitioners can help connect their client's current issues to a past life. It is hoped that by undergoing this therapeutic process, you will be able to make connections that you were unable to before - perhaps finally providing you with some explanation, or a sense of internal peace.",

        "Past life regression therapy is typically thought to be best for helping people to explore a spiritual path and it is gaining recognition as a type of spiritual healing. But whether you follow a religion or not, it is thought that by experiencing yourself as a soul in other lifetimes, you gain a profound awareness that you are more than a physical body. Your old patterns and beliefs are easily explained in a Past life Regression Therapy session."
      ],
      practitioners: ["Mutsumi Adachi"]
    },

    {
      name: "Tarot Reading",
      image: data.tarot.childImageSharp.fluid,
      info: [
        "When you are in the cross road of your life, we can use Tarot cards which rich in colours, archetypes, numbers and collective symbols.",
        "We can guide you to see the reality from another perspective. And take a leap to your new possibility in the future."
      ],
      practitioners: ["Mutsumi Adachi"]
    },

    {
      name: "Cranio Sacral Therapy",
      image: data.cranioSacral.childImageSharp.fluid,
      info: [
        "CST is a non-invasive, hands-on therapy that aims to enhance the body's own healing capabilities. It uses a gentle touch to manipulate the joints in the cranium or skull, parts of the pelvis, and the spine to treat disease."
      ],
      practitioners: ["Mutsumi Adachi"]
    },

    {
      name: "Reiki",
      image: data.reiki.childImageSharp.fluid,
      info: [
        "Reiki is an often misunderstood and poorly taught spiritual practice. It is not a cure for all things. Nor is about good and bad energy. It is not even about becoming ‘a healer’ or a wellness expert. Reiki is a process of self-discovery.",
        "When Michael first started learning reiki in 2006, he didn’t believe that it worked. But after over a decade of practice an detaching the art of reiki, he has seen the effects. Reiki not only helps people to understand the conditions they are facing in their lives but, most importantly, it helps the practitioners to evolve their attitudes, reduce their ego and see a reflection of themselves in others around them."
      ],
      practitioners: ["Michael Paul Stephens"]
    },

    {
      name: "Hypnotherapy",
      image: data.hypnotherapy.childImageSharp.fluid,
      info: [
        "Dr. Narindr can provide hypnotherapy to treat a number of issues, including weight loss, smoking cessation and stress relief, as well as provide tools to help you with relationships, money, addiction and business issues."
      ],
      practitioners: ["Dr. Narindr Vang"]
    },

    {
      name: "Reconnective Energy Healing",
      image: data.reconnectiveHealing.childImageSharp.fluid,
      info: [
        "RH helps one to experiencing healing at the physical, mental, emotional and spirit levels. RH enables a return to an optimal state of balance. It is the result of interacting with the fully comprehensive RH spectrum of frequencies that consists of energy, light and information.",
        "It is neither a therapy nor a treatment, as it does not focus on symptoms. It is something beyond, in RH we do not diagnose or treat sickness, we simply interact with the RH Frequencies, bringing about healings that are often instantaneous and tend to be lifelong by passing the sense of belief or faith or intention.",
        "RH is tangible, measurable and you can actually feel it. RH has completely transcended traditional energy healing techniques as it allows us to let go of the concept and approach of technique. While science continues to explore how it works.",
        "RH is not therapy or treatment. It is A CHANGE."
      ],
      practitioners: ["Dr. Narindr Vang"]
    }
  ];
  return (
    <Layout>
      <Therapies therapies={therapies} />
    </Layout>
  );
};

export const query = graphql`
  {
    pastLife: file(relativePath: { eq: "past_life_regression.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    shamanicLight: file(relativePath: { eq: "shamanic_light.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    tarot: file(relativePath: { eq: "tarot.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    memoryTherapy: file(relativePath: { eq: "qi_healing.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    reiki: file(relativePath: { eq: "reiki.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    hypnotherapy: file(relativePath: { eq: "hypnosis.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    reconnectiveHealing: file(
      relativePath: { eq: "reconnective_healing.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    chakraCleansing: file(relativePath: { eq: "chakra_cleansing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    cranioSacral: file(relativePath: { eq: "cranial_sacral.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default TherapiesPage;
