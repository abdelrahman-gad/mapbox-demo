import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    
  }
 

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MAPBOX DEMO</NavbarBrand>
      </Navbar>
    );
  }
}

export default Header;
