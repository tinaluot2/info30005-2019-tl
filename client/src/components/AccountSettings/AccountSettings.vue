<template>
	<div class="background nav-spacing">
		<div v-for="user in usersList" v-bind:key="user._id">
			<div v-if="user.username === currentUser.username">

				<div class="container">
					<div id="settings-form">
						<h1 >Account Settings</h1>
						<div class="form-input">
							<div class="form-label">Username</div>
							<input class="form" type="text" v-model="user.username" v-validate="required"/>
						</div>


						<div class="form-input">
							<div class="form-label">Email</div>
							<input class="form" type="text" v-model="user.email" v-validate="required"/>
						</div>

						<div class="form-input">
							<div class="form-label">Location</div>
							<input class="form" type="text" v-model="user.location"/>
						</div>

						<div class="form-input">
							<div class="form-label">About you</div>
							<textarea class="description" name="description" v-model="user.password" ></textarea>
						</div>

						<div class="form-input">
							<div class="form-label">Password</div>
							<input class="form" type="password" v-model="user.password" v-validate="required"/>
						</div>

						<div class="form-input">
							<div class="form-label">Confirm Password</div>
							<input class="form" type="password" v-model="user.passwordConfirm"/>
						</div>


						<button class="button-dark spacing-not-last-child">Save</button>


						<router-link to="/user">
							<button class="button-light">Cancel</button>
						</router-link>

					</div>
				</div>
			</div>

		</div>
	</div>

</template>

<script>
	import apiService from '@/apiService'

	export default {
		name: 'AccountSettings',
		data() {
			return {
				usersList: [],
				user: {
					image:'',
					username: '',
					description: '',
					location: '',
					email: '',
					password: '',
					passwordConfirm: ''
				},
			}
		},
		mounted() {
			apiService.getUserProfile().then((data) => {
				this.usersList = data
			})
		},
		computed: {
			currentUser() {
				return this.$store.state.currentUser
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "AccountSettings.scss";
	@import "@/scss/_forms.scss";

</style>