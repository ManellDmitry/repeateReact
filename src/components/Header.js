import { Logo } from "./Logo";
import { Container } from "./styledComponents";
import styled from "styled-components";
import { useState } from "react";
import { lang } from "../i18n";

const StyledHeader = styled.header`
  flex: 0 1 auto;
  background-color: aliceblue;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 20px;
`;

const handleLangChange = (e) => {
  localStorage.setItem("lang", e.target.value);
  // window.location.reload();
  console.log(e.target);
};

function Header() {
  const [currentLang, setCurrentLang] = useState(lang);
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo color="black" />
        <select onChange={handleLangChange} defaultValue={currentLang}>
          <option value="en">English</option>
          <option value="uk">Українська</option>
          <option value="ru">Русский</option>
        </select>
      </HeaderContainer>
    </StyledHeader>
  );
}
export default Header;
