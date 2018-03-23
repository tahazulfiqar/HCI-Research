import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import importAll from "../utils/photoImport";

const images = importAll(require.context("../images/dataset", false, /\.jpg/));

const colMap = (photos, selectedRow, selectedCol) =>
  photos.map(photo => {
    var style = {
      height: "100%",
      width: "100%",
      paddingTop: "3px",
      paddingBottom: "3px"
    };
    if (selectedRow && photos.indexOf(photo) == selectedCol)
      style = {
        ...style,
        backgroundColor: "yellow",
        borderStyle: "solid",
        borderColor: "green",
        borderWidth: "2px",
        paddingTop: "2px",
        paddingBottom: "2px"
      };

    return (
      <Col>
        <div style={style}>
          <img src={images[photo + ".jpg"]} height="42" />
        </div>
      </Col>
    );
  });

const rowMap = (photos, selectedRow, selectedCol) =>
  photos.map(row => (
    <div>
      <Row>{colMap(row, photos.indexOf(row) == selectedRow, selectedCol)}</Row>
      <div style={{ marginBottom: "5px" }} />
    </div>
  ));

const grid = props =>
  rowMap(
    props.photos.entities,
    props.photos.selectedRow,
    props.photos.selectedCol
  );

class PhotoList extends Component {
  _handleKeyDown = event => {
    switch (event.keyCode) {
      case 37:
        console.log("left");
        this.props.leftPhoto();
        break;
      case 38:
        console.log("up");
        this.props.upPhoto();
        break;
      case 39:
        console.log("right");
        this.props.rightPhoto();
        break;
      case 40:
        console.log("down");
        this.props.downPhoto();
        break;
      default:
        break;
    }
  };

  componentWillMount() {
    document.addEventListener("keydown", this._handleKeyDown.bind(this));
  }

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
