import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBContainer,
    MDBCollapse,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink,
    MDBMask,
    MDBView,
    MDBIcon
} from 'mdbreact';
import HomeRooutes from '../HomeRoutes';
import AssetSettings from './AssetSettings';
import EmployeeSettings from './EmployeeSettings';
import DepartmentSettings from './DepartmentSettings';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false,
            isWideEnough: false,
            isOpen: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleLogout = () => {
        this.props.setAuth(false);
        // ==== ==== ==== ====
        this.props.setToken("");
        // ==== ==== ==== ====
        this.props.history.push("/login");
    }

    render() {
        const childProps = {
            isAuth: this.props.isAuth,
            levelAuth: this.props.levelAuth,
            accessToken: this.props.accessToken
        };

        return (
            <div className="Home">
                <header>
                    <MDBNavbar className="aqua-gradient z-depth-1-half" light expand="md" fixed="top">
                        <MDBNavbarBrand href="/">
                            <strong>SimCentric</strong>
                        </MDBNavbarBrand>
                        {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav left>
                                <AssetSettings levelAuth={this.props.levelAuth}/>
                                <EmployeeSettings levelAuth={this.props.levelAuth} />
                                <DepartmentSettings levelAuth={this.props.levelAuth} />
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem className="px-md-3">
                                    <MDBNavLink to="#">
                                        <MDBIcon icon="bell" />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem onClick={this.handleLogout}>
                                    <MDBNavLink to="#">
                                        <MDBIcon icon="sign-out-alt" />
                                        <strong> Logout</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>

                    <MDBView src="http://www.geodomo.cl/img/Achs/4.JPG">
                        {/* https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg */}
                        <MDBMask overlay="light-blue-light" className="flex-center flex-column text-center">
                            <HomeRooutes  />
                            <p>{this.props.levelAuth.toString()} {childProps.levelAuth.toString()}</p>
                        </MDBMask>
                    </MDBView>
                </header>

                <main>
                    <MDBContainer className="text-center my-5">
                        <p align="justify">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </MDBContainer>
                </main>
            </div>
        )
    }
}

export default Home;
