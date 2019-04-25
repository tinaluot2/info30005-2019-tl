<template>
 <div class="grid-container profile-grid">
    <div class="small-card" v-for="item in items" v-bind:key="item.itemID">
        <div class="card-image">
            <figure class="image is-5by4">
                <img :src="item.itemImage"/>
            </figure>
        </div>
        <div class="card-content">
            <a class="item-title">{{item.itemTitle}}</a>
            <a class="item-creator">{{item.itemCreator}}</a>
            <a class="item-category">{{item.itemCategory}}</a>
        </div>

        <footer class="card-footer">
            <p class="card-footer-item">
                <span>
                    <i class="fas fa-star" ></i>
                    ❤ {{item.likeCount}}
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
</template>

<script>
//import ItemCardDetail from './ItemCardDetail.vue';

export default {
    name: 'item-card',
    props: {
        items: {
            itemTitle: {type: String},
            itemCreator: {type: String},
            itemImage: {type: String},
            itemCategory: {type: String},
            itemID: {type: Number},
            likeCount: {type: Number}
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss">
@import "./ItemCard.scss";
</style>

