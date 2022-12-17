import React, { useState } from "react";

export const AppContext = React.createContext();
const AppContextProvider = (props) => {
  const [productList, setProducList] = useState([]);
  console.log("productList: ", productList);

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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
