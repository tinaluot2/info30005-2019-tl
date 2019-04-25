<template>
	<div class="background nav-spacing">
		<div class="container">
			<div class="two-column">
				<div class="profile-bio">
					<user-profile-box></user-profile-box>
				</div>
				<div class="profile-grid">
					<item-card v-bind:items="items"></item-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProfileBox from '@/components/ProfileBox/ProfileBox'
import ItemCard from '@/components/ItemCard/ItemCard'

export default {
    name: 'UserProfile',
    components: {
        "user-profile-box": ProfileBox,
        "item-card": ItemCard
	},
    data() {
        return {
            items:[
            {
                itemTitle: "Paper Coaster",
                itemCreator: "Marin Iida",
                itemImage: "https://i.imgur.com/FLL5J3X.jpg",
                itemCategory: "Paper",
                itemID: 1234,
                likeCount: 57
            },
            {
                itemTitle: "Denim Pencil Holders",
                itemCreator: "Marin Iida",
                itemImage: "https://i.imgur.com/iPylcyU.jpg",
                itemCategory: "Textiles",
                itemID: 1345,
                likeCount: 76
            },
            {
                itemTitle: "Twine Decorations",
                itemCreator: "Marin Iida",
                itemImage: "https://i.imgur.com/mj1U6se.jpg",
                itemCategory: "Textiles",
                itemID: 1346,
                likeCount: 90
			},
			{
                itemTitle: "Paper Coaster",
                itemCreator: "Marin Iida",
                itemImage: "https://i.imgur.com/FLL5J3X.jpg",
                itemCategory: "Paper",
                itemID: 1234,
                likeCount: 57
            },
            {
                itemTitle: "Denim Pencil Holders",
                itemCreator: "Marin Iida",
                itemImage: "https://i.imgur.com/iPylcyU.jpg",
                itemCategory: "Textiles",
                itemID: 1345,
                likeCount: 76
            }
            ]
        }
    }

}
</script>

<style scoped lang="scss">
@import "@/scss/global.scss";
</style>