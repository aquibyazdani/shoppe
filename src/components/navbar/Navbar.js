import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import LeftDrawer from "../LeftDrawer/LeftDrawer";
import "./navbar.css";
function Navbar() {
  const [isOpenLeftDrawer, setIsOpenLeftDrawer] = useState(false);
  return (
    <>
      <Row className="nav_bar_main">
        <Col md={4} lg={4}>
          <img
            className="navbar_logo"
            src="./icons/menu.svg"
            alt="menu"
            onClick={() => setIsOpenLeftDrawer(!isOpenLeftDrawer)}
          />
        </Col>
        <Col md={4} lg={4}>
          <Row className="justify-content-center text-center text-white">
            <img className="brand_logo" src="brand-logo.png" />
          </Row>
        </Col>
        <Col md={4} lg={4}>
          <Row className="justify-content-end">
            <img className="navbar_logo" src="./icons/search.svg" alt="menu" />
            <img className="navbar_logo" src="./icons/user.svg" alt="menu" />
            <img
              className="navbar_logo"
              src="./icons/shopping-bag.svg"
              alt="menu"
            />
          </Row>
        </Col>
      </Row>
      <LeftDrawer
        isOpenLeftDrawer={isOpenLeftDrawer}
        setIsOpenLeftDrawer={setIsOpenLeftDrawer}
      />
    </>
  );
}

export default Navbar;
