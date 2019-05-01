<template>
    <div class="background">
        <div class="container">
            <div class="grid-container site-wide">
                <item-card v-for="item in itemsList" v-bind:key="item.itemID" :item="item"></item-card>
            </div>
        </div>
    </div>
</template>

<script>

import ItemCard from '@/components/ItemCard/ItemCard'
import ItemProfile from '@/components/ItemProfile/ItemProfile'

export default {
    name: 'ItemDisplayGrid',
    components: {
        'item-card': ItemCard,
        'item-profile': ItemProfile
    },
    data() {
        return {
            //testdata
            itemsList:[
                {
                    itemID: 1,
                    itemTitle: "Paper Coasters",
                    creatorID: 1000,
                    creatorName: "Paperman",
                    material: "Paper",
                    createdAt: Date,
                    likeCount: 0,
                    images: ["https://i.imgur.com/FLL5J3X.jpg"],
                    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    isLiked: false,
                    isBookmarked: false
                },
                {
                    itemID: 2,
                    itemTitle: "Sweater for Pot Plants",
                    creatorID: 1001,
                    creatorName: "sheep",
                    material: "Textiles",
                    createdAt: Date,
                    likeCount: 0,
                    images: ["https://i.imgur.com/M6eejUi.jpg"],
                    description: "Lorem ipsum",
                    isLiked: false,
                    isBookmarked: false
                },
                {
                    itemID: 3,
                    itemTitle: "Plastic Bottle Pencil Case",
                    creatorID: 1002,
                    creatorName: "Plasticman",
                    material: "Plastic",
                    createdAt: Date,
                    likeCount: 0,
                    images: ["https://i.imgur.com/6MbxLyA.jpg"],
                    description: "Lorem ipsum bah bah pencil case",
                    isLiked: false,
                    isBookmarked: false
                },
                {
                    itemID: 4,
                    itemTitle: "Denim Pencil Bag",
                    creatorID: 1003,
                    creatorName: "mariniida",
                    material: "Textiles",
                    createdAt: Date,
                    likeCount: 0,
                    images: ["https://i.imgur.com/iPylcyU.jpg"],
                    description: "This was made with secondhand jeans from Salvos, in the span of 2 days. Was a super rewarding experience being able to reuse and recycle items into something I liked!",
                    isLiked: false,
                    isBookmarked: false
                },
                {
                    itemID: 5,
                    itemTitle: "Metal Tin Cans",
                    creatorID: 1003,
                    creatorName: "mariniida",
                    material: "Aluminium",
                    createdAt: Date,
                    likeCount: 0,
                    images: ["https://i.imgur.com/Q5GRWhI.jpg"],
                    description: "Lorem ipsum bah bah tin can cool patterns!",
                    isLiked: false,
                    isBookmarked: false
                }]
        }
    }
}
</script>

<style scoped lang="scss">
    @import "./ItemDisplayGrid.scss";
</style>
