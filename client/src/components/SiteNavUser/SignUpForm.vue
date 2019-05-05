<template>
	<transition name="modal-fade">
		<div class="modal-backdrop" @click="$emit('close')">
			<div class="container nav-spacing">
						<div id="login-container" @click.stop>
							<div class="close-dialog" @click="$emit('close')">X</div>
							<div class="form-header">
									Join us today!
							</div>
							<form action="#" @submit.prevent="validateBeforeSubmit()">

								<div class="form-input">
									<div class="form-label">First Name <span class="req">*</span></div>
									<input class="form" type="form" name="name" v-model="userDetails.name.firstName"/>
								</div>

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

								<button class="button-dark user-submit" v-if="passwordsFilled && !differentPasswords && passwordValidate.valid">Sign Up</button>
								<p class="help-text">Already have an account? Login here.</p>

							</form>
						</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
  name: 'SignUpForm',
  data: function(){
		return {
			isPasswordHintsVisible: false,
			userDetails: {
				name: {
					firstName: '',
					lastName: ''
				},
				email: '',
				password: '',
				confirmPassword: ''
			},
			passwordRules: [
				{ msg:'At least one lowercase letter required.', regex:/[a-z]+/ },
				{ msg:"At least one uppercase letter required.",  regex:/[A-Z]+/ },
				{ msg:"At least one number required.", regex:/[0-9]+/ },
				{ msg:"8 characters minimum.", regex:/.{8,}/ },
			],
		}
  },
	methods: {
		close(event){
				this.$emit('close');
		},
		signup(){

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
		}
	}
}
</script>

<style lang="scss">
@import "./_userform.scss";
@import "@/components/ModalDialog/_modal.scss";
@import "@/scss/_forms.scss";
</style>

