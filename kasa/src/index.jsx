import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./utils/style/GlobalStyle";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Footer />
    </Router>
  </React.StrictMode>
);
