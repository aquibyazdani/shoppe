import React, { useState } from "react";
import Cookies from "js-cookie";
export const AppContext = React.createContext();
const AppContextProvider = (props) => {
  const [productList, setProducList] = useState([]);
  const [productCollection, setProductCollection] = useState(
    Cookies.get("collection") ? Cookies.get("collection") : "All products"
  );
  const [isOpenLeftDrawer, setIsOpenLeftDrawer] = useState(false);
  const [clickShopDrawer, setClickShopDrawer] = useState(false);

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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
