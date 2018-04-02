import React, { Component } from "react";
import { NodeGroup } from "react-move";
import moment from "moment";
import importAll from "../utils/photoImport";

// Dynamic image import: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
const images = importAll(require.context("../images/dataset", false, /\.jpg/));
const defaultX = 650;
const defaultY = 380;
const timestampFormat = "MM-DD-YY HH:mm:ss.SSS";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = { x: defaultX, y: defaultY };
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  _onMouseMove(e) {
    if (e.screenX < 370) {
      this.props.removePhoto();
      this.props.classifyLeft(
        this.props.preview.selected,
        moment().format(timestampFormat)
      );
      this.setState({ x: defaultX, y: defaultY });
    } else if (e.screenY < 240) {
      this.props.removePhoto();
      this.props.classifyUp(
        this.props.preview.selected,
        moment().format(timestampFormat)
      );
      this.setState({ x: defaultX, y: defaultY });
    } else if (e.screenX > 815) {
      this.props.removePhoto();
      this.props.classifyRight(
        this.props.preview.selected,
        moment().format(timestampFormat)
      );
      this.setState({ x: defaultX, y: defaultY });
    } else {
      this.setState({ x: e.screenX, y: e.screenY });
    }
  }

  // Photo animation: https://codesandbox.io/s/n033m6nw00
  render() {
    console.log(this.props);
    const filename = this.props.preview.selected + ".jpg";
    const { x, y } = this.state;

    return (
      <NodeGroup
        data={{
          x: this.state.x,
          y: this.state.y
        }}
        keyAccessor={d => d.key}
        start={data => {
          return { x: data.x, y: data.y };
        }}
        update={(data, index) => {
          return {
            x: [data.x],
            y: [data.y],
            timing: {
              delay: index * 120,
              duration: 1300
            }
          };
        }}
      >
        {data =>
          this.props.preview.isEmpty ? (
            <h2 style={{ paddingTop: "90px" }}>No photos left</h2>
          ) : (
            <div
              onMouseMove={this._onMouseMove.bind(this)}
              style={{
                WebkitTransform: `translate3d(${x - defaultX}px, ${y -
                  defaultY}px, 0)`,
                transform: `translate3d(${x - defaultX}px, ${y -
                  defaultY}px, 0)`
              }}
            >
              <img src={images[filename]} alt={filename} height="230" />
            </div>
          )
        }
      </NodeGroup>
    );
  }
}

export default Preview;
