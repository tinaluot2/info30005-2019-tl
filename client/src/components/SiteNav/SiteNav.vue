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

					<router-link to="/leaderboard" class="navbar-item">Leaderboard</router-link>

					<router-link v-if="isLoggedIn" to="/mission" class="navbar-item">Mission</router-link>

					<router-link to="/login" v-if="!isLoggedIn" class="navbar-item button-no-background"><button class="button-light" @click="toggleNav">Login</button></router-link>

					<a class="navbar-item button-no-background" v-if="!isLoggedIn" ><button class="button-dark" @click="toggleSignUp() + toggleNav()">Sign Up</button></a>

					<div v-if="isLoggedIn" class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link">{{currentUser.username}}</a>

						<div class="navbar-dropdown">
							<span @click="toggleNav">
								<router-link :to="'/user/' + currentUser.username" class="navbar-item">My Profile</router-link>
							</span>
							<span @click="toggleNav">
								<router-link to="/bookmarks" class="navbar-item">Bookmarks</router-link>
							</span>
							<span @click="toggleNav">
								<router-link to="/settings" class="navbar-item" >Settings</router-link>
							</span>
							<hr class="navbar-divider">
							<span @click="toggleNav">
								<a class="navbar-item" @click="logout">Sign Out</a>
							</span>
						</div>
					</div>

					<div @click="toggleNav" v-if="isLoggedIn">
						<router-link to="/create" class="navbar-item button-no-background"><button class="button-dark">New Project</button></router-link>
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
import { mapState } from 'vuex'

export default {
	components: {
		'sign-up-form' : SignUpForm
	},
	data: function() {
		return {
			showNav: false,
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
			bus.$emit('loggingOut')
			this.$store.dispatch('logoutUser')
				.then(() => {
					bus.$emit('loggedOut')
					this.$router.push(this.$route.query.redirect || '/discover')
				})
		}
	},
	computed: {
		isLoggedIn(){
			return this.$store.getters.isLoggedIn
		},
		currentUser() {
      return this.$store.state.currentUser
    }
	}
}
</script>

<style scoped lang="scss">
@import "../../scss/_navbar.scss";
</style>