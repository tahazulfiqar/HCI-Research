import React, { Component } from "react";
import { NodeGroup } from "react-move";
import importAll from "../utils/photoImport";

const images = importAll(require.context("../images/dataset", false, /\.jpg/));

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 650, y: 450 };
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

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
                WebkitTransform: `translate3d(${x - 650}px, ${y - 450}px, 0)`,
                transform: `translate3d(${x - 650}px, ${y - 450}px, 0)`
              }}
            >
              <h1>
                {x} {y}
              </h1>
              <img src={images[filename]} alt={filename} height="230" />
            </div>
          )
        }
      </NodeGroup>
    );
  }
}

export default Preview;
