<template>
	<div class="background nav-spacing">
		<div class="animation-wrapper" v-if="!loaded">
			<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
		<div class="container">
			<div v-show="loaded">
				<h1 class="page-header">Bookmarks</h1>
				<div class="grid-container site-wide">
					<item-card v-for="item in userBookmarks" v-bind:key="item._id" :item="item" :users="usersList"></item-card>
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
				itemsList: [],
				usersList: [],
				userBookmarks: [],
				loaded: false
			}
		},
		mounted() {
			apiService.getItems().then((data) => {
				this.itemsList = data
				apiService.getBookmarks(this.currentUser._id).then(res=>{
					this.userBookmarks = this.itemsList.filter(item => res.data.includes(item._id));
					this.loaded = true;
				});
			}),
			apiService.getUser().then((data) => {
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

<style scoped lang="scss">
	@import "@/components/ItemDisplayGrid/ItemDisplayGrid.scss";
</style>


