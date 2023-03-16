import Banner from "../../components/Banner";
import React from "react";
import Gallery from "../../components/Gallery";
import bannerHome from "../../assets/banner_Home.png";

/** Création de la page d'accueil
 * @param {array} accomodationData - Tableau des biens
 * @return {JSX.Element}
 */
function Home({ accomodationData }) {
  return (
    <main>
      <Banner image={bannerHome} type="Home" />
      <Gallery accomodationData={accomodationData} />
    </main>
  );
}

export default Home;
