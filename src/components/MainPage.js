import React, { useContext } from "react";
import Collection from "./Collections/Collection";
import HomePage from "./Homepage/HomePage";
import ProductPage from "./product page/ProductPage";
//context
import { AppContext } from "../contexts/AppContext";
function MainPage() {
  const { pageSwitch } = useContext(AppContext);

  return (
    <>
      {pageSwitch === "home" && <HomePage />}
      {pageSwitch === "collection" && <Collection />}
      {pageSwitch === "product page" && <ProductPage />}
    </>
  );
}

export default MainPage;
