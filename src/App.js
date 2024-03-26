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
import NotFound from "./components/404 Page/NotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route
            exact
            path="/collection/:name"
            element={<Collection />}
          ></Route>
          <Route exact path="/products/:name" element={<ProductPage />}></Route>
          <Route path={`/login`} element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
