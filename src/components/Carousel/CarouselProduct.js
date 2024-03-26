import React, { useContext, useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import "./carousel.css";
import { ChevronLeft, ChevronRight } from "react-feather";
//Context
import { AppContext } from "../../contexts/AppContext";
import { linkToProduct } from "../../utils/utils";
import { Link } from "react-router-dom";
function CarouselProduct({ section, action, productlist, concern, id }) {
  //Context
  const { sideScroll, handleAddToCart } = useContext(AppContext);
  const [activeDot, setActiveDot] = useState("left");
  const [scrollDistance, setScrollDistance] = useState(800);

  const scrollRight = (distance) => {
    let container = document.getElementById(id);

    if (container.scrollLeft > 838) {
      setActiveDot("right");
    } else {
      setActiveDot("left");
    }

    sideScroll(container, "right", 15, distance, 10);
  };

  const scrollLeft = (distance) => {
    let container = document.getElementById(id);
    sideScroll(container, "left", 15, distance, 10);

    if (container.scrollLeft < 400) {
      setActiveDot("left");
    } else {
      setActiveDot("right");
    }
  };
  useEffect(() => {
    if (window.innerWidth <= 575) {
      setScrollDistance(420);
    } else if (window.innerWidth <= 768) {
      setScrollDistance(580);
    } else {
      setScrollDistance(800);
    }
  }, []);

  return (
    <>
      <Row className={!concern ? "carousel_parent" : "concern_carousel_parent"}>
        <Col md="1" className="left_arrow_carousel justify-content-end">
          <span>
            <ChevronLeft
              onClick={() => scrollLeft(scrollDistance)}
              width="30px"
              height="30px"
            />
          </span>
        </Col>

        <Col xs={9} sm={9} md={9} className="carousel_col">
          {section && <p className="primary_title_carousel">{section ?? ""}</p>}
          <Row id={id} className="product_carousel_container">
            {productlist.map((item, index) => {
              return (
                <Col
                  className="carousel_card_container"
                  key={index + 1}
                  sm={6}
                  md={!concern ? 3 : 4}
                >
                  <Link to={`${linkToProduct(item)}`}>
                    <img width="100%" src={item?.images[0]} alt="salylic" />
                  </Link>

                  {item?.name && (
                    <Col className="carousel_productinfo">
                      <p className="carousel_product_name">{item?.name}</p>
                      <Row>
                        <p className="carousel_card_mrp">
                          {item?.mrp}
                          <span className="carousel_card_price">
                            {item?.offerPrice}
                          </span>
                        </p>
                      </Row>
                    </Col>
                  )}
                  {action && (
                    <button
                      className="carousel_action_btn"
                      onClick={() => {
                        handleAddToCart(
                          item?.name,
                          item?.offerPrice,
                          1,
                          item?.images[0],
                          item?.id
                        );
                      }}
                    >
                      {action}
                    </button>
                  )}
                  {item?.issue && (
                    <Row>
                      <button className="carousel_action_btn_cure">
                        {item?.issue}
                      </button>
                    </Row>
                  )}
                </Col>
              );
            })}
          </Row>

          <Row className="justify-content-center">
            <span
              className={
                activeDot === "right" ? "dot_carousel" : "dot_carousel_active"
              }
              onClick={() => scrollLeft(scrollDistance)}
            ></span>
            <span
              className={
                activeDot === "left" ? "dot_carousel" : "dot_carousel_active"
              }
              onClick={() => scrollRight(scrollDistance)}
            ></span>
          </Row>
        </Col>

        <Col md="1" className="left_arrow_carousel">
          <span>
            <ChevronRight
              onClick={() => scrollRight(scrollDistance)}
              width="30px"
              height="30px"
            />
          </span>
        </Col>
      </Row>
    </>
  );
}

export default CarouselProduct;
