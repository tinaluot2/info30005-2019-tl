<template>
<div class="background">
	<div class="container nav-spacing">
		<div class="login-container" @click.stop>
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
					<div class="error-text" v-show="error">Your email address and/or password is incorrect.</div>
				</div>

				<button class="button-dark user-submit" :disabled="errors.any() || userDetails.email == ''|| userDetails.password == ''" @click="login" >Log In</button>

				<p class="help-text">Don't have an account yet? <a @click="toggleSignUp()">Sign Up</a></p>
				<sign-up-form v-show="showSignUp" @close="toggleSignUp()"/>

			</form>
		</div>
	</div>
</div>
</template>

<script>
import SignUpForm from '@/components/SiteNav/SignUpForm'

export default {
	name: 'LoginForm',
	components: {
		'sign-up-form' : SignUpForm
	},
  data: function(){
		return {
			userDetails: {
				email: 'daniel-is-awesome@unimelb.edu.au',
				password: 'Daniel123'
			},
			error: false,
			showSignUp: false
		}
  },
	methods: {
		close(){
				this.$emit('close');
		},
		resetValues() {
			var self = this;
			Object.keys(this.userDetails).forEach(key => {
					self.userDetails[key] = '';
			})
		},
		toggleSignUp() {
			this.showSignUp = !this.showSignUp;
		},
		login() {
			const credentials = {
				email: this.userDetails.email,
				password: this.userDetails.password
			}
			this.$store.dispatch('retrieveToken', credentials)
				.then(()=>{
					this.$router.push(this.$route.query.redirect || '/user/' + this.currentUser.username);
				})
				.catch((error)=>{
					this.error = true;
				})
		},
		quickLogin(){
			const credentials = {
				email: 'gleung@student.unimelb.edu.au',
				password: 'Hello123'
			}
			this.$store.dispatch('retrieveToken', credentials)
				.then(()=>{
					this.$router.push(this.$route.query.redirect || '/user/' + 'gigi');
				})
				.catch((error)=>{
					this.error = true;
				})
		}
	},
	computed: {
		currentUser() {
      return this.$store.state.currentUser
    }
	}
}
</script>

<style lang="scss">
@import "@/components/SiteNav/_userform.scss";
@import "@/components/ModalDialog/_modal.scss";
@import "@/scss/_forms.scss";
</style>