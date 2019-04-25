<template>
 <div class="grid-container site-wide">
    <div class="small-card" v-for="item in items" v-bind:key="item.itemID">
        <div class="card-image">
            <figure class="image is-5by4">
                <img :src="item.itemImageURL"/>
            </figure>
        </div>
        <div class="card-content">
            <a class="item-title">{{item.itemTitle}}</a>
            <a class="item-creator">{{item.itemCreator}}</a>
            <a class="item-category">{{item.itemCategory}}</a>
        </div>

        <footer class="card-footer">
            <div class="card-footer-item">
                <div class="icon-button-wrapper like-button"
                @click="item.isLiked = !item.isLiked"
                v-bind:class="{liked:item.isLiked}">
                    <i class="material-icons md-16">thumb_up</i>
                </div>
                {{item.likeCount}}
            </div>
            <div class="card-footer-item">
                 <span class="icon-button-wrapper bookmark-button">
                    <i class="material-icons md-16">bookmark</i>
                </span>
            </div>
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
            itemID: {type: Number},
            creatorID: {type: Number},
            itemTitle: {type: String},
            itemCreator: {type: String},
            itemImageURL: {type: String},
            itemCategory: {type: String},
            likeCount: {type: Number},
            isLiked: {type: Boolean},
            isBookmarked: {type: Boolean}
        }
    },
    methods: {},
    computed: {
        toggleReaccs: function(){
            return {
                liked: this.items.isLiked
            }
        }
    },
}
</script>

<style lang="scss">
@import "./ItemCard.scss";
</style>

