import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
//Context
import Collection from "./components/Collections/Collection";
import Login from "./components/Account/Login";
import ProductPage from "./components/product page/ProductPage";
import MainPage from "./components/MainPage";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route path={`/collection`} element={<Collection />}></Route>
          <Route path={`/login`} element={<Login />}></Route>
          <Route path={`/product-page`} element={<ProductPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
