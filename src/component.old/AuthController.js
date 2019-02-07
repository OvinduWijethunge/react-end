
import React, { Component } from 'react';

import '../App.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from "axios";

import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';

const fakeAuthCentralState = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 300);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 300);
  }
};

const Public = () => <h3>Public Content</h3>;
const Protected = () => <h3>Protected Content</h3>;

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
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
        this.login();
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
  }

  login = () => {
    fakeAuthCentralState.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      this.props.history.push(from.pathname);
    }

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
    )
  }
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuthCentralState.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
);

const AuthButton = withRouter(({ history }) => (
  fakeAuthCentralState.isAuthenticated ? (
    <p>
      Welcome to this amazing content! <button onClick={() => {
        fakeAuthCentralState.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
      <p>You are not logged in.</p>
    )
));




class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <AuthButton />
            <ul>
              <li><Link to="/public">Public Content</Link></li>
              <li><Link to="/protected">Protected Content</Link></li>
            </ul>
            <Route path="/public" component={Public} />
            <Route path="/login" component={withRouter(Login)} />
            <ProtectedRoute path='/protected' component={Protected} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
