import React from "react";
import { Row, Col } from "reactstrap";
import "./account.css";
function Login() {
  return (
    <>
      <Row className="login_page_wrapper justify-content-center">
        <Col md={6}>
          <Row className="login_header">Login</Row>
          <Col className="text-center">
            <input type="email" placeholder="Email" className="input_login" />
            <input
              type="password"
              placeholder="Email"
              className="input_login"
            />
            <button className="login_submit_btn">Sign In</button>
            <Row className="forgot_info_login">
              <p>
                Forgot password? <span>/</span> Create Password
              </p>
            </Row>
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default Login;
