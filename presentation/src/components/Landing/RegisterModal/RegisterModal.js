import React from "react";
import ReactDom from "react-dom";
import "./RegisterModal.scss";
import "../../styles/_layout.scss";


const Register = () => {
	return (
		<div class="login-container">
		    <div class="form">
		        <form class="registration-form">
		        <div class="form-header">Join the Community</div>
		            <label>First Name</label>
		            <input type="text" name="name" required/>
		            <label>Email</label>
		            <input type="text" name="email" required/>
		            <label>Password</label>
		            <input type="password" name="password" required/>
		            <label>Confirm Password</label>
		            <input type="password" name="password-confirm" required/>
		            <button class ="button-dark">Register</button>
		            <p class="message">Already registered? <a href="#">Sign In</a></p>
		        </form>
		        <form class="login-form">
		                <label>Email</label>
		                <input type="text" name="email" required/>
		                <label>Password</label>
		                <input type="password" name="password" required/>
		                <button>Create Account</button>
		                <p class="message">Not Registered? <a href="#">Sign up today!</a></p>
		            </form>
		    </div>
		</div>
	);
};

export default Register;
