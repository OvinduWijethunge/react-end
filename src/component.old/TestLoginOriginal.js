
import React, { Component } from 'react';
import '../App.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,  } from "mdbreact";
import axios from "axios";
import Nav from "./TestNav";
import '../index.css';

import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';

const fakeAuthCentralState = {
    isAuthenticated: false,
    access_token : "aaaaaaa",
    authenticate(callback) {
        this.isAuthenticated = true;
    },
    signout(callback) {
        this.isAuthenticated = false;
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
            password: "",
            access_token : "aaaaaaa"
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
                this.setState({
                    access_token: res.data.access_token
                });
                this.login();
                fakeAuthCentralState.access_token=this.state.access_token;
                this.props.history.push("/protected/dashboard");
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
                fakeAuthCentralState.signout(() => history.push('/login'))
            }}>Sign out</button>
        </p>
    ) : (
            <p>You are not logged in.</p>
        )
));




class App extends Component {
    

    render() {
        
        return <div className="App">
            <BrowserRouter>
              <div>
                   { 
                        fakeAuthCentralState.isAuthenticated === false ?
                            <Redirect to="/login" />
                            : <div></div>
                        
                    }
                {/* <AuthButton /> */}

                {/* <Link to="/protected/go">Protected Content go</Link> */}
                {/* <Link to="/public">Public Content</Link>
                <Link to="/protected">Protected Content</Link>
                    <Link to="/protected/dashboard">Protected Content go</Link> */}

                <Route path="/protected/dashboard" render={props => <Nav {...props} isAuthed="fgd" token={fakeAuthCentralState.access_token} />} />
                {/* <Route path="/public" component={Public} /> */}
                {/* <Route path="/protected/go" component={Nav} /> */}

                <MDBContainer fluid>
                  <MDBRow>
                    <MDBCol size="1"></MDBCol>
                    <MDBCol size="11">
                      <Route path="/login" component={withRouter(Login)} />
                    </MDBCol>
                    {/* <MDBCol size="2">.col-4</MDBCol> */}
                  </MDBRow>
                </MDBContainer>

                <ProtectedRoute path="/protected" component={Protected} />
              </div>
            </BrowserRouter>
          </div>;
    }
}

export default App;
