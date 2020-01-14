//Modules
import React from "react";
//Styles
import styled from "styled-components";
import { StyledContainer } from "../../Elements";
import { spacing } from "../../Utilities";

const Youtube = () => {
  return (
    <StyledContainer>
      <VideoContainer>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xZ6PnUoTa_Y?autoplay=1&loop=1&playlist=xZ6PnUoTa_Y"
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="What is Memory Therapy?"
          />
        </div>
      </VideoContainer>
    </StyledContainer>
  );
};

const VideoContainer = styled.div`
  width: 100%;
  padding: 0 ${spacing.S};

  @media (min-width: 1000px) {
    width: 80%;
  }

  .video {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.27198%;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export default Youtube;
