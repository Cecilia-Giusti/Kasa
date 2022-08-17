import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home";
import AccomodationPage from "../pages/AccomodationPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
  const [accomodationData, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`./data/data.json`);
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
      <Route exact path="/P11---Kasa">
        <Home accomodationData={accomodationData} />
      </Route>
      <Route path="/logement/:idAccomodation">
        <AccomodationPage accomodationData={accomodationData} />
      </Route>
      <Footer />
    </Router>
  );
}
export default App;
