import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Row, Col } from "reactstrap";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(require.context("../images/dataset", false, /\.jpg/));

const rowMap = photos =>
  photos.map(row => (
    <div>
      <Row>{colMap(row)}</Row>
      <div style={{ marginBottom: "5px" }} />
    </div>
  ));

const colMap = photos =>
  photos.map(photo => (
    <Col>
      <img src={images[photo + ".jpg"]} height="42" />
    </Col>
  ));

const grid = props => rowMap(props.photos.entities);

class PhotoList extends Component {
  render() {
    console.log(this.props);
    return (
      <Row>
        <div
          style={{
            width: "100%",
            fontSize: "22"
          }}
        >
          <Container>{grid(this.props)}</Container>
        </div>
      </Row>
    );
  }
}

export default PhotoList;
