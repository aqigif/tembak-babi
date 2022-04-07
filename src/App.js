import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import JSListen from "./pages/js-listen";
import PGShoot from "./pages/pig-shoot";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PGShoot />} />
        <Route path="js-listen" element={<JSListen />} />
      </Routes>
    </div>
  );
}

export default App