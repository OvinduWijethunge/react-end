import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
from 'mdbreact';

class hamburgerMenuPage extends Component {
state = {
  collapseID: '',
  hit:""
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

render() {
  return (
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
                <MDBNavLink to="/EmployeeSetting/Add">Add Employees</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/EmployeeSetting/Update">Update Employees</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/EmployeeSetting/Delete">Delete Employees</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/EmployeeSetting/Custom">customize Passward And Level</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/EmployeeSetting/Change">Change Employee Department</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/EmployeeSetting/All">view All Employee Records</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/EmployeeSetting/Req">Asset Request</MDBNavLink>
              </MDBNavItem>
            </NavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>
    );
  }
}

export default hamburgerMenuPage;