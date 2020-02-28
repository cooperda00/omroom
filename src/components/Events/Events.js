//Modules
import React from "react";
//Styles
import { StyledContainer } from "../../Elements";
import styled from "styled-components";
import { flex } from "../../Utilities";
//Components
import Event from "./Event";

const Events = ({ events }) => {
  return (
    <>
      {events.length > 1 && (
        <StyledContainer>
          <h1>Upcoming Events</h1>
          <FlexContainer>
            {events.map(({ node }) => {
              const { timestamp } = node;
              const numericTimestamp = new Date(timestamp).getTime();
              const timestampNow = new Date().getTime();

              if (numericTimestamp >= timestampNow) {
                return <Event node={node} />;
              } else {
                return null;
              }
            })}
          </FlexContainer>
        </StyledContainer>
      )}
      ;
    </>
  );
};

const FlexContainer = styled.div`
  ${flex("row", "center", "center")};
  flex-wrap: wrap;
  width: 100%;
`;
export default Events;
