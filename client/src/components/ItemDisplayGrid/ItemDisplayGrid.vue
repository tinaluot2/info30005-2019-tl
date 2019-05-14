<template>
	<div class="background">
		<div class="container">
			<div class="grid-container site-wide">
				<item-card v-for="item in itemsList" v-bind:key="item._id" :item="item"></item-card>
			</div>
		</div>
	</div>
</template>

<script>

import ItemCard from '@/components/ItemCard/ItemCard'
import apiService from '@/apiService'

export default {
	name: 'ItemDisplayGrid',
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
		})
	}
}
</script>

<style scoped lang="scss">
    @import "./ItemDisplayGrid.scss";
</style>
