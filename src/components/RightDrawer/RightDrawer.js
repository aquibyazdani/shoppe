import React, { useContext } from "react";
import { Row, Col, FormGroup, Input, Label } from "reactstrap";
import "../LeftDrawer/leftdrawer.css";

//AppContext
import { AppContext } from "../../contexts/AppContext";
import { Minus, Plus, Trash } from "react-feather";
function RightDrawer() {
  const {
    isOpenRightDrawer,
    setIsOpenRightDrawer,
    rightDrawerMenu,

    quantityCart,
    setQuantityCart,
  } = useContext(AppContext);

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
                    {[
                      "Featured",
                      "Alphabetically, A-Z",
                      "Alphabetically, Z-A",
                      "Price, low to high",
                      "Price, high to low",
                    ].map((sort, index) => {
                      return (
                        <div>
                          <FormGroup tag="fieldset">
                            <FormGroup check>
                              <Input
                                bsSize="md"
                                name="radio1"
                                type="radio"
                                className="radio_sort_drawer"
                              />
                              <Label className="label_sort_drawer" check>
                                {sort}
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
                    {["Skin", "Hair", "Bath & Body"].map((filter, index) => {
                      return (
                        <div>
                          <FormGroup check>
                            <Input type="checkbox" />
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
                  {JSON.parse(localStorage.getItem("cartProducts"))?.map(
                    (item) => {
                      return (
                        <Row key={item?.id + 67}>
                          <Col sm={4}>
                            <img width="50%" src={item?.src} alt={item?.name} />
                          </Col>
                          <Col sm={4} className="cart_product_details">
                            <p>{item?.name}</p>
                            <p>
                              {item?.price}{" "}
                              {`x ${quantityCart > 1 ? quantityCart : ""}`}
                            </p>
                          </Col>
                          <Col sm={4}>
                            <Row>
                              <Col>
                                <Minus
                                  onClick={() => {
                                    if (quantityCart > 1) {
                                      setQuantityCart(quantityCart - 1);
                                    }
                                  }}
                                />
                              </Col>
                              <Col>
                                <Plus
                                  onClick={() => {
                                    setQuantityCart(quantityCart + 1);
                                  }}
                                />
                              </Col>
                              <Col>
                                <Trash />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      );
                    }
                  )}

                  <Row className="drawer_footer">
                    <div className="drawer_footer_btn">Go to cart</div>
                  </Row>
                </div>
              </div>
            )}
          </Row>
          {rightDrawerMenu !== "Search" && rightDrawerMenu !== "Cart" && (
            <Row className="drawer_footer">
              <div className="drawer_footer_btn">Apply</div>
            </Row>
          )}
        </Col>
      </Row>
    </>
  );
}

export default RightDrawer;
