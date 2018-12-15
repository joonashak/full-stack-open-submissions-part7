import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavLink from './NavLink';
import Logout from './Logout';


export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
    };
  }

  toggle = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

  close = () => this.setState({ expanded: false });

  render() {
    const { expanded } = this.state;

    return (
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        expanded={expanded}
        onToggle={this.toggle}
        className="shadow-sm mb-5"
      >
        <NavLink to="/" onClick={this.close} brand>
          Blog App
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/users" onClick={this.toggle}>
              Users
            </NavLink>
          </Nav>
          <Nav className="ml-auto">
            <Logout onClick={this.toggle} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
