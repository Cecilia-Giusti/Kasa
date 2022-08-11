import Banner from "../../components/Banner";
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
      <Banner />
      <Gallery />
    </Main>
  );
}

export default Home;
