import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home";
import AccomodationPage from "../pages/AccomodationPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error from "../components/Error";
import APropos from "../pages/APropos";

/**Fonction d'initialisation de l'application
 * @return {JSX.Element}
 */
function App() {
  const [accomodationData, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/Cecilia-Giusti/Kasa/gh-pages/data/data.json`
        );
        const accomodationData = await response.json();
        setData(accomodationData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/Kasa'>
          <Home accomodationData={accomodationData} />
        </Route>
        <Route path='/Kasa/logement/:idAccomodation'>
          <AccomodationPage accomodationData={accomodationData} />
        </Route>
        <Route exact path='/Kasa/a_propos'>
          <APropos />
        </Route>
        <Route>
          <Error path='*' />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
