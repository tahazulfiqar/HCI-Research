import React, { Component } from "react";
import { Col } from "reactstrap";

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

class FolderName extends Component {
  render() {
    return (
      <Col sm="12" md={{ size: this.props.size, offset: this.props.offset }}>
        {capitalize(this.props.folderName[this.props.name])}
      </Col>
    );
  }
}

export default FolderName;
