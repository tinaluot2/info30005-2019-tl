<template>
    <div class="background">
        <div class="container">
            <div class="grid-container site-wide">
                <item-card v-for="item in itemsList" v-bind:key="item.itemID" :item="item">
                </item-card>
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
                    creatorUsername: "Paperman",
                    material: "Paper",
                    likeCount: 0,
                    images: ["https://i.imgur.com/FLL5J3X.jpg"],
                    isLiked: false,
                    isBookmarked: false
                },
                {
                    itemID: 2,
                    itemTitle: "Sweater for Pot Plants",
                    creatorID: 1001,
                    creatorUsername: "sheep",
                    material: "Textiles",
                    likeCount: 0,
                    images: ["https://i.imgur.com/M6eejUi.jpg"],
                    isLiked: false,
                    isBookmarked: false
                },
                {
                    itemID: 3,
                    itemTitle: "Plastic Bottle Pencil Case",
                    creatorID: 1002,
                    creatorUsername: "Plasticman",
                    material: "Textiles",
                    likeCount: 0,
                    images: ["https://i.imgur.com/6MbxLyA.jpg"],
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
