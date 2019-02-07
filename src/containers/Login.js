import React from 'react';
import Axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            status: 0
        };
    }

    apicall() {

        let url = "http://104.248.24.192:8080/api/auth/login";
        let postData = {
            email: this.state.email,
            password: this.state.password
        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "X-Requested-With": "XMLHttpRequest",
            }
        };

        Axios.post(url, postData, axiosConfig)
            .then((res) => {
                this.props.setToken(res.data.access_token);
                // console.log(this.props.accessToken);
                this.props.setAuth(true);
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }

    // Validate whether the form is filled with required data
    // before allowing submission.
    validateInput() {
        return (this.state.email.length > 0 && this.state.password.length > 0);
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.apicall();
    }

    render() {
        return (
            <div className="Login">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={this.handleSubmit}>
                                <p className="h4 text-center mb-4">Sign in</p>
                                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                                <br />
                                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <div className="text-center mt-4">
                                    <MDBBtn 
                                        color="indigo"
                                        type="submit"
                                        disabled={!(this.validateInput())}
                                        >
                                            Login
                                        </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Login;
