import React from "react";
import { Col } from "reactstrap";
import importAll from "../utils/photoImport";
import FolderNamer from "./FolderNamer";

// Dynamic image import: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
const images = importAll(require.context("../images/dataset", false, /\.jpg/));

// Modal: https://reactstrap.github.io/components/modals/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    console.log("app", this.props);
    const filename = this.props.app.selected + ".jpg";
    return (
      <div>
        {this.props.app.classificationMode ? (
          <div href="#" onClick={this.toggle}>
            {this.props.children}
            {this.state.modal && !this.props.app.isEmpty ? (
              <div
                className={this.props.className}
                style={{
                  position: "absolute",
                  marginTop: "13px",
                  marginLeft: "50px"
                }}
              >
                <Col sm="12" md={{ size: 10, offset: 2 }}>
                  <img
                    src={images[filename]}
                    alt={filename}
                    style={{ height: "675px", width: "860px" }}
                  />
                </Col>
              </div>
            ) : null}
          </div>
        ) : (
          <FolderNamer props={this.props} />
        )}
      </div>
    );
  }
}

export default App;
