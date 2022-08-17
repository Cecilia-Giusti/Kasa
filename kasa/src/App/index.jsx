import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home";
import AccomodationPage from "../pages/AccomodationPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error from "../components/Error";

function App() {
  const [accomodationData, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`./P11---Kasa/data/data.json`);
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
        <Route exact path="/P11---Kasa">
          <Home accomodationData={accomodationData} />
        </Route>
        <Route path="/P11---Kasa/logement/:idAccomodation">
          <AccomodationPage accomodationData={accomodationData} />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
