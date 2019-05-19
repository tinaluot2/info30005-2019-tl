<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="container">
			<div class="navbar-brand">
				<router-link v-if="!isLoggedIn" to="/" class="logotype">Reform.</router-link>
				<router-link v-if="isLoggedIn" to="/discover" class="logotype">Reform.</router-link>
				<div class="navbar-burger" @click="toggleNav" :class="{'is-active': showNav }">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div class="navbar-menu" :class="{ 'is-active': showNav }">
				<div class="navbar-end">

					<router-link to="/discover" class="navbar-item">Discover</router-link>

					<router-link to="/login" v-if="!isLoggedIn" class="navbar-item button-no-background"><button class="button-light" @click="toggleNav">Login</button></router-link>

					<a class="navbar-item button-no-background" v-if="!isLoggedIn" ><button class="button-dark" @click="toggleSignUp() + toggleNav()">Sign Up</button></a>

					<div v-if="isLoggedIn" class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link">You</a>

						<div class="navbar-dropdown">
							<span @click="toggleNav">
								<router-link to="/user/mariniida" class="navbar-item">My Profile</router-link>
							</span>
							<span @click="toggleNav">
								<router-link to="/settings" class="navbar-item" >Account Settings</router-link>
							</span>
							<span @click="toggleNav">
								<router-link to="/lists" class="navbar-item">Saved Lists</router-link>
							</span>
							<hr class="navbar-divider">
							<span @click="toggleNav">
								<a class="navbar-item" @click="logout">Sign Out</a>
							</span>
						</div>

						<div @click="toggleNav">
							<router-link to="/create" class="navbar-item button-no-background"><button class="button-dark">New Project</button></router-link>
						</div>
					</div>

				</div>
			</div>
			<sign-up-form v-show="showSignUp" @close="toggleSignUp"/>
		</div>
	</nav>
</template>

<script>
import SignUpForm from './SignUpForm'
import {bus} from '@/main'
export default {
	name: 'SiteNavUser',
	components: {
		'sign-up-form' : SignUpForm
	},
	data: function() {
		return {
			showNav: false,
			currentUser: 1003,
			showSignUp: false,
			showLogIn: false,
		}
	},
	methods: {
		toggleSignUp() {
			this.showSignUp = !this.showSignUp;
		},
		toggleLogIn() {
			this.showLogIn = !this.showLogIn;
		},
		toggleNav() {
			this.showNav = !this.showNav;
		},
		logout() {
			this.$router.push(this.$route.query.redirect || '/discover');
			this.$store.dispatch('logoutUser')
				.then(response => {
					this.$router.push(this.$route.query.redirect || '/discover')
				})
		}
	},
	computed: {
		isLoggedIn(){
			return this.$store.getters.isLoggedIn
		}
	}
}
</script>

<style scoped lang="scss">
@import "../../scss/_navbar.scss";
</style>