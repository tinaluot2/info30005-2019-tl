<template>
    <div class="background">
        <div class="container">
            <item-card v-bind:items="items"></item-card>
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
                itemTitle: "Paper Coaster",
                itemCreator: "Batman",
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
                itemID: 1235,
                likeCount: 78
            },
            {
                itemTitle: "Twine Decorations",
                itemCreator: "Mark Wang",
                itemImage: "https://i.imgur.com/mj1U6se.jpg",
                itemCategory: "Textiles",
                itemID: 1236,
                likeCount: 89
            },
            {
                itemTitle: "Plastic Bottle Pencil Case",
                itemCreator: "Tina Luo",
                itemImage: "https://i.imgur.com/6MbxLyA.jpg",
                itemCategory: "Plastic",
                itemID: 1236,
                likeCount: 92
            },
            {
                itemTitle: "Magazine Paper Flowers",
                itemCreator: "Giselle Leung",
                itemImage: "https://i.imgur.com/ExJHxfL.jpg",
                itemCategory: "Paper",
                itemID: 1238,
                likeCount: 75
            },
            {
                itemTitle: "Denim Pencil Holders",
                itemCreator: "Marin Iida",
                itemImage: "https://i.imgur.com/iPylcyU.jpg",
                itemCategory: "Textiles",
                itemID: 1235,
                likeCount: 78
            },
            {
                itemTitle: "Twine Decorations",
                itemCreator: "Mark Wang",
                itemImage: "https://i.imgur.com/mj1U6se.jpg",
                itemCategory: "Textiles",
                itemID: 1236,
                likeCount: 89
            },
            {
                itemTitle: "Plastic Bottle Pencil Case",
                itemCreator: "Tina Luo",
                itemImage: "https://i.imgur.com/6MbxLyA.jpg",
                itemCategory: "Plastic",
                itemID: 1236,
                likeCount: 92
            },
            {
                itemTitle: "Magazine Paper Flowers",
                itemCreator: "Giselle Leung",
                itemImage: "https://i.imgur.com/ExJHxfL.jpg",
                itemCategory: "Paper",
                itemID: 1238,
                likeCount: 75
            }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    @import "./ItemDisplayGrid.scss";
</style>

