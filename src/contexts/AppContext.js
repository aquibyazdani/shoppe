import React, { useState } from "react";

export const AppContext = React.createContext();
const AppContextProvider = (props) => {
  const [productList, setProducList] = useState([]);
  console.log("productList: ", productList);
  return (
    <AppContext.Provider
      value={{
        productList,
        setProducList,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
