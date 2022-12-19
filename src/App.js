import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
//Context
import Collection from "./components/Collections/Collection";
import Login from "./components/Account/Login";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path={`/collection`} element={<Collection />}></Route>
          <Route path={`/login`} element={<Login />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
