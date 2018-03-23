import React from "react";
import { Container, Row, Col } from "reactstrap";
import pic from "../images/folder.png";

import PhotoList from "../containers/PhotoListContainer";
import Preview from "../containers/PreviewContainer";

const Classify = () => (
  <div
    style={{
      backgroundColor: "#F5F5F5",
      height: "100%",
      width: "100%",
      position: "absolute"
    }}
  >
    <div
      style={{
        height: "25%",
        textAlign: "center"
      }}
    >
      <Container>
        <Row>
          <Col />
          <Col>
            <div style={{ marginTop: "11%" }}>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  <img src={pic} height="90" />
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  Faces
                </Col>
              </Row>
            </div>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>

    <div
      style={{
        height: "35%",
        textAlign: "center"
      }}
    >
      <Container>
        <Row>
          <Col>
            <div style={{ marginTop: "16%" }}>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  <img src={pic} height="90" />
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  Text
                </Col>
              </Row>
            </div>
          </Col>
          <Col>
            <Preview />
          </Col>
          <Col>
            <div style={{ marginTop: "16%" }}>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  <img src={pic} height="90" />
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  Other
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div
      style={{
        height: "33.3%",
        textAlign: "center"
      }}
    >
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <PhotoList />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Classify;
