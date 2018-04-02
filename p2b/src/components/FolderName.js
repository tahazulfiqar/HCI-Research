import React, { Component } from "react";
import { Col } from "reactstrap";

// Capitalize: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
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
