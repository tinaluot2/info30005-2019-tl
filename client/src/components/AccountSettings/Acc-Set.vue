<template>
	<div class="background nav-spacing">
		<div class="container">
			<div id="upload-form">

				<h1>Account Settings</h1>


				<div class="settingbox">
					<h2>Profile</h2>
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



				<div class="inputs">
					<h3>Username</h3>
					<input class="input" type="text" placeholder="Current Username">

					<h3>Email</h3>
					<input class="input" type="text" placeholder="Current Email">

					<h3>Password</h3>
					<input class="input" type="text" placeholder="Current password">

				</div>
			</div>

				<div class="checkboxes">
					<h2>Newsletter</h2>
					<div v-for="option in categoryOptions" v-bind:key="option.value">
						<input class="checkbox" type="checkbox"
						name="preferences"
						:checked="option.checked"
						v-model="option.checked" v-validate="'required|minLength:1'"/>
						{{option.name}}
					</div>
				</div>

				<router-link to="/user"><button class="button-dark spacing-not-last-child" value="Submit">Save</button></router-link>
				<button class="button-light">Cancel</button>
				</div>
			</div>
		</div>

</template>

<script>

export default {
	name: 'CreateItem',
	data() {
		return {
			item:
			{
				itemTitle: "",
				itemImageURL01: "",
				itemImageURL02: "",
				itemImageURL03: "",
				itemImageURL04: "",
				itemImageURL05: "",
                itemCategory: [],
                itemDescription: ""
			},
			categoryOptions:[
			{
				name: "Do not send emails",
				value: "N/a",
				checked: false
			},
			{
				name: "Monthly",
				value: "Monthly notifications",
				checked: false
			},
			{
				name: "Weekly",
				value: "Weekly notifications",
				checked: false
			},
			{
				name: "Daily",
				value: "Daily notifications",
				checked: false
			},
			{
				name: "Everytime someone comments/tags/contacts me",
				value: "All notifications",
				checked: false
			}]
		}
	},
	methods:{
	}
}
</script>

<style scoped lang="scss">
@import "Acc-Set.scss";
</style>
