import React from "react";
import { Card, Col, Row } from "reactstrap";
import CarouselProduct from "../Carousel/CarouselProduct";
import ShopByConcerns from "../shopbyconcerns/ShopByConcerns";
import "./homepage.css";
import productlist from "../../config/productlist.json";
import OurValues from "../../config/ourvalues.json";
//context
function HomePage() {
  return (
    <>
      <div className="homepage_main_div">
        <Row className="homepage_container_first">
          <Col xs={12} md={8}>
            <img
              width={"100%"}
              src={
                "/products/images/glycolic-8-exfoliating-liquidmin-1669965267152.webp"
              }
              alt="product"
            />
          </Col>
          <Col xs={12} md={4} className="d-flex align-items-center">
            <ul className="hp_first_ul">
              <li className="hp_li1">New Launch</li>
              <li className="hp_li2">Glycolic Acid 08% Exfoliating Liquid</li>
              <li className="hp_li3">
                Newest member in our exfoliating range. An Exfoliating Liquid
                with 8% Glycolic Acid in Free Acid form to address uneven
                texture, dull skin, & uneven tone.
              </li>
            </ul>
          </Col>
        </Row>
        <CarouselProduct
          action={"Add to cart"}
          productlist={productlist.Products}
          section={"Our picks for you"}
          concern={false}
          id="product_carousel"
        />
        <ShopByConcerns />
        <Row className="homepage_container_values justify-content-center">
          <Col md={9}>
            <Row className="our_values_header">
              <p className="text-center">Our values</p>
            </Row>
            <Row className="justify-content-center">
              {OurValues.Values.map((item, i) => {
                return (
                  <Col md={4} key={item?.id + item.name} style={{}}>
                    <Card className="px-3 border-0">
                      <img
                        width="48px"
                        className="pb-3"
                        src={item.src}
                        alt={item.name}
                      />
                      <br />
                      <b>{item.name}</b>
                      <p>{item.value}</p>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Row className="homepage_container_review justify-content-center">
          <Col md={9}>
            <Row>
              {OurValues.Values.map((item, i) => {
                return (
                  <Col className="" md={4} key={item?.id + item.value}>
                    <Card className="review_card_hp">
                      <p>{item.value}</p>
                      <b>{item.name}</b>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HomePage;
