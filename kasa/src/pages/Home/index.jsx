import Banner from "../../components/Banner";
import React from "react";
import Gallery from "../../components/Gallery";
import bannerHome from "../../assets/banner_Home.png";

function Home({ accomodationData }) {
  return (
    <main>
      <Banner image={bannerHome} type="Home" />
      <Gallery accomodationData={accomodationData} />
    </main>
  );
}

export default Home;
