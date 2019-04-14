import React from "react";
import ReactDom from "react-dom";
import "./Nav.scss";

const Nav = () => {
	return (
		<div className="navbar">
			<div className="nav-wrapper">
				<div className="logotype">Reform.</div>
					<navlinks>
						<a href="#register">Register</a>
						<a href="#login">Log In</a>
					</navlinks>
			</div>
		</div>
	);
};

export default Nav;