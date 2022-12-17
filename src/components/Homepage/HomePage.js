import React from "react";
import { Col, Row } from "reactstrap";
import "./homepage.css";
function HomePage() {
  return (
    <>
      <Row className="homepage_container">
        <Col md={8}>
          <img
            width={"100%"}
            src={
              "/products/images/glycolic-8-exfoliating-liquidmin-1669965267152.webp"
            }
            alt="product"
          />
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <ul>
            <li className="hp_li1">New Launch</li>
            <li className="hp_li2">Glycolic Acid 08% Exfoliating Liquid</li>
            <li className="hp_li3">
              Newest member in our exfoliating range. An Exfoliating Liquid with
              8% Glycolic Acid in Free Acid form to address uneven texture, dull
              skin, & uneven tone.
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
