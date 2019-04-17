import React from "react";
import ReactDom from "react-dom";
import "./Footer.scss";

const Footer = () => {
	return (
		<div className="footer">
		    <div className="wrapper">
				<p className="footer-text">Reform Lab © 2019</p>
		        <footer-links>
					<a href="#mission">About Reform</a>
					<a href="#faq">FAQ</a>
		        </footer-links>
		    </div>
		</div>
	);
};

export default Footer;