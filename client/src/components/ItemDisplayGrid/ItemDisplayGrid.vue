<template>
    <div class="display-grid">
        <div class="container">
            <div class="grid-container">
                <div class="small-card" v-for="(data,ItemCard) in items" v-bind:key="(ItemCard)">
                    <div class="card-image">
                        <figure class="image is-5by4">
                            <img :src="data.itemImage"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <a class="item-title">{{data.itemTitle}}</a>
                        <a class="item-creator">{{data.itemCreator}}</a>
                        <a class="item-category">{{data.itemCategory}}</a>
                    </div>

                    <footer class="card-footer">
                        <p class="card-footer-item">
                            <span>
                                <i class="fas fa-star" ></i>
                                ❤ {{data.likeCount}}
                            </span>
                        </p>
                        <p class="card-footer-item">
                            <span>
                                <i class="fas fa-book"></i>
                                (Bookmark Count)
                            </span>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ItemCard from '@/components/ItemCard/ItemCard'

export default {
    name: 'ItemDisplayGrid',
    data () {
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
                itemTitle: "Paper Coaster",
                itemCreator: "Batman",
                itemImage: "https://i.imgur.com/FLL5J3X.jpg",
                itemCategory: "Paper",
                itemID: 1239,
                likeCount: 57
            },
            {
                itemTitle: "Denim Pencil Holders",
                itemCreator: "Marin Iida",
                itemImage: "https://i.imgur.com/iPylcyU.jpg",
                itemCategory: "Textiles",
                itemID: 1240,
                likeCount: 78
            },
            {
                itemTitle: "Aluminium Flower",
                itemCreator: "Mark Wang",
                itemImage: "https://i.imgur.com/WSQzKF3.jpg",
                itemCategory: "Metal",
                itemID: 1241,
                likeCount: 89
            },
            {
                itemTitle: "Plastic Bottle Pencil Case",
                itemCreator: "Tina Luo",
                itemImage: "https://i.imgur.com/6MbxLyA.jpg",
                itemCategory: "Plastic",
                itemID: 1242,
                likeCount: 92
            },
            {
                itemTitle: "Magazine Paper Flowers",
                itemCreator: "Giselle Leung",
                itemImage: "https://i.imgur.com/ExJHxfL.jpg",
                itemCategory: "Paper",
                itemID: 1243,
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

