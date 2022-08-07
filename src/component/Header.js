import React from "react";
import Navigation from "./Navigation";
import { Logo } from "./Logo";
import styled from "styled-components";
import { Container } from "./styledComponents";

const StyledHeader = styled.header`
  flex: 0 1 auto;
  background-color: aliceblue;
`;
const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function Header({ links }) {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo color="black" />
        <Navigation links={links} />
      </HeaderContainer>
    </StyledHeader>
  );
}
export default Header;
