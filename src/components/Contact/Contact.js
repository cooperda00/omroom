//Modules
import React from "react";
//Components
import { StyledForm, StyledButton } from "../../Elements";
//Styles
import styled from "styled-components";
import {
  flex,
  maxContentWidth,
  font,
  thinTitle,
  spacing
} from "../../Utilities";
import { StyledContainer } from "../../Elements";

const Contact = () => {
  return (
    <StyledContainer>
      <h1>Get In Touch</h1>

      <StyledFlexContainer>
        <StyledForm
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success"
        >
          <div className="input-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              placeholder="John Smith"
              name="name"
              id="name"
              onFocus={e => {
                e.target.placeholder = "";
              }}
              onBlur={e => {
                e.target.placeholder = "John Smith";
              }}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              placeholder="smith_jo@example.com"
              name="email"
              id="email"
              onFocus={e => {
                e.target.placeholder = "";
              }}
              onBlur={e => {
                e.target.placeholder = "smith_jo@example.com";
              }}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message: </label>
            <textarea
              placeholder="Dear Omroom, ..."
              name="message"
              id="message"
              onFocus={e => {
                e.target.placeholder = "";
              }}
              onBlur={e => {
                e.target.placeholder = "Dear Omroom, ...";
              }}
              required
            ></textarea>
          </div>

          <StyledButton type="submit" value="Submit">
            Send
          </StyledButton>

          {/* INVISIBLE FOR NETLIFY */}
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
        </StyledForm>

        <StyledDetails>
          <p className="subtitle">Email:</p>
          <p className="detail">
            <a href="emailto:consult@omroom.net">consult@omroom.net</a>
          </p>
          <p className="subtitle">WhatsApp:</p>
          <p className="detail">+66 814 228 171 / +66 814 228 138</p>
        </StyledDetails>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

const StyledFlexContainer = styled.div`
  ${flex("column", "flex-start", "center")};

  @media (min-width: 1000px) {
    ${flex("row", "center", "flex-start")};
  }
`;

const StyledDetails = styled.div`
  ${flex("column", "flex-start", "center")};
  ${font("M")};
  margin-top: ${spacing.L};

  @media (min-width: 1000px) {
    ${flex("column", "flex-start", "flex-start")};
    padding-left: ${spacing.L};
    margin-top: 0;
  }

  .subtitle {
    ${thinTitle()};
  }

  .detail {
    margin-bottom: ${spacing.M};
    padding-left: ${spacing.S};
  }
`;

export default Contact;
