<template>
	<div class="background nav-spacing">
		<loader v-if="!loaded"/>
		<div v-for="user in usersList" v-bind:key="user._id">
			<div v-if="username == user.username">
				<div class="container">
					<div class="two-column" v-if="loaded">
						<div class="profile-box">
							<span class="edit-icon-wrapper" v-if="currentUser._id == user._id">
								<router-link to="/settings"><i class="material-icons md-18">edit</i></router-link>
							</span>

							<!-- Sprout -->
							<div v-if="getStatus.postCount < status.leaf.count" class="fas fa-seedling badge-icon"></div>
							<!-- Leaf -->
							<div v-else-if="getStatus.postCount < status.tree.count" class="fas fa-seedling badge-icon"></div>
							<!-- Tree -->
							<div v-else-if="getStatus.postCount > status.tree.count" class="fas fa-seedling badge-icon"></div>

							<h1 class="profile-name">{{user.username}}</h1>
							<p class="status">
								Status: {{getStatus.title}}
								<span class="tip-icon">
									<i class="fas fa-question tip-icon"></i>
									<span class="tip-text">
										Keep reforming to upgrade your badge!
										<p>Up to 5: <i class="fas fa-seedling"></i></p>
										<p>5 to 10: <i class="fas fa-leaf"></i></p>
										<p>10 & above: <i class="fas fa-tree"></i></p>
									</span>
								</span>
							</p>

							<h3 v-if="!isEmpty(user.location)" id="about">Location</h3>
							<p class="about-description">{{user.location}}</p>

							<h3 v-if="!isEmpty(user.description)" id="about">About</h3>
							<p class="about-description">{{user.description}}</p>
						</div>

						<div class="grid-container profile-grid">
							<item-card v-for="item in userPosts" v-bind:key="item._id" :item="item" :users="usersList"></item-card>
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
			'loader': PageLoader
	},
	data() {
		return {
			loaded: false,
			username: this.$route.params.username,
			usersList: [],
			itemsList: [],
			sprout: 0,
			status: {
				sprout: { title: "Sprout", count: 0},
				leaf: { title: "Leaf", count: 5},
				tree: { title: "Tree", count: 10}
			}
		}
	},
	mounted() {
		apiService.getUserProfile().then((data) => {
			this.loaded = true
			this.usersList = data
		}),
		apiService.getItemProfile().then((data) => {
			this.loaded = true
			this.itemsList = data
		})
	},
	methods: {
		//sourced from https://stackoverflow.com/questions/154059/how-to-check-empty-undefined-null-string-in-javascript
		isEmpty(str) {
			return (!str || 0 === str.toString().length)
		}
	},
	computed: {
		currentUser() {
			return this.$store.state.currentUser
		},
		userPosts() {
			return this.itemsList.filter(item => {
				return item.creatorName === this.username
			})
		},
		getStatus() {
			let status = {
				postCount: this.userPosts.length,
				title: ''
			}
			if (status.postCount < this.status.leaf.count) {
				status.title = this.status.sprout.title
				return status
			}
			else if (status.postCount < this.status.tree.count) {
				status.title = this.status.leaf.title
				return status
			}
			else
				status.title = this.status.tree.title
				return status
		}
	}
}
</script>

<style lang="scss">
@import "./UserProfile.scss";
</style>