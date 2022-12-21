import React, { useState } from "react";
import ProductList from "../config/productlist.json";

export const AppContext = React.createContext();
const AppContextProvider = (props) => {
  const [productList, setProducList] = useState([]);
  const [productCollection, setProductCollection] = useState("");
  const [isOpenLeftDrawer, setIsOpenLeftDrawer] = useState(false);
  const [clickShopDrawer, setClickShopDrawer] = useState(false);
  const [isOpenRightDrawer, setIsOpenRightDrawer] = useState(false);
  const [rightDrawerMenu, setRightDrawerMenu] = useState("Search");
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [pageSwitch, setPageSwitch] = useState("home");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const productPageHandler = (id) => {
    setSelectedProductId(id);
    setPageSwitch("product page");
    setSelectedProduct(ProductList.Products.filter((item) => item.id === id));
  };

  const sideScroll = (element, direction, speed, distance, step) => {
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
      if (direction === "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  const handleRightDrawer = (val) => {
    setIsOpenRightDrawer(!isOpenRightDrawer);
    setRightDrawerMenu(val);
  };
  return (
    <AppContext.Provider
      value={{
        productList,
        setProducList,
        sideScroll,
        productCollection,
        setProductCollection,
        isOpenLeftDrawer,
        setIsOpenLeftDrawer,
        clickShopDrawer,
        setClickShopDrawer,
        isOpenRightDrawer,
        setIsOpenRightDrawer,
        rightDrawerMenu,
        setRightDrawerMenu,
        handleRightDrawer,
        selectedProduct,
        setSelectedProduct,
        selectedProductId,
        setSelectedProductId,
        pageSwitch,
        setPageSwitch,
        filteredProducts,
        setFilteredProducts,
        productPageHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
