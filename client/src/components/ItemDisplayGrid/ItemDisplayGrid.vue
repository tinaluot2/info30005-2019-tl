
<template>
	<div class="background">
		<div class="container">
			<div class="grid-container site-wide">
				<item-card v-for="item in itemsList" v-bind:key="item._id" :item="item" :users="usersList"></item-card>
			</div>
		</div>
	</div>
</template>

<script>
import ItemCard from '@/components/ItemCard/ItemCard'
import apiService from '@/apiService'
import { bus } from '@/main'
export default {
	name: 'ItemDisplayGrid',
	components: {
		'item-card': ItemCard
	},
	data() {
		return {
			itemsList: [],
			usersList: []
		}
	},
	mounted() {
		apiService.getItems()
		.then((data) => {
			this.itemsList = data.reverse()
			this.$emit('loaded')
		}),
		apiService.getUser()
		.then((data) => {
			this.usersList = data
		})
	}
}
</script>

<style scoped lang="scss">
	@import "./ItemDisplayGrid.scss";
	@import "@/scss/_animation.scss";
</style>