import Banner from "../../components/Banner";
import React from "react";
import Gallery from "../../components/Gallery";

function Home({ accomodationData }) {
  return (
    <main>
      <Banner />
      <Gallery accomodationData={accomodationData} />
    </main>
  );
}

export default Home;
