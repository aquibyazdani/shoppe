// src/components/NotFound.js
import React from "react";
import { Col } from "reactstrap";
import notfoundimg from "../../assests/404.jpg";
const NotFound = () => {
  console.log("404");
  return (
    <div className="container text-center mt-5 pt-5">
      <Col>
        <img
          style={{
            maxHeight: "50vh",
          }}
          src={notfoundimg}
          alt="404"
        />
      </Col>
    </div>
  );
};

export default NotFound;
