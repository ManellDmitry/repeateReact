import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { Container } from "./styledComponents";

const StyledFooter=styled.footer`
background-color:#6D6B67;
`

function Footer(){
    return(
        <StyledFooter>
          <Container>
        <Logo/>
          </Container>
      </StyledFooter>
    )
}
export default Footer;