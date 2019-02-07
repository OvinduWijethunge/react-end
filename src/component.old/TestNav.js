import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router , Route, Link, Redirect, withRouter } from 'react-router-dom';
import Button from "./Button";
import Button2 from "./ButtonPage";

class logouting extends React.Component{
  render() {
    this.props.history.push("/login");
    window.location.reload();
    // this.forceUpdate();
    return{};
  }

  logout = () => {
    this.props.history.push("/login");
  }
}

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

//     reloadRoute = () => {
//     Router.push({ pathname: '/empty' });
//     Router.replace({ pathname: '/route-to-refresh' });
//    }

    logOut() {
      this.props.history.push("/logout");
      console.log("sucssessfully logged out");
    }; 

    render() {   
        return <div>
            <header>
              <Router>
                  <div>
                <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
                  <MDBNavbarBrand href="/">
                    <strong>Navbar</strong>
                  </MDBNavbarBrand>
                  {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                  <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav left>
                      <MDBNavItem active>
                        <MDBNavLink to="#">Home</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/buu">Link</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/button">Profile</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/lout">Logout</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBNavbar>

                
              

              <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
              {/* <MDBView> */}
                <MDBMask overlay="purple-light" className="flex-center flex-column text-black text-center">
                  <h2>This Navbar is fixed {this.props.token}</h2>
                  <h5>
                    It will always stay visible on the top, even when
                    you scroll down
                  </h5>
                  <p>
                    Navbar's background will switch from transparent to
                    solid color while scrolling down
                  </p>
                  <br />
                  <p>
                    Full page intro with background image will be always
                    displayed in full screen mode, regardless of device{" "}
                  </p>
                    <Route path="/button" component={Button} />
                    <Route path="/buu" component={Button2} />
                    <Route path="/lout" component={logouting} />
                </MDBMask>
              </MDBView>
                </div>
             </Router>
            </header>

            <main>
              <MDBContainer className="text-center my-5">
                <p align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum.
                </p>
              </MDBContainer>
            </main>
          </div>;
    }
}

export default withRouter(FullPageIntroWithFixedTransparentNavbar);
