<template>
	<div class="background nav-spacing">
		<div v-for="user in usersList" v-bind:key="user._id">
			<div v-if="user.username === currentUser.username">

				<div class="container">
					<div id="settings-form">
						<h1 >Profile Settings</h1>
						<div class="form-input">
							<div class="form-label">Location</div>
							<input class="form" type="text" v-model="user.location"/>
						</div>

						<div class="form-input">
							<div class="form-label">About you</div>
							<textarea class="description" name="description" v-model="user.description" ></textarea>
						</div>

						<button @click="update" class="button-dark spacing-not-last-child">Save</button>

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
				location: '',
				about: ''
			}
		},
		mounted() {
			apiService.getUserProfile().then((data) => {
				this.usersList = data
			})
		},
		methods: {
			update(){
				const details = {
					location: this.location,
					description: this.about
				}
				apiService.updateDetails(this.currentUser._id, details)
			}
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
	@import "../../scss/_forms.scss";
</style>