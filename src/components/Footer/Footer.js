import React from "react";
import { Facebook, Instagram } from "react-feather";
import { Row, Col } from "reactstrap";
import "./footer.css";
function Footer() {
  return (
    <>
      <Row className="main_footer">
        <Col className="footer_inner">
          <Row>
            <Col md={2}>
              <b className="footer_heading">About</b>
              <ul className="footer_ul">
                <li className="footer_li">Our Values</li>
                <li className="footer_li">Privacy Policy</li>
                <li className="footer_li">Terms & Conditions</li>
                <li className="footer_li">Corporate Information</li>
              </ul>
            </Col>
            <Col md={2}>
              <b className="footer_heading">Help</b>
              <ul className="footer_ul">
                <li className="footer_li">Knowledge</li>
                <li className="footer_li">FAQs</li>
                <li className="footer_li">Return & refund policy</li>
                <li className="footer_li">Contact us</li>
                <li className="footer_li">Track order</li>
              </ul>
            </Col>
          </Row>
          <hr className="footer_hr" />
          <Row className="footer_bottom_social">
            <Instagram
              onClick={() =>
                window.open("https://www.instagram.com/aquibyazdani/")
              }
              className="footer_bottom_social_icon"
            />
            <Facebook
              onClick={() =>
                window.open("https://www.facebook.com/aquibyazdani")
              }
              className="footer_bottom_social_icon"
            />
          </Row>
          <Row>
            <Col className="footer_credits">
              <p>Copyright @ 2023, Shoppe</p>
              <p>Powered by Aquib Yazdani</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
