import React from "react";
import { Container, Row, Col } from "reactstrap";
import pic from "../images/folder.png";

import PhotoList from "../containers/PhotoListContainer";
import Preview from "../containers/PreviewContainer";
import FolderName from "../containers/FolderNameContainer";

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
                  <img src={pic} alt={pic} height="90" />
                </Col>
              </Row>
              <Row>
                <FolderName name="upName" size="8" offset="2" />
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
          <Col md={{ size: 4 }}>
            <div style={{ marginTop: "16%" }}>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 3 }}>
                  <img src={pic} alt={pic} height="90" />
                </Col>
              </Row>

              <Row>
                <FolderName name="leftName" size="8" offset="3" />
              </Row>
            </div>
          </Col>
          <Col md={{ size: 4 }}>
            <Preview />
          </Col>
          <Col md={{ size: 3 }}>
            <div style={{ marginTop: "16%" }}>
              <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  <img src={pic} alt={pic} height="90" />
                </Col>
              </Row>
              <Row>
                <FolderName name="rightName" size="8" offset="2" />
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
