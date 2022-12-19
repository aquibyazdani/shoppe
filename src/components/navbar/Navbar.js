import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import LeftDrawer from "../LeftDrawer/LeftDrawer";
import "./navbar.css";
//Context
import { AppContext } from "../../contexts/AppContext";
import RightDrawer from "../RightDrawer/RightDrawer";
function Navbar() {
  const { isOpenLeftDrawer, setIsOpenLeftDrawer, handleRightDrawer } =
    useContext(AppContext);

  return (
    <>
      <Row className="nav_bar_main">
        <Col xs={2} sm={4} md={4} lg={4}>
          <img
            className="navbar_logo"
            src="./icons/menu.svg"
            alt="menu"
            onClick={() => setIsOpenLeftDrawer(!isOpenLeftDrawer)}
          />
        </Col>
        <Col xs={8} sm={4} md={4} lg={4}>
          <Row className="navbar_logo_container">
            <img
              className="brand_logo"
              src="brand-logo.png"
              alt="logo"
              onClick={() => window.open("/", "_self")}
            />
          </Row>
        </Col>
        <Col xs={2} sm={4} md={4} lg={4}>
          <Row className="justify-content-end">
            <img
              onClick={() => {
                handleRightDrawer("Search");
              }}
              className="navbar_logo_accnt"
              src="./icons/search.svg"
              alt="menu"
            />
            <img
              onClick={() => window.open("/login", "_self")}
              className="navbar_logo_user"
              src="./icons/user.svg"
              alt="menu"
            />
            <img
              onClick={() => {
                handleRightDrawer("Cart");
              }}
              className="navbar_logo"
              src="./icons/shopping-bag.svg"
              alt="menu"
            />
          </Row>
        </Col>
      </Row>
      <LeftDrawer />
      <RightDrawer />
    </>
  );
}

export default Navbar;
