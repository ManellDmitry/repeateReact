import React from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Button, Link } from "./component/Button";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./pages/Home";
import { WhatWeDo } from "./pages/What_we_do";
import { AboutUs } from "./pages/About_us";
import { GetInTouch } from "./pages/Get-in_touch";
import { OurWork } from "./pages/Our_work";

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
`;
const navLinks = [
  { id: "1", label: "Our work", path: "our-work" },
  { id: "3", label: "About us", path: "about-us" },
  { id: "2", label: "What we do", path: "what-we-do" },
  { id: "4", label: "Get in touch", path: "get-in-touch" },
];

function App() {
  const handleButtonClick = () => {};
  const handleLinkClick = () => {};

  return (
    <PageWrapper>
      <Header links={navLinks} />
      <main style={{ flex: "1 0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="our-work" element={<OurWork />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="what-we-do" element={<WhatWeDo />} />
          <Route path="get-in-touch" element={<GetInTouch />} />
        </Routes>
      </main>
      <Footer />
    </PageWrapper>
  );
}

export default App;
