<template>
    <div class="background">
        <div class="container">
            <div class="grid-container site-wide">
                <item-card v-for="item in items" v-bind:key="item.itemID" :item="item">
                </item-card>
            </div>
        </div>
    </div>
</template>

<script>
import ItemCard from '@/components/ItemCard/ItemCard'

export default {
    name: 'item-display-grid',
    components: {
        'item-card': ItemCard
    },
    data() {
        return {
            items:[
            {
                itemID: 12304,
                creatorID: 1000,
                itemTitle: "Paper Coaster",
                itemCreator: "Batman",
                itemImageURL: "https://i.imgur.com/FLL5J3X.jpg",
                itemCategory: "Paper",
                likeCount: 58,
                isLiked: false
            },
            {
                itemID: 12305,
                creatorID: 1001,
                itemTitle: "Denim Pencil Holders",
                itemCreator: "mariniida",
                itemImageURL: "https://i.imgur.com/iPylcyU.jpg",
                itemCategory: "Textiles",
                likeCount: 60,
                isLiked: false
            },
            {
                itemID: 12306,
                creatorID: 1002,
                itemTitle: "Potplant Sweater",
                itemCreator: "markwang",
                itemImageURL: "https://i.imgur.com/M6eejUi.jpg",
                itemCategory: "Textiles",
                likeCount: 63,
                isLiked: false
            },
            {
                itemID: 12307,
                creatorID: 1003,
                itemTitle: "Plastic Bottle Pencil Case With Zipper",
                itemCreator: "tinaluo",
                itemImageURL: "https://i.imgur.com/6MbxLyA.jpg",
                itemCategory: "Plastic",
                likeCount: 96,
                isLiked: false
            },
            {
                itemID: 12311,
                creatorID: 1006,
                itemTitle: "Aluminium Lanterns",
                itemCreator: "Tony Stark",
                itemImageURL: "https://i.imgur.com/D8Th4YY.jpg",
                itemCategory: "Metal",
                likeCount: 88,
                isLiked: false
            },
            {
                itemID: 12308,
                creatorID: 1005,
                itemTitle: "Plastic Bottle Pencil Case With Zipper",
                itemCreator: "gleung",
                itemImageURL: "https://i.imgur.com/Q5GRWhI.jpg",
                itemCategory: "Metal",
                likeCount: 47,
                isLiked: false
            },
            {
                itemID: 12309,
                creatorID: 1001,
                itemTitle: "Paper Bracelet",
                itemCreator: "mariniida",
                itemImageURL: "https://i.imgur.com/L7JMcJ2.jpg",
                itemCategory: "Paper",
                likeCount: 96,
                isLiked: false
            },
            {
                itemID: 12310,
                creatorID: 1001,
                itemTitle: "Magazine Paper Flowers",
                itemCreator: "mariniida",
                itemImageURL: "https://i.imgur.com/ExJHxfL.jpg",
                itemCategory: "Paper",
                likeCount: 85,
                isLiked: false
            }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    @import "./ItemDisplayGrid.scss";
</style>

