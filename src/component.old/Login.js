import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("done loging");
    this.apicall();
  };

apicall() {

    var url = "http://104.248.24.192/api/auth/login";
    var postData = {
        email: this.state.email,
        password: this.state.password
    };

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "X-Requested-With": "XMLHttpRequest",
        }
    };

    axios.post(url, postData, axiosConfig)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
}

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  autoFocus
                  error="wrong"
                  success="right"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
              </div>
              <div className="text-center">
                <MDBBtn disabled={!this.validateForm()} type="submit">
                  Login
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Login;