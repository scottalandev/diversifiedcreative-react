import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './headFoot.css';

export function Header() {
	const [isNavOpen, toggleNav] = useState(false);

	return (
		<Navbar dark className="bg-dark dark" expand="md">
			<NavbarBrand className="mr-auto col-sm-3" href="/">
				<img src="img/dc-wht-logo.png" alt="diversified creative logo" />
			</NavbarBrand>
			<NavbarToggler onClick={() => toggleNav(!isNavOpen)} />
			<Collapse isOpen={isNavOpen} navbar>
				<Nav navbar navbar-dark className="offset-sm-3">
					<NavItem>
						<NavLink className="nav-link" to="/web" onClick={() => toggleNav(false)}>
							Web
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/words" onClick={() => toggleNav(false)}>
							Words
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/sounds" onClick={() => toggleNav(false)}>
							Sounds
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/about" onClick={() => toggleNav(false)}>
							About
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="nav-link" to="/contact" onClick={() => toggleNav(false)}>
							Contact
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
}

export function Footer(props) {
	let year = new Date().getFullYear();
	return (
		<div className="container-fluid bg-dark text-light footer-content">
			<div className="row">
				<div className="d-none d-sm-inline col-sm-3">
					<img src="img/dcr-wht-logo.png" alt="logo" />
				</div>
				<div className="col-sm-9">
					<Nav className="d-flex flex-row justify-content-evenly">
						<NavItem>
							<NavLink className="foot-link" to="/web">
								Web
							</NavLink>
						</NavItem>
						<span className="d-none d-sm-inline grey-text">|</span>
						<NavItem>
							<NavLink className="foot-link" to="/words">
								Words
							</NavLink>
						</NavItem>
						<span className="d-none d-sm-inline grey-text">|</span>
						<NavItem>
							<NavLink className="foot-link" to="/sounds">
								Sounds
							</NavLink>
						</NavItem>
						<span className="d-none d-sm-inline grey-text">|</span>
						<NavItem>
							<NavLink className="foot-link" to="/about">
								About
							</NavLink>
						</NavItem>
						<span className="d-none d-sm-inline grey-text">|</span>
						<NavItem>
							<NavLink className="foot-link" to="/contact">
								Contact
							</NavLink>
						</NavItem>
					</Nav>
					<hr />
					<p className="cr-text"> &copy; {year} Diversified Creative</p>
				</div>
			</div>
		</div>
	);
}
