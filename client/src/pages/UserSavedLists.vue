<template>
	<div class="background nav-spacing">
		<div v-for="user in usersList" v-bind:key="user._id" >
			<div v-if="user.username === currentUser.username">

				<div class="box">
					<h1>Bookmarks</h1>
					<div class="container">
						<div class="grid-container site-wide">
							<item-card v-for="item in itemsList" v-bind:key="item._id" :item="item"></item-card>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>

	import ItemCard from '../components/ItemCard/ItemCard'
	import apiService from '@/apiService'

	export default {
		name: 'UserSavedLists',
		components: {
			'item-card': ItemCard
		},
		data() {
			return {
				usersList: [],
				itemsList: [],
				user: {
					username:''
				},
			}
		},
		mounted() {
			apiService.getUserProfile().then((data) => {
				this.usersList = data
			});
			apiService.getItems().then((data) => {
				this.itemsList = data
				bus.$emit('loaded')
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
	@import "../components/ItemDisplayGrid/ItemDisplayGrid.scss";
	@import "../scss/global.scss";

	.box{
		padding: 20px;
		margin: 0 auto;
		background-color: white;
		h1 {
			font-size: $title-size;
			text-transform: uppercase;
			color: $primary-color;
			text-align: center;
			margin-bottom: 10px;
		}
	}
</style>

