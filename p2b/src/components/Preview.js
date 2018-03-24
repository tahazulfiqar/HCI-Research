import React, { Component } from "react";
import importAll from "../utils/photoImport";

const images = importAll(require.context("../images/dataset", false, /\.jpg/));

class Preview extends Component {
  render() {
    console.log(this.props);
    const filename = this.props.preview.selected + ".jpg";
    return this.props.preview.isEmpty ? (
      <h2 style={{ paddingTop: "90px" }}>No photos left</h2>
    ) : (
      <div>
        <img src={images[filename]} alt={filename} height="230" />
      </div>
    );
  }
}

export default Preview;
