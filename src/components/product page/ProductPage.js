import React, { useContext, useState } from "react";
import { Minus, Plus, Star } from "react-feather";
import { Col, Row } from "reactstrap";
import "./productpage.css";
//context
import { AppContext } from "../../contexts/AppContext";
function ProductPage() {
  const { selectedProduct, handleAddToCart } = useContext(AppContext);
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Row className="product_page_container">
        {selectedProduct?.map((item, i) => {
          return (
            <Col key={item.name} md={12}>
              <Row>
                <Col md={6}>
                  <img
                    width="100%"
                    src={item?.images[imageIndex]}
                    alt="Product"
                  />
                  <Row>
                    {item.images.map((image, i) => {
                      return (
                        <div key={image} className="pructpage_thumbnail">
                          <img
                            onClick={() => setImageIndex(i)}
                            className="pructpage_thumbnail_img"
                            src={image}
                            alt="Product"
                          />
                        </div>
                      );
                    })}
                  </Row>
                </Col>
                <Col md={6}>
                  <Row className="product_details">
                    <Col>
                      <h1 className="product_details_heading">{item?.name}</h1>
                      <Row className="prodct_revw_wrapper">
                        <span>
                          <Star />
                          <Star />
                          <Star />
                          <span className="ml-3">100 reviewes</span>
                        </span>
                      </Row>
                      <p className="product_small_descp">
                        {item?.Description[0].byline}
                      </p>
                      <p className="product_fullll_descp">
                        {item?.Description[0].full_info}
                      </p>
                      <p className="product_small_info">
                        {item?.Description[0].quality}
                      </p>
                      <Row className="product_price_pdct_page">
                        <p>{item.mrp}</p>{" "}
                        <p className="price_mrp">{item.offerPrice}</p>
                      </Row>

                      <p className="prdctdetls_quantity">Quantity</p>
                      <Row className="quntity_wrapper_prdct">
                        <Col sm={4} md={4}>
                          <Minus
                            className="cursor-pointer"
                            width={"18px"}
                            onClick={() => {
                              if (quantity > 1) {
                                setQuantity(quantity - 1);
                              }
                            }}
                          />
                        </Col>
                        <Col sm={4} md={4} className="text-center">
                          {quantity}
                        </Col>{" "}
                        <Col sm={4} md={4}>
                          <Plus
                            className="cursor-pointer"
                            width={"18px"}
                            onClick={() => setQuantity(quantity + 1)}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <button
                          className="addcart_prdct_page"
                          onClick={() => {
                            handleAddToCart(
                              item.name,
                              item.offerPrice,
                              1,
                              item.images[0]
                            );
                          }}
                        >
                          Add to cart
                        </button>
                      </Row>

                      <Row>
                        <button className="buynow_prdct_page">
                          Buy it now
                        </button>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default ProductPage;
