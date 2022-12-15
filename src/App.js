import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<HomePage />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
