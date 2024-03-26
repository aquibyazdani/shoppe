import React, { useContext, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "react-feather";
import { AppContext } from "../../contexts/AppContext";
import { Row, Col } from "reactstrap";

function ZoomProduct(props) {
  const { toggleProductZoom } = useContext(AppContext);
  const [zoomValue, setZoomValue] = useState("100%");
  const zoomImage = () => {
    setZoomValue("150%");
  };
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      <Row>
        <Col sm="12" md="12">
          <Row
            className="justify-content-center"
            style={{
              position: "fixed",
              width: "100%",
            }}
          >
            {props?.images?.map((image, i) => {
              return (
                <Col key={image} md="1" className="pructpage_thumbnail">
                  <img
                    className="pructpage_thumbnail_img"
                    src={`/${image}`}
                    alt="zoomed"
                    onClick={() => setImageIndex(i)}
                  />
                </Col>
              );
            })}
          </Row>
          <Row
            className="justify-content-center"
            style={{
              overflow: "auto",
            }}
          >
            <img
              style={{
                height: zoomValue,
              }}
              src={`/${props?.images[imageIndex]}`}
              alt="current zoom"
              onClick={() => {
                zoomImage();
              }}
            />
          </Row>

          <Row
            className=""
            style={{
              position: "fixed",
              bottom: "20px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div className="icon_container_zoom">
              <ArrowLeft
                onClick={() => {
                  if (imageIndex !== 0) setImageIndex(imageIndex - 1);
                }}
                color={imageIndex !== 0 ? "black" : "grey"}
              />
            </div>
            <div className="icon_container_zoom">
              <X onClick={toggleProductZoom} />
            </div>
            <div className="icon_container_zoom">
              <ArrowRight
                onClick={() => {
                  if (imageIndex < props?.images?.length - 1)
                    setImageIndex(imageIndex + 1);
                }}
                color={
                  imageIndex < props?.images?.length - 1 ? "black" : "grey"
                }
              />
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default ZoomProduct;
