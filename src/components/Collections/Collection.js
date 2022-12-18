import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import "./collection.css";
//CONTEXT
import { AppContext } from "../../contexts/AppContext";
import { ChevronDown, Star } from "react-feather";
import ProductList from "../../config/productlist.json";
function Collection() {
  const { productCollection } = useContext(AppContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [imageIndex, setImageIndex] = useState();

  useEffect(() => {
    if (productCollection === "All Products") {
      setFilteredProducts(ProductList.Products);
    } else {
      setFilteredProducts(
        ProductList.Products.filter(
          (item) => item.category === productCollection
        )
      );
    }
  }, [productCollection]);
  return (
    <>
      <Row className="coltn_wrapper justify-content-center">
        <Col md={5} className="coltn_wrapper_col text-center">
          <b>{productCollection}</b>
          <p>
            Shop our efficacious, transparent, and research-backed range of
            skincare & haircare products. Each product is formulated to target
            your specific skin or hair concerns.
          </p>
        </Col>

        {/* collection filter   */}
        <Col md={10} className="clctn_filter_wrapper">
          <Row className="clctn_filtr_bar">
            <Col className="d-flex justify-content-start">
              <div className="filter_btn">
                <Row className="justify-content-center">
                  <Col>
                    <p>Filter</p>{" "}
                  </Col>
                  <Col>
                    <ChevronDown color="#d4d4d4" />
                  </Col>
                </Row>
              </div>
            </Col>

            <Col className="d-flex justify-content-end">
              <div className="filter_btn">
                <Row className="justify-content-center">
                  <Col>
                    <p>Sort</p>{" "}
                  </Col>
                  <Col>
                    <ChevronDown color="#d4d4d4" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="product_list_wrapper">
            {filteredProducts.map((product, i) => {
              return (
                <Col md="4" className="mb-4" key={product.name + i}>
                  <span>
                    <img
                      width="100%"
                      onMouseEnter={(e) => {
                        setImageIndex(i);
                      }}
                      src={
                        i === imageIndex ? product.images[1] : product.images[0]
                      }
                      alt={product.name}
                    />
                  </span>

                  <Col className="carousel_productinfo text-center">
                    <p className="carousel_product_name">{product?.name}</p>
                    <p className="carousel_card_mrp mb-0">
                      {product?.reviewers[0].count}
                    </p>
                    <Row>
                      <p className="carousel_card_mrp mt-0">
                        {product?.mrp}
                        <span className="carousel_card_price mt-0">
                          {product?.offerPrice}
                        </span>
                      </p>
                    </Row>
                  </Col>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Collection;
