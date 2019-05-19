<template>
	<div class="background nav-spacing">
		<div v-for="user in usersList" v-bind:key="user._id">
			<div v-if="username == user.username">
				<div class="container">
					<div class="two-column">
						<div class="profile-box">
								<span v-if="user.username == currentUser.username" class ="edit-icon-wrapper">
										<i class ="material-icons md-18">edit</i>
								</span>
								<img class="profile-img" src="https://i2.wp.com/fosteredmedia.com/wp-content/uploads/2018/07/female-placeholder.jpg?fit=1024%2C1024&ssl=">
								<h1 class="username">{{user.username}}</h1>
								<h3 class="info-title">About</h3>
								<p class="about-description">{{user.description}}</p>
								<div class="achievement">
										<h3 class="info-title">Achievements</h3>
										<p>{{user.projects.length}}</p>
								</div>
						</div>
						<div class="grid-container profile-grid">
								<item-card v-for="(item, index) in user.projects" v-bind:key="index" :item="item"></item-card>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ItemCard from '@/components/ItemCard/ItemCard'
import apiService from '@/apiService'

export default {
	name: 'UserProfile',
	components: {
			'item-card': ItemCard
	},
	data() {
		return {
			//test data
			username: this.$route.params.username,
			usersList: []
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

<style lang="scss">
@import "@/components/ProfileBox/ProfileBox.scss";
</style>