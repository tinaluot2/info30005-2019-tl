import React from "react";
import ReactDom from "react-dom";
import Header from "./Header/Header";
import RegisterModal from "./RegisterModal/RegisterModal";

const Landing = () => {
	return (
		<>
			<Header />
			<RegisterModal />
		</>
	);
};

export default Landing;