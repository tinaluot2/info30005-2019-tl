<template>
<div class="background">
	<div class="container nav-spacing">
		<div id="login-container" @click.stop>
			<div class="form-header">
					Welcome back!
			</div>

			<form action="#" @submit.prevent="login()">

				<div class="form-input">
					<div class="form-label">Email Address</div>
					<input class="form" type="email" name="email" v-validate="'email'" v-model.lazy="userDetails.email"/>
					<p class="error-text" v-show="errors.has('email')">Ensure your email is valid.</p>
				</div>

				<div class="form-input">
					<div class="form-label">Password</div>
					<input class="form" type="password" name="password" v-model="userDetails.password"/>
				</div>

				<button class="button-dark user-submit" :disabled="errors.any() || userDetails.email == ''|| userDetails.password == ''">Log In</button>

				<p class="help-text">Don't have an account yet? <a @click="toggleSignUp()">Sign Up</a></p>
				<sign-up-form v-show="showSignUp" @close="toggleSignUp()"/>

			</form>
		</div>
	</div>
</div>
</template>

<script>
import SignUpForm from '@/components/SiteNavUser/SignUpForm'

export default {
	name: 'LoginForm',
	components: {
		'sign-up-form' : SignUpForm
	},
  data: function(){
		return {
			userDetails: {
				email: '',
				password: ''
			},
			authenticated: false,
			showSignUp: false,
			users: [
				{
					email: 'gleung@student.unimelb.edu.au',
					password: 'hello123'
				},
				{
					email: 'gigiscleung@gmail.com',
					password: 'hello789'
				}
			]
		}
  },
	methods: {
		close(event){
				this.$emit('close');
		},
		resetValues() {
			var self = this;
			Object.keys(this.userDetails).forEach(function(key) {
					self.userDetails[key] = '';
			})
		},
		toggleSignUp() {
			this.showSignUp = !this.showSignUp;
		}
	}
}
</script>

<style lang="scss">
@import "@/components/SiteNavUser/_userform.scss";
@import "@/components/ModalDialog/_modal.scss";
@import "@/scss/_forms.scss";
</style>

