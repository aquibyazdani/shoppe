import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import "./leftdrawer.css";
import Cookie from "js-cookie";
//AppContext
import { AppContext } from "../../contexts/AppContext";
function LeftDrawer() {
  const {
    clickShopDrawer,
    setClickShopDrawer,
    isOpenLeftDrawer,
    setIsOpenLeftDrawer,
  } = useContext(AppContext);
  return (
    <>
      <Row
        className="left_drawer"
        style={{
          left: isOpenLeftDrawer ? "0px" : "-700px",
        }}
      >
        <Col className="left_drawer_container">
          <Row className="justify-content-end">
            <img
              onClick={() => {
                setIsOpenLeftDrawer(false);
              }}
              className="leftdrawer_x"
              src="/icons/x.svg"
              alt="close window"
            />
          </Row>
          <Col className="left_drawer_menu_container">
            {!clickShopDrawer ? (
              <ul>
                <li className="left_drawer_menu">Home</li>
                <li className="left_drawer_menu_shop">
                  <p>Shop</p>{" "}
                  <span>
                    <img
                      onClick={() => {
                        setClickShopDrawer(true);
                      }}
                      className="shop_right_icon"
                      src="/icons/arrow-right.svg"
                      alt="shop"
                    />
                  </span>
                </li>
                <li className="left_drawer_menu">Knowledge</li>
                <li className="left_drawer_menu pb-4">Track Order</li>
                <li className="left_drawer_menu_search">
                  <p>Search</p>
                  <span>
                    <img
                      className="search_right_icon"
                      src="/icons/arrow-right.svg"
                      alt="shop"
                    />
                  </span>
                </li>
                <li className="left_drawer_menu_register">Register/ Login</li>
              </ul>
            ) : (
              <ul>
                <li className="left_drawer_menu_shop mb-5 pb-4">
                  <p>Shop</p>
                  <span>
                    <img
                      onClick={() => {
                        setClickShopDrawer(false);
                      }}
                      className="shop_right_icon"
                      src="/icons/arrow-left.svg"
                      alt="shop"
                    />
                  </span>
                </li>
                {["Skin", "Hair", "Bath & Body", "All Products"].map((item) => {
                  return (
                    <li
                      key={item + "p"}
                      className="left_drawer_category"
                      onClick={() => {
                        Cookie.set("collection", item);
                        window.open(`/collection`, "_self");
                      }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            )}
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default LeftDrawer;
