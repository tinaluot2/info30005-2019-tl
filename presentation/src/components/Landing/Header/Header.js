import React from "react";
import ReactDom from "react-dom";
import "./Header.scss";
import "../../styles/_layout.scss";


const Header = () => {
	return (
		<header>
			<div className="overlay"></div>
				<div className="content-wrapper">
					<div className="intro-heading">
						Reduce, Reuse, Reform.
					</div>
				</div>
		</header>
	);
};

export default Header;
