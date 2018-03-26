import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class FolderNamer extends Component {
  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <Container>
          <Card>
            <CardBody>
              <CardTitle>
                Input the name of each folder. Folders higher in this list will
                have priority over all folders below it.
              </CardTitle>
              <br />
              <CardText>
                <Form onSubmit={e => this.props.props.classificationMode()}>
                  <FormGroup>
                    <Label for="folderOne">Folder 1</Label>
                    <Input
                      id="folderOne"
                      onChange={e =>
                        this.props.props.updateFolderLeftName(e.target.value)
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="folderTwo">Folder 2</Label>
                    <Input
                      id="folderTwo"
                      onChange={e =>
                        this.props.props.updateFolderUpName(e.target.value)
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="folderThree">Folder 3</Label>
                    <Input
                      id="folderThree"
                      onChange={e =>
                        this.props.props.updateFolderRightName(e.target.value)
                      }
                    />
                  </FormGroup>
                  <br />
                  <FormGroup tag="fieldset">
                    <legend>Phase:</legend>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="phase"
                          onChange={e => this.props.props.trainingPhase()}
                        />
                        Training
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="phase"
                          onChange={e => this.props.props.testPhase()}
                        />
                        Test
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <br />
                  <Button type="submit">Submit</Button>
                </Form>
              </CardText>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default FolderNamer;
