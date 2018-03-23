import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import importAll from "../utils/photoImport";
import pic from "../images/folder.png";

const images = importAll(require.context("../images/dataset", false, /\.jpg/));

class Preview extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <img src={images[this.props.preview.selected + ".jpg"]} height="230" />
      </div>
    );
  }
}

export default Preview;
