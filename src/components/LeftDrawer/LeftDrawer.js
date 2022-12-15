import React from "react";
import { X } from "react-feather";
import { Row, Col } from "reactstrap";
import "./leftdrawer.css";
function LeftDrawer({ isOpenLeftDrawer, setIsOpenLeftDrawer }) {
  console.log("isOpenLeftDrawer: ", isOpenLeftDrawer);
  return (
    <>
      <Row
        className="left_drawer"
        style={{
          left: isOpenLeftDrawer ? "0px" : "-100000px",
        }}
      >
        <Col className="left_drawer_container">
          <Row className="justify-content-end">
            <X
              className="navbar_logo"
              onClick={() => {
                setIsOpenLeftDrawer(false);
              }}
            />
          </Row>
          <Col className="left_drawer_menu_container">
            <ul>
              <li className="left_drawer_menu">Home</li>
              <li className="left_drawer_menu">Shop</li>
              <li className="left_drawer_menu">Knowledge</li>
              <li className="left_drawer_menu">Track Order</li>
              <li className="left_drawer_menu_register">Register/ Login</li>
            </ul>
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default LeftDrawer;
