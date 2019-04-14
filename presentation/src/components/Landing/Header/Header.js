import React from "react";
import ReactDom from "react-dom";
import "./Header.scss";
import "../../styles/_layout.scss";


const Header = () => {
	return (
		<header>
			<div className="overlay"></div>
				<div className="wrapper">
					<div className="intro-heading">
						Yo what's up. This is an inspirational quote.
					</div>
				</div>
		</header>
	);
};

export default Header;
