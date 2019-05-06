<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="container">
			<div class="navbar-brand">
				<router-link to="/" class="logotype">Reform.</router-link>
				<div class="navbar-burger" @click="toggleNav" :class="{'is-active': showNav }">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div class="navbar-menu" :class="{ 'is-active': showNav }">
				<div class="navbar-end">
					<router-link to="/discover" class="navbar-item">Discover</router-link>
					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link">You</a>
						<div class="navbar-dropdown">
							<div @click="toggleNav">
								<router-link to="/user/mariniida" class="navbar-item">My Profile</router-link>
							</div>
							<div @click="toggleNav">
								<router-link to="/settings" class="navbar-item" >Account Settings</router-link>
							</div>
							<div @click="toggleNav">
								<router-link to="/lists" class="navbar-item">Saved Lists</router-link>
							</div>
							<hr class="navbar-divider">
							<a class="navbar-item" href="#logout">Sign Out</a>
						</div>
					</div>
					<router-link to="/create" class="navbar-item button-no-background"><button class="button-dark">New Project</button></router-link>
					<a class="navbar-item button-no-background"><button class="button-light" @click="toggleLogin()">Login</button></a>
					<a class="navbar-item button-no-background"><button class="button-dark" @click="toggleSignUp()">Sign Up</button></a>
				</div>
			</div>
			<sign-up-form v-show="showSignUp" @close="toggleSignUp"/>
			<login-form v-show="showLogin" @close="toggleLogin"/>
		</div>
	</nav>
</template>

<script>
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'

export default {
	name: 'SiteNavUser',
	components: {
		'sign-up-form' : SignUpForm,
		'login-form' : LoginForm
	},
	data: function() {
		return {
			showNav: false,
			currentUser: 1003,
			showSignUp: false,
			showLogin: false
		}
	},
	methods: {
		toggleSignUp() {
			this.showSignUp = !this.showSignUp;
		},
		toggleLogin() {
			this.showLogin = !this.showLogin;
		},
		toggleNav() {
			this.showNav = !this.showNav;
		}
	}
}
</script>

<style scoped lang="scss">
@import "../../scss/_navbar.scss";
</style>

