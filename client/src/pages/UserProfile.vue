<template>
	<div class="background nav-spacing">
		<div class="container">
			<div class="two-column">
				<div class="profile-bio">
					<user-profile-box></user-profile-box>
				</div>
				<div class="grid-container profile-grid">
                    <item-card v-for="item in items" v-bind:key="item.itemID" :item="item">
                </item-card>
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
                itemID: 12305,
                creatorID: 1001,
                itemTitle: "Denim Pencil Holders",
                itemCreator: "mariniida",
                itemImageURL: "https://i.imgur.com/iPylcyU.jpg",
                itemCategory: "Textiles",
                likeCount: 60,
                isLiked: false,
                isBookmarked: false
            },
            {
                itemID: 12309,
                creatorID: 1001,
                itemTitle: "Paper Bracelet",
                itemCreator: "mariniida",
                itemImageURL: "https://i.imgur.com/L7JMcJ2.jpg",
                itemCategory: "Paper",
                likeCount: 96,
                isLiked: false,
                isBookmarked: false
            },
            {
                itemID: 12310,
                creatorID: 1001,
                itemTitle: "Magazine Paper Flowers",
                itemCreator: "mariniida",
                itemImageURL: "https://i.imgur.com/ExJHxfL.jpg",
                itemCategory: "Paper",
                likeCount: 85,
                isLiked: false,
                isBookmarked: false
            }
            ]
        }
    }

}
</script>

<style scoped lang="scss">
@import "@/scss/global.scss";
</style>