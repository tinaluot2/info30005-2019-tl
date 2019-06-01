<template>
	<div class="background nav-spacing">
		<div class="container">
			<div id="settings-form">
				<h1 >Profile Settings</h1>
				<div class="form-input">
					<div class="form-label">Location</div>
					<input class="form" type="text" v-model="location"/>
				</div>

				<div class="form-input">
					<div class="form-label">About you</div>
					<textarea class="description" name="description" v-model="about"></textarea>
				</div>

				<button @click="update" class="button-dark spacing-not-last-child">Save</button>

				<router-link to="/user">
					<button class="button-light">Cancel</button>
				</router-link>

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
				location: '',
				about: ''
			}
		},
		mounted() {
			this.location = this.currentUser.location
			this.about = this.currentUser.description
		},
		methods: {
			update(){
				const details = {
					location: this.location,
					description: this.about
				}
				apiService.updateDetails(this.currentUser._id, details).then(
					this.currentUser.location = this.location,
					this.currentUser.description = this.about,
					this.$router.push(this.$route.query.redirect || `/user/${this.currentUser.username}`)
				)
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