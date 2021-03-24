import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function OtherHeader() {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "250px",
          backgroundImage:
            "url(" + require("assets/img/theme/img-1-1000x600.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-5" />
        {/* Header container */}
      </div>
    </>
  );
}

export default OtherHeader;