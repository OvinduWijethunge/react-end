import React from 'react';
import { MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from 'mdbreact';

class EmployeeSettings extends React.Component {
    all = (this.props.levelAuth === 0);
    admin = (this.props.levelAuth === 1);
    depth = (this.props.levelAuth === 2);
    finan = (this.props.levelAuth === 3);
    emplo = (this.props.levelAuth === 4);

    render() {
        return (
            <div className="EmployeeSettings">
                <MDBNavItem
                    className="px-md-1"
                    hidden={!(this.admin || this.depth || this.all)}
                >
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <div className="d-none d-md-inline">
                                <MDBIcon icon="user-tie" /> Employees
                            </div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default" right>
                            <MDBDropdownItem
                                href="#!"
                                hidden={!(this.admin || this.depth || this.all)}
                            >
                                View Employees
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                href="#!"
                                hidden={!(this.admin || this.all)}
                            >
                                Manage Employees
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                href="#!"
                                hidden={!(this.all)}
                            >
                                Something else here
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                href="#!"
                                hidden={!(this.all)}
                            >
                                Something else here
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </div>
        )
    }
}

export default EmployeeSettings;
