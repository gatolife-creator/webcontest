import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Content } from "./pages/Content";
import { Test } from "./test/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/content" element={<Content />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
