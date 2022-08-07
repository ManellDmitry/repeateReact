import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { Container } from "./styledComponents";

const StyledFooter = styled.footer`
  flex: 0 1 auto;
  background-color: #6d6b67;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Logo />
      </Container>
    </StyledFooter>
  );
}

export default Footer;
