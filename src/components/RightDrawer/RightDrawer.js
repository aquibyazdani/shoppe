import React, { useContext, useEffect, useState } from "react";
import { Row, Col, FormGroup, Input, Label } from "reactstrap";
import "../LeftDrawer/leftdrawer.css";
import ProductList from "../../config/productlist.json";

//AppContext
import { AppContext } from "../../contexts/AppContext";
import { Minus, Plus, Trash } from "react-feather";
import { sortProducts } from "../../utils/utils";
function RightDrawer() {
  const {
    isOpenRightDrawer,
    allCategories,
    setIsOpenRightDrawer,
    rightDrawerMenu,
    setQuantity,
    quantity,
    handleDeleteCart,
    cartProducts,
    activeCollection,
    setActiveCollection,
    filterByCategory,
  } = useContext(AppContext);
  console.log("activeCollection: ", activeCollection);

  const [sortedProducts, setSortedProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  console.log("selectedFilters: ", selectedFilters);

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      // If checkbox is checked, add it to the selectedFilters array
      setSelectedFilters([...selectedFilters, value]);
    } else {
      // If checkbox is unchecked, remove it from the selectedFilters array
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    }
  };

  function applyAll(type) {
    if (type === "Sort") {
      setActiveCollection(sortedProducts);
    } else if ("Filter") {
      filterByCategory(ProductList.Products, selectedFilters);
    }
    setIsOpenRightDrawer(false);
  }

  const sortArrays = [
    { name: "Alphabetically, A-Z", criteria: "alphabetic", order: "asc" },
    { name: "Alphabetically, Z-A", criteria: "alphabetic", order: "desc" },
    { name: "Price, low to high", criteria: "price", order: "asc" },
    { name: "Price, high to low", criteria: "price", order: "desc" },
  ];

  return (
    <>
      <Row
        className="right_drawer"
        style={{
          right: isOpenRightDrawer ? "0px" : "-700px",
        }}
      >
        <Col>
          <Row className="justify-content-end px-5 pt-5">
            <img
              onClick={() => {
                setIsOpenRightDrawer(false);
              }}
              className="leftdrawer_x"
              src="/icons/x.svg"
              alt="close window"
            />
            {/* //Search */}
            {rightDrawerMenu === "Search" && (
              <div className="left_drawer_container">
                <p className="mb-4">{rightDrawerMenu}</p>

                <input
                  type="search"
                  placeholder="What are you looking for?"
                  className="serachbar_right"
                />
              </div>
            )}
            {/* //Sort */}
            {rightDrawerMenu === "Sort" && (
              <div>
                <div className="left_drawer_container_sort">
                  <p className="mb-4">{rightDrawerMenu}</p>

                  <FormGroup tag="fieldset">
                    {sortArrays.map((sort, index) => {
                      return (
                        <div key={sort?.name}>
                          <FormGroup tag="fieldset">
                            <FormGroup check>
                              <Input
                                bsSize="md"
                                name="radio1"
                                type="radio"
                                className="radio_sort_drawer"
                                onChange={() => {
                                  let sortedP = [];
                                  sortedP = sortProducts(
                                    activeCollection,
                                    sort.criteria,
                                    sort.order
                                  );
                                  setSortedProducts(sortedP);
                                }}
                              />
                              <Label className="label_sort_drawer" check>
                                {sort?.name}
                              </Label>
                            </FormGroup>
                          </FormGroup>
                        </div>
                      );
                    })}
                  </FormGroup>
                </div>
                <Row className="drawer_footer">
                  <div className="drawer_footer_btn">Apply</div>
                </Row>
              </div>
            )}

            {/* //Filter */}

            {rightDrawerMenu === "Filter" && (
              <div>
                <div className="left_drawer_container_sort">
                  <p className="mb-4">{rightDrawerMenu}</p>

                  <FormGroup tag="fieldset">
                    {allCategories.map((filter, index) => {
                      return (
                        <div key={filter}>
                          <FormGroup check>
                            <Input
                              type="checkbox"
                              value={filter}
                              onChange={(e) => {
                                handleCheckboxChange(e);
                              }}
                            />
                            <Label className="label_sort_drawer" check>
                              {filter}
                            </Label>
                          </FormGroup>
                        </div>
                      );
                    })}
                  </FormGroup>
                </div>
              </div>
            )}

            {rightDrawerMenu === "Cart" && (
              <div>
                <div className="left_drawer_container_sort">
                  <p className="mb-4">{rightDrawerMenu}</p>
                  {cartProducts?.map((item) => {
                    return (
                      <Row key={item?.id + 67} className="py-1">
                        <Col sm={4}>
                          <img
                            width="50%"
                            src={item?.images[0]}
                            alt={item?.name}
                          />
                        </Col>
                        <Col sm={4} className="cart_product_details">
                          <p>{item?.name}</p>
                          <p>
                            {item?.price} {`x ${quantity > 1 ? quantity : ""}`}
                          </p>
                        </Col>
                        <Col sm={4}>
                          <Row>
                            <Col>
                              <Minus
                                onClick={() => {
                                  if (quantity > 1) {
                                    setQuantity(quantity - 1);
                                  }
                                }}
                              />
                            </Col>
                            <Col>
                              <Plus
                                onClick={() => {
                                  setQuantity(quantity + 1);
                                }}
                              />
                            </Col>
                            <Col>
                              <Trash
                                onClick={() => {
                                  console.log("delte");
                                  handleDeleteCart(item?.id);
                                }}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    );
                  })}

                  <Row className="drawer_footer">
                    <div className="drawer_footer_btn">Go to cart</div>
                  </Row>
                </div>
              </div>
            )}
          </Row>
          {rightDrawerMenu !== "Search" && rightDrawerMenu !== "Cart" && (
            <Row className="drawer_footer">
              <div
                className="drawer_footer_btn"
                onClick={() => {
                  applyAll(rightDrawerMenu);
                }}
              >
                Apply
              </div>
            </Row>
          )}
        </Col>
      </Row>
    </>
  );
}

export default RightDrawer;
