<template>
	<div class="background nav-spacing">
		<div class="animation-wrapper" v-if="loading">
			<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
		<div v-for="user in usersList" v-bind:key="user._id">
			<div v-if="username == user.username">
				<div class="container">
					<div class="two-column">
						<div class="profile-box">
								<div>
									<div v-if="userPosts.length < 5">
										<span class="fa-stack fa-4x profile-badge">
											<i class="fas fa-seedling fa-stack-1x badge-icon"></i>
										</span>
									</div>

									<div v-else-if="5 < userPosts.length < 10">
										<span class="fa-stack fa-4x profile-badge">
											<i class="fas fa-leaf fa-stack-1x badge-icon"></i>
										</span>
									</div>

									<div v-else-if="11 < userPosts.length">
										<span class="fa-stack fa-4x profile-badge">
											<i class="fas fa-tree fa-stack-1x badge-icon"></i>
										</span>
									</div>

									<div class="tip">
										<div class="tipicon">
											<i class="far fa-question-circle tipicon"></i>
											<span class="tiptext">
												This badge changes according to your reformer level.
												<br>Less than 10 : <i class="fas fa-seedling"></i>
												<br>11 to 20 : <i class="fas fa-leaf"></i>
												<br>21 and above : <i class="fas fa-tree"></i>
											</span>
										</div>

									</div>
								</div>
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

export default {
	name: 'UserProfile',
	components: {
			'item-card': ItemCard
	},
	data() {
		return {
			//test data
			username: this.$route.params.username,
			usersList: [],
			itemsList: [],
			loading: true,
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