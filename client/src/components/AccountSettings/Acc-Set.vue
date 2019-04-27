<template>
	<div class="background nav-spacing">
		<div class="container">
			<div id="upload-form">
				<h1>Account Settings</h1>
						<label>Profile Picture</label>
          <span class="edit-icon-wrapper">
              <i class="material-icons md-18">Edit profile</i>
          </span>
          <img class="profile-img" src="https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg">
					<div class="image-upload">
						<p>Upload an image as your profile picture.</p>
						<input type="file" name="image" accept="image/*">
					</div>

          <div class="inputs">
  					<div class="form">
  						<label>Change Username</label>
  						<input class="input" type="text" placeholder="Please enter your new username.">
  					</div>
            </div>

            <div class="inputs">
              <div class="form">
                <label>Change Email</label>
                <input class="input" type="text" placeholder="Please enter your new email.">
              </div>
              </div>

              <div class="inputs">
                <div class="form">
                  <label>Change Password</label>
                  <input class="input" type="text" placeholder="Please enter your new password.">
                </div>
                </div>

					<label>Opt-in for Email Notifications/Newsletter</label>
						<div class="checkboxes">
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
@import "@/components/AccountSettings/Acc-Set.scss";
</style>
