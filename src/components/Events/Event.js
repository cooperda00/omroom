//Modules
import React from "react";
import Image from "gatsby-image";
//Styles
import styled from "styled-components";
import { flex, font, thinSubTitle, spacing, grays } from "../../Utilities";
import { StyledExternal } from "../../Elements";

const Event = node => {
  const {
    id,
    title,
    date,
    url,
    text,
    image: { fluid }
  } = node.node;

  return (
    <EventCard key={id}>
      <div className="image-container">
        <Image fluid={fluid} className="image" />
      </div>

      <div className="copy">
        <h3>{title}</h3>
        <p className="date">{date}</p>
        <p className="text">{text.text}</p>

        <div className="button-container">
          <StyledExternal href={url} rel="noopener noreferrer" target="_blank">
            More Info
          </StyledExternal>
        </div>
      </div>
    </EventCard>
  );
};

const EventCard = styled.div`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  height: 75rem;
  border: 1px solid ${grays[2]};
  padding: ${spacing.M};
  position: relative;
  margin: ${spacing.S};

  @media (min-width: 700px) {
    width: 47%;
    height: 75rem;
  }

  @media (min-width: 1000px) {
    width: 47%;
    height: 70rem;
  }

  @media (min-width: 1200px) {
    width: 31%;
    height: 75rem;
  }

  .image-container {
    ${flex("column", "center", "center")};
    width: 100%;
    height: 40%;
    .image {
      width: 100%;
    }
  }

  .copy {
    ${flex("column", "flex-start", "center")};
    margin-top: ${spacing.S};
    text-align: center;

    h3 {
      ${font("M")};
      ${thinSubTitle()}
    }

    .date {
      ${font("S")};
      color: ${grays[4]};
    }

    .text {
      ${font("S")};
      margin-top: ${spacing.S};
    }

    .button-container {
      ${flex("column", "flex-end", "center")};
      position: absolute;
      bottom: ${spacing.SM};
    }
  }
`;

export default Event;
