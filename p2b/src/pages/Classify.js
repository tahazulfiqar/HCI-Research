import React from "react";
// import VideoSearch from "../containers/VideoSearchContainer.js";
import { Container, Row, Col } from "reactstrap";

const Classify = () => (
  <div
    style={{
      backgroundColor: "#F4F2F3",
      height: "100%",
      width: "100%",
      position: "absolute"
    }}
  >
    <div
      style={{
        height: "33.3%",
        textAlign: "center",
        backgroundColor: "red"
      }}
    >
      <Container
        style={{
          backgroundColor: "pink"
        }}
      >
        <Row>
          <Col />
          <Col
            style={{
              backgroundColor: "white"
            }}
          >
            Folder 2
          </Col>
          <Col
            style={{
              backgroundColor: "pink"
            }}
          />
        </Row>
      </Container>
    </div>

    <div
      style={{
        height: "33.3%",
        textAlign: "center"
      }}
    >
      <Container
        style={{
          backgroundColor: "pink"
        }}
      >
        <Row>
          <Col>Folder 1</Col>
          <Col
            style={{
              backgroundColor: "white"
            }}
          >
            Preview
          </Col>
          <Col
            style={{
              backgroundColor: "pink"
            }}
          >
            Folder 3
          </Col>
        </Row>
      </Container>
    </div>

    <div
      style={{
        height: "33.3%",
        textAlign: "center",
        backgroundColor: "red"
      }}
    >
      <Container
        style={{
          backgroundColor: "pink"
        }}
      >
        <Row>
          <Col />
          <Col
            style={{
              backgroundColor: "white"
            }}
          >
            List
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  </div>
);

export default Classify;
