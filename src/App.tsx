import React from "react";
import "./App.scss";

import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { ScrollTop } from "./components/ScrollTop";

function App() {
  const location = window.location;

  return (
    <React.StrictMode>
      <Router
        basename={
          location.pathname.includes("/tqj25/250150K") ? "/tqj25/250150K" : "/"
        }
      >
        <ScrollTop />
        <AnimatedRoutes />
      </Router>
    </React.StrictMode>
  );
}

export default App;
