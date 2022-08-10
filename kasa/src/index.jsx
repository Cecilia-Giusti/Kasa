import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./utils/style/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </Router>
  </React.StrictMode>
);
