import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./utils/style/GlobalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AccomodationPage from "./pages/AccomodationPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/logement/:idAccomodation">
        <AccomodationPage />
      </Route>
      <Footer />
    </Router>
  </React.StrictMode>
);
