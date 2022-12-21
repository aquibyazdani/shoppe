import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import "./shopbyconcerns.css";
import cureProducts from "../../config/cureProducts.json";

//Context
import { AppContext } from "../../contexts/AppContext";
import CarouselMenu from "../Carousel/CarouselMenu";
function ShopByConcerns() {
  // Contexts
  const {} = useContext(AppContext);

  return (
    <>
      <Row className="shop_concern_parent">
        <Col md={10}>
          <div className="shop_concern_frst_box">
            <p className="shop_concern_heading">Shop by concerns</p>
            <span>Find right products & routines for your skin needs</span>
          </div>

          <div className="shop_concern_second_box">
            <img
              src="/images/concernsbannerhorizontalmin-1646166678730.webp"
              alt="concern image"
              width="100%"
            />
          </div>
          <CarouselMenu
            productlist={cureProducts.Products}
            concern={true}
            id="cureCaarousel"
          />
        </Col>
      </Row>
    </>
  );
}

export default ShopByConcerns;
