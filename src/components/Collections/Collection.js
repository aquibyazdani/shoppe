import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import "./collection.css";
import ProductList from "../../config/productlist.json";

//CONTEXT
import { AppContext } from "../../contexts/AppContext";
import { ChevronDown } from "react-feather";
import { Link } from "react-router-dom";
import { linkToProduct } from "../../utils/utils";
function Collection() {
  const {
    productCollection,
    handleRightDrawer,
    setActiveCollection,
    activeCollection,
  } = useContext(AppContext);
  const [imageIndex, setImageIndex] = useState();

  useEffect(() => {
    if (window.location.href.includes("collection")) {
      if (
        window.location.pathname
          .split("/")[2]
          ?.split("-")
          .join(" ")
          .toLowerCase() === "all products"
      ) {
        setActiveCollection(ProductList.Products);
      } else if (
        window.location.pathname.split("/")[2]?.includes("best-selling")
      ) {
        const allProducts = ProductList.Products.filter(
          (products) => products?.["best-selling"] === true
        );

        setActiveCollection(allProducts);
      } else {
        const allProducts = ProductList.Products.filter(
          (products) =>
            products?.category.toLowerCase() ===
            window.location.pathname.split("/")[2]?.split("-").join(" ")
        );

        setActiveCollection(allProducts);
      }
    }
  }, [productCollection, setActiveCollection]);

  return (
    <>
      <Row className="coltn_wrapper justify-content-center">
        <Col md={5} className="coltn_wrapper_col text-center">
          <b>
            {window.location.pathname
              .split("/")[2]
              ?.split("-")
              .join(" ")
              ?.toUpperCase() ?? "hdgjkhkj "}
          </b>
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
              <div
                className="filter_btn"
                onClick={() => handleRightDrawer("Filter")}
              >
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
              <div
                className="filter_btn"
                onClick={() => handleRightDrawer("Sort")}
              >
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
            {activeCollection?.map((product, i) => {
              return (
                <Col md="4" xs={6} className="mb-4" key={product.name + i}>
                  <Link
                    className="link_product"
                    to={`${linkToProduct(product)}`}
                  >
                    <>
                      <span>
                        <img
                          width="100%"
                          onMouseEnter={(e) => {
                            setImageIndex(i);
                          }}
                          src={
                            i === imageIndex
                              ? `/${product.images[1]}`
                              : `/${product.images[0]}`
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
                    </>
                  </Link>
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
