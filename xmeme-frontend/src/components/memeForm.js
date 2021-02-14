import React, { Component, setState } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import '../App.css'

class MemeForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      caption: '',
      url: ''
    }
    this.submitMemeDetails = this.submitMemeDetails.bind(this);
    this.handleCaptionChange = this.handleCaptionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
  }

  handleNameChange(e){
    this.setState({name: e.target.value});
  }

  handleCaptionChange(e){
    this.setState({caption: e.target.value});
  }

  handleUrlChange(e){
    this.setState({url: e.target.value});
  }

  async postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  submitMemeDetails(){
    let name =this.state.name;
    let caption = this.state.caption;
    let url = this.state.url;
    this.postData('http://ec2-13-126-202-52.ap-south-1.compute.amazonaws.com:8081/memes', { name: name,  caption: caption, url: url})
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
    this.setState({name: "", caption: "", url: ""})
  }



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
                value= {this.state.name}
                onChange= {this.handleNameChange}
                placeholder="Enter your full name"
                required
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
                value= {this.state.caption}
                onChange= {this.handleCaptionChange}
                placeholder="Be creative with the caption"
                required
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
                value= {this.state.url}
                onChange= {this.handleUrlChange}
                placeholder="Enter URL of your meme here"
                required
              />
            </FormGroup>
          </Col>
          <Button onClick={this.submitMemeDetails}>Submit Meme</Button>
        </Form>
        <div>
          {this.state.items}
        </div>
      </Container>
    );
  }
}

export default MemeForm;