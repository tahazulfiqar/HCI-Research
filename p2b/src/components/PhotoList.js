import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import importAll from "../utils/photoImport";

const images = importAll(require.context("../images/dataset", false, /\.jpg/));

const rowPadder = row =>
  row.length < 8 ? row.concat(Array.apply(null, Array(8 - row.length))) : row;

const colMap = (photos, selectedRow, selectedCol) =>
  photos.map(photo => {
    var style = {
      height: "100%",
      width: "100%",
      paddingTop: "4px",
      paddingBottom: "4px"
    };
    if (selectedRow && photos.indexOf(photo) === selectedCol)
      style = {
        ...style,
        backgroundColor: "yellow",
        borderStyle: "solid",
        borderColor: "green",
        borderWidth: "2px",
        paddingTop: "2px",
        paddingBottom: "2px"
      };
    var filename = photo + ".jpg";

    return (
      <Col>
        <div style={style}>
          {photo ? (
            <img src={images[filename]} alt={filename} height="42" />
          ) : null}
        </div>
      </Col>
    );
  });

const rowMap = (photos, selectedRow, selectedCol) =>
  photos.map(row => (
    <div>
      <Row>
        {colMap(
          rowPadder(row),
          photos.indexOf(row) === selectedRow,
          selectedCol
        )}
      </Row>
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
        this.props.leftPhoto();
        break;
      case 38:
        this.props.upPhoto();
        break;
      case 39:
        this.props.rightPhoto();
        break;
      case 40:
        this.props.downPhoto();
        break;
      case 82:
        this.props.removePhoto();
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
