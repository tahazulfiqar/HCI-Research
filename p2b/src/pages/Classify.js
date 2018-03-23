import React from "react";
// import VideoSearch from "../containers/VideoSearchContainer.js";
import { Container, Row, Col } from "reactstrap";
import pic from "../images/folder.png";

import { PhotoList } from "../components/PhotoList";

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
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                <img src={pic} height="90" />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                Folder 2
              </Col>
            </Row>
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
          <Col>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                <img src={pic} height="90" />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                Folder 1
              </Col>
            </Row>
          </Col>
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
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                <img src={pic} height="90" />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                Folder 3
              </Col>
            </Row>
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
            <PhotoList />
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  </div>
);

export default Classify;
