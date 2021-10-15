import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <Navbar dark className="bg-dark dark" sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        <img src='img/dc-wht-logo.png' alt='diversified creative logo'></img>
                    </NavbarBrand>

                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/web">Web</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/words">Words</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/sounds">Sounds</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        )
    }
}

export default Header;