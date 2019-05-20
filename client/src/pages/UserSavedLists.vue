<template>
	<div class="background nav-spacing">
		<div class="container">
			<h1 class="page-title">Bookmarks</h1>
			<div class="grid-container site-wide">
				<item-card v-for="item in itemsList" v-bind:key="item._id" :item="item"></item-card>
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
				itemsList: []
			}
		},
		mounted() {
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
	@import "@/components/ItemDisplayGrid/ItemDisplayGrid.scss";
</style>


