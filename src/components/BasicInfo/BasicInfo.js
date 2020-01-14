//Modules
import React from "react";
//Styles
import { StyledContainer } from "../../Elements";
import { flex, font, spacing } from "../../Utilities";
import styled from "styled-components";

const BasicInfo = () => {
  return (
    <StyledContainer>
      <h1>About Us</h1>

      <StyledWrapper>
        <div>
          <p>
            We are a cozy little space for those seeking personal growth,
            well-being, healing, and spirituality. Omroom is nestled in the
            central shopping area of Bangkok, bringing you healing from diverse
            modalities for those curious and serious in finding a positive
            balance in their lives. We offer wellness classes, private
            therapies, workshops, certified courses and corporate training,
            delivered by consultants with wonderful gifts and impeccable
            integrity.
          </p>
        </div>

        <div>
          <p>
            Our supported modalities range from the clinical, such as
            Hypnotherapy, to the therapeutic, such as Reiki and Yoga. Omroom
            offers spiritual and wellness seekers a diverse range of modalities
            by appointment only. Please contact us to set up a session. Sessions
            via Skype or WhatsApp are also possible. Visit Omroom, Bangkok’s
            little spiritual haven and be well! Also be sure to check out{" "}
            <a href="https://www.villadulachuahin.com/">
              Villa du Lac by Omroom
            </a>{" "}
            for more information about our retreat programs.
          </p>
        </div>
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledWrapper = styled.div`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  padding: 0 ${spacing.M};

  div {
    margin-bottom: ${spacing.M};
    p {
      ${font("S")};

      a {
        color: dodgerblue;
      }
    }
  }

  @media (min-width: 1000px) {
    ${flex("row", "space-between", "flex-start")};

    div {
      width: 48%;

      p {
        ${font("SM")};
        text-align: justify;
      }
    }
  }
`;

export default BasicInfo;
