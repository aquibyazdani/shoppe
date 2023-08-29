import React, { useState, useEffect } from "react";
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
  const [quantity, setQuantity] = useState(1);
  const [cartProducts, setCartProducts] = useState([]);
  const [isOpenZoomProduct, setIsOpenZoomProduct] = useState(false);
  const [activeCollection, setActiveCollection] = useState();

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
  // const handleAddToCart = (name, price, quantity, src, id) => {
  //   let cart = JSON.parse(localStorage.getItem("cartProducts")) ?? [];
  //   let obj = {
  //     id: id,
  //     name: name,
  //     price: price,
  //     quantity: quantity ?? 1,
  //     src: src,
  //   };
  //   cart.push({ ...obj });
  //   localStorage.setItem("cartProducts", JSON.stringify(cart));
  // };
  const handleAddToCart = (name, price, quantity, src, id) => {
    let cart = JSON.parse(localStorage.getItem("cartProducts")) ?? [];
    cart.push(...ProductList.Products.filter((item) => item.id === id));
    localStorage.setItem("cartProducts", JSON.stringify(cart));
    setCartProducts(cart);
    setTimeout(() => {
      handleRightDrawer("Cart");
    }, 500);
  };

  function handleDeleteCart(id) {
    let cart = JSON.parse(localStorage.getItem("cartProducts")) ?? [];
    const filtered = cart.filter((obj) => obj.id !== id);
    setCartProducts(filtered);
    localStorage.setItem("cartProducts", JSON.stringify(filtered));
  }

  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("cartProducts")));
  }, []);
  const toggleProductZoom = () => setIsOpenZoomProduct(!isOpenZoomProduct);
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
        quantity,
        setQuantity,
        handleAddToCart,
        handleDeleteCart,
        cartProducts,
        setCartProducts,
        isOpenZoomProduct,
        setIsOpenZoomProduct,
        toggleProductZoom,
        activeCollection,
        setActiveCollection,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
