<template>
	<div class="background nav-spacing">
		<loader v-if="!loaded"/>
		<div v-for="user in usersList" v-bind:key="user._id">
			<div v-if="username == user.username">
				<div class="container">
					<div class="two-column">
						<div class="profile-box">

							<img class="profile-img" src="https://i2.wp.com/fosteredmedia.com/wp-content/uploads/2018/07/female-placeholder.jpg?fit=1024%2C1024&ssl=">
							<h1 class="username">{{user.username}}</h1>
							<h3 class="info-title">About</h3>
							<p class="about-description">{{user.description}}</p>
							<div class="achievement">
									<h3 class="info-title">Reformer Level</h3>
									<p>{{userPosts.length}}</p>
							</div>
						</div>
						<div class="grid-container profile-grid">
								<item-card v-for="item in userPosts" v-bind:key="item._id" :item="item"></item-card>
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
import PageLoader from '@/components/AnimatedLoaders/PageLoader'

export default {
	name: 'UserProfile',
	components: {
			'item-card': ItemCard,
			loader: PageLoader
	},
	data() {
		return {
			//test data
			username: this.$route.params.username,
			usersList: [],
			itemsList: [],
			loading: true
		}
	},
	mounted() {
		apiService.getUserProfile().then((data) => {
			this.loading = false
			this.usersList = data
		}),
		apiService.getItemProfile().then((data) => {
			this.loading = false
			this.itemsList = data
		})
	},
	computed: {
		currentUser() {
			return this.$store.state.currentUser
		},
		userPosts() {
			return this.itemsList.filter(item => {
				return item.creatorName === this.username
			})
		}
	}
}
</script>

<style lang="scss">
@import "@/components/ProfileBox/ProfileBox.scss";
@import "@/scss/_animation.scss";
</style>