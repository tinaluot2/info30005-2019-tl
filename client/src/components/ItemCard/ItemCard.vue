<template>
    <div class="small-card">
        <div class="card-image">
            <div class="image-overlay">
                <router-link to="/edit">
                    <span class="edit-wrapper edit-item-button">
                        <i class="material-icons md-18">edit</i>
                    </span>
                </router-link>
            </div>
            <figure class="image is-5by4">
                <router-link to= "/item/itemID"<img :src="item.itemImageURL"/></router-link>
                <button class="button-light">Save Draft</button>
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
                <div class="like-count">
                    {{item.likeCount}}
                </div>
            </div>
            <div class="card-footer-item">
                 <span class="icon-button-wrapper bookmark-button" @click="item.isBookmarked = !item.isBookmarked"
                v-bind:class="{bookmarked:item.isBookmarked}">
                    <i class="material-icons md-16">bookmark</i>
                </span>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
    name: 'item-card',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {},
    computed: {
        toggleReaccs: function(){
            return {
                liked: this.items.isLiked,
                bookmarked: this.items.isBookmarked
            }
        }
    }
}
</script>

<style lang="scss">
@import "./ItemCard.scss";
</style>
