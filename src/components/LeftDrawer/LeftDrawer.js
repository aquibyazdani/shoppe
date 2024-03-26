import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import "./leftdrawer.css";
import { Link } from "react-router-dom";
//AppContext
import { AppContext } from "../../contexts/AppContext";
import { linkToCollection } from "../../utils/utils";
function LeftDrawer() {
  const {
    allCategories,
    clickShopDrawer,
    setClickShopDrawer,
    isOpenLeftDrawer,
    setIsOpenLeftDrawer,
    setIsOpenRightDrawer,
    setRightDrawerMenu,
    setPageSwitch,
    setProductCollection,
  } = useContext(AppContext);

  return (
    <>
      <Row
        className="left_drawer px-5 pt-5"
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
                <li
                  className="left_drawer_menu_search"
                  onClick={() => {
                    setIsOpenLeftDrawer(false);
                    setRightDrawerMenu("search");
                    setIsOpenRightDrawer(true);
                  }}
                >
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
                {allCategories.map((item) => {
                  return (
                    <Link
                      key={item + "p"}
                      to={linkToCollection(item)}
                      className="no-decoration"
                      onClick={() => {
                        setProductCollection(item);
                        setPageSwitch("collection");
                        setIsOpenLeftDrawer(!isOpenLeftDrawer);
                      }}
                    >
                      <li className="left_drawer_category">{item}</li>
                    </Link>
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
