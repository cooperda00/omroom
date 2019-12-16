//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { maxContentWidth } from "../Utilities"

export const ContentWrapper = ({ children }) => {
  return <StyledContentWrapper>{children}</StyledContentWrapper>
}

const StyledContentWrapper = styled.div`
  max-width: ${maxContentWidth};
  margin: 0 auto;
`
