import Section1 from "../../components/Section1";
import React from "react";
import Gallery from "../../components/Gallery";
import styled from "styled-components";

const Main = styled.main`
  width: 86.11%;
  margin: auto;
`;

function Home() {
  return (
    <Main>
      <Section1 />
      <Gallery />
    </Main>
  );
}

export default Home;
