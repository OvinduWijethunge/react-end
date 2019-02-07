import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
from 'mdbreact';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';


class hamburgerMenuPage extends Component {
state = {
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

render() {
  return (
    //  <Router>
    <MDBContainer fluid>
      <MDBNavbar color="light-blue lighten-4" style={{ marginTop: '20px' }} light>
        <MDBContainer>
          <MDBNavbarBrand>
            Navbar
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
          <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
            <NavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/AssetSetting/ViewOwn">View Own Assets</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/AssetSetting/Break">View Breakdown And Restore Assets</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/AssetSetting/Restore">View Restore Records</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/AssetSetting/Gate">Gatepass And View Details</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/AssetSetting/Add">Add Assets</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/AssetSetting/Update">Update Assets</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/AssetSetting/Delete">Delete Assets</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/AssetSetting/Findby">Find User Assets</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/AssetSetting/All">View All Codes And History</MDBNavLink>
              </MDBNavItem>
            </NavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>

    //     {/* <Route path="/AssetSetting/ViewOwn"   component={Own}/>  */}
    //     {/*<Route path="/AssetSetting/Break"   component={Brek}/>
    //     <Route path="/AssetSetting/Restore"   component={Re}/>
    //     <Route path="/AssetSetting/Gate"   component={Gate}/>
    //     <Route path="/AssetSetting/Add"   component={Add}/>
    //     <Route path="/AssetSetting/Update"   component={Update}/>
    //     <Route path="/AssetSetting/Delete"   component={Delete}/>
    //     <Route path="/AssetSetting/Findby"   component={Findby}/>
    //     <Route path="/AssetSetting/All"   component={All}/> */}
    //  {/* </Router> */}
    );
  }
}

export default hamburgerMenuPage;