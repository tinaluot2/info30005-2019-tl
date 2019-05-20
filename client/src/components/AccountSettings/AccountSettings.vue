<template>
	<div class="background nav-spacing">
		<div class="container">
			<div id="settings-form">
				<h1>Account Settings</h1>

				<img class="profile-img" src="https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg">

				<div class="field">
					<div class="file is-centered is-boxed has-name">
						<label class="file-label">
							<input class="file-input" type="file" name="resume">
							<span class="file-cta">
								<span class="file-label">Change profile photo</span>
						  	</span>
							<span class="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
						</label>
						</div>
				</div>

				<div class="form-input">
					<div class="form-label">Current Username</div>
					<p class type="text" v-bind="user.currentUsername">{{user.currentUsername}}</p>
					<a class="edit-text">Change</a>
				</div>

				<div class="form-input">
					<div class="form-label">Email</div>
					<input class="form" type="text" v-model="user.email"/>
				</div>

				<div class="form-input">
					<div class="form-label">Display Name</div>
					<input class="form" type="text" v-model="user.displayName"/>
				</div>

				<div class="form-input">
					<div class="form-label">Location</div>
					<input class="form" type="text" v-model="user.displayName"/>
				</div>

				<div class="form-input">
					<div class="form-label">About</div>
					<textarea class="description" name="description"></textarea>
				</div>

				<div class="form-input">
					<div class="form-label">Current Password</div>
					<input class="form" type="password" v-model="user.password"/>
				</div>

				<div class="form-input">
					<div class="form-label">New Password</div>
					<input class="form" type="password" v-model="user.password"/>
				</div>

				<div class="form-input">
					<div class="form-label">Confirm Password</div>
					<input class="form" type="password" v-model="user.passwordConfirm"/>
				</div>

				<router-link to="/user"><button class="button-dark spacing-not-last-child" value="Submit">Save</button></router-link>
				<button class="button-light">Cancel</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'AccountSettings',
	data() {
		return {
			user: {
				currentUsername: 'gigi123',
				username: '',
				displayName: '',
				about: '',
				location: '',
				email: '',
				password: '',
				passwordConfirm: ''
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import "AccountSettings.scss";
@import "@/scss/_forms.scss";
@import "@/components/SiteNav/_userform.scss";
</style>