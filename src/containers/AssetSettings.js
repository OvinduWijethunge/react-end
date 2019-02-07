import React from 'react';
import { MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from 'mdbreact';

class AssetSettings extends React.Component {
    all = (this.props.levelAuth === 0);
    admin = (this.props.levelAuth === 1);
    depth = (this.props.levelAuth === 2);
    finan = (this.props.levelAuth === 3);
    emplo = (this.props.levelAuth === 4);

    render() {
        return (
            <div className="AssetSettings">
                <MDBNavItem
                    className="px-md-1"
                    hidden={!(this.admin || this.depth || this.finan || this.emplo || this.all)}
                >
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <div className="d-none d-md-inline">
                                <MDBIcon icon="box-open" /> Assets
                            </div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default" right>
                            <MDBDropdownItem
                                href="/home/assetpool"
                                hidden={!(true)}
                            >
                                View Asset Pool
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                href="#!"
                                hidden={!(this.emplo || this.all)}
                            >
                                View Owned Assets
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                href="#!"
                                hidden={!(this.admin || this.depth || this.all)}
                            >
                                View Employee Assets
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                href="#!"
                                hidden={!(this.emplo || this.all)}
                            >
                                Request Asset
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                href="#!"
                                hidden={!(this.emplo || this.all)}
                            >
                                Report Breakdown
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                href="#!"
                                hidden={!(this.admin || this.depth || this.all)}
                            >
                                Asset Requests
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                href="#!"
                                hidden={!(this.admin || this.all)}
                            >
                                Transfer Asset
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                href="#!"
                                hidden={!(this.admin || this.finan || this.all)}
                            >
                                Manage Assets
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </div>
        )
    }
}

export default AssetSettings;
