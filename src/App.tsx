import React from "react";
import "./App.scss";

import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { ScrollTop } from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
