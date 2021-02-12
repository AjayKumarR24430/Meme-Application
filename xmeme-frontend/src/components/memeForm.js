import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import '../App.css'

class MemeForm extends Component {
  render() {
    return (
      <Container className="App">
        <h2>Meme Stream</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Meme Owner</Label>
              <Input
                type="string"
                name="Name"
                id="ownerName"
                placeholder="Enter your full name"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Caption</Label>
              <Input
                type="string"
                name="caption"
                id="memeCaption"
                placeholder="Be creative with the caption"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Meme URL</Label>
              <Input
                type="string"
                name="url"
                id="memeURL"
                placeholder="Enter URL of your meme here"
              />
            </FormGroup>
          </Col>
          <Button>Submit Meme</Button>
        </Form>
      </Container>
    );
  }
}

export default MemeForm;