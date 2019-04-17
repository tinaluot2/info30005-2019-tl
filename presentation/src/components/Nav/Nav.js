import React from "react";
import ReactDom from "react-dom";
import "./Nav.scss";

const Nav = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="logotype">Reform.</div>
					<navlinks>
						<a href="#register"><button class="button-light">Register</button></a>
						<a href="#login"><button class="button-dark">Sign In</button></a>
					</navlinks>
			</div>
		</div>
	);
};

export default Nav;