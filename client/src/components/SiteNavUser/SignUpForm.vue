<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="container nav-spacing">
						<div id="login-container" @click.stop>
							<div class="close-dialog" @click="$emit('close') + resetValues()">X</div>
							<div class="form-header">
									Join us today!
							</div>
							<form action="#" @submit.prevent="validateBeforeSubmit()">

								<div class="form-input">
									<div class="form-label">Email Address <span class="req">*</span></div>
									<input class="form" type="email" name="email" v-validate="'email'" v-model.lazy="userDetails.email"/>
									<p class="error-text" v-show="errors.has('email')">Please enter a valid email.</p>
								</div>

								<div class="form-input">
									<div class="form-label">Password <span class="req">*</span></div>
									<input class="form" type="password" name="password" v-model="userDetails.password" ref="password" @focus="showPasswordHints"/>

									<div class="password-hints" v-show='userDetails.password !== "" && passwordValidate.errors.length > 0 && isPasswordHintsVisible'>
										<p class="help-text" v-for='error in passwordValidate.errors' v-bind:key="error">{{error}}</p>
									</div>
								</div>

								<div class="form-input">
									<div class="form-label">Confirm Password <span class="req">*</span></div>
									<input class="form" type="password"
									v-model="userDetails.confirmPassword" name="password-confirm" data-vv-as="password"/>
									<p class="error-text" v-show="differentPasswords">
										Passwords do not match yet.
									</p>
								</div>

								<div class="form-input">
									<div class="form-label">Username <span class="req">*</span></div>
									<input class="form" type="text" name="username" v-model="userDetails.username" autocomplete="off"/>
									<p class="help-text">You will be able to change this later.</p>
									<div class="password-hints" v-show='userDetails.username !== "" && usernameValidate.errors.length > 0'>
										<p class="help-text" v-for='error in usernameValidate.errors' v-bind:key="error">{{error}}</p>
									</div>
								</div>

								<button type="submit" class="button-dark user-submit" :disabled="errors.any() ||!passwordsFilled || differentPasswords || !passwordValidate.valid || !usernameValidate.valid || userDetails.name == '' || userDetails.email == ''" @click="submit">Sign Up</button>

								<p class="help-text">Already have an account? <router-link to="/login"><span @click="$emit('close')">Log In</span></router-link></p>

							</form>
						</div>
			</div>
		</div>
	</transition>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUpForm',
  data: function(){
		return {
			isPasswordHintsVisible: false,
			userDetails: {
				username: '',
				email: '',
				password: '',
				confirmPassword: ''
			},
			passwordRules: [
				{ msg:'At least one lowercase letter required.', regex: /[a-z]+/ },
				{ msg:'At least one uppercase letter required.',  regex: /[A-Z]+/ },
				{ msg:'At least one number required.', regex: /[0-9]+/ },
				{ msg:'8 characters minimum.', regex: /.{8,}/ },
			],
			usernameRules: [
				{ msg:'Username must contain at least 3 characters.', regex: /^.{3,}$/ },
				{ msg:'Username cannot exceed 25 characters.', regex: /^.{0,25}$/ },
				{ msg:'Only alphanumerical characters are allowed.', regex: /^[a-zA-Z0-9]*$/ }
			]
		}
  },
	methods: {
		close(event){
				this.$emit('close');
		},
		validateBeforeSubmit(){
			this.$validator
				.validateAll()
				.then(function(response) {
				})
				.catch(function(e) {
				})
		},
		showPasswordHints(){
			this.isPasswordHintsVisible = true;
		},
		hidePasswordHints(){
			this.isPasswordHintsVisible = false;
		},
		resetValues() {
			var self = this;
			Object.keys(this.userDetails).forEach(function(key) {
					self.userDetails[key] = '';
			})
		},
		submit() {
			const newUser = {
				username: this.userDetails.username,
				email: this.userDetails.email,
				password: this.userDetails.password,
				passwordConfirm: this.userDetails.passwordConfirm
			}
			console.log(this.userDetails)
			axios.post('http://localhost:3000/userSignup/signup', newUser)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	},
	computed: {
		passwordsFilled(){
			return (this.userDetails.password !== '' && this.userDetails.confirmPassword !== '')
		},
		differentPasswords(){
			if (this.passwordsFilled) {
				return (this.userDetails.password !== this.userDetails.confirmPassword)
			} else {
				return false
			}
		},
		passwordValidate(){
			let errors = []
			for (let condition of this.passwordRules) {
				if (!condition.regex.test(this.userDetails.password)) {
					errors.push(condition.msg)
				}
			}
			if (errors.length === 0) {
				return { valid:true, errors }
			} else {
				return { valid:false, errors }
			}
		},
		usernameValidate(){
			let errors = []
			for (let condition of this.usernameRules) {
				if (!condition.regex.test(this.userDetails.name)) {
					errors.push(condition.msg)
				}
			}
			if (errors.length === 0) {
				return { valid:true, errors }
			} else {
				return { valid:false, errors }
			}
		}
	}
}
</script>

<style lang="scss">
@import "./_userform.scss";
@import "@/components/ModalDialog/_modal.scss";
@import "@/scss/_forms.scss";
</style>
