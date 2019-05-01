<template>
    <div class="small-card">
        <div class="card-image">
            <div class="image-overlay" v-if="item.creatorID == 1004">
                <router-link to="/edit">
                    <span class="edit-wrapper edit-item-button">
                        <i class="material-icons md-18">edit</i>
                    </span>
                </router-link>
            </div>
            <figure class="image is-5by4">
                <img :src="item.images[0]"/>
            </figure>
        </div>
        <div class="card-content">
            <router-link v-bind:to="'/item/' + item.itemID"><a class="item-title">{{item.itemTitle}}</a></router-link>
             <router-link v-bind:to="'/user/' + item.creatorName"><a class="item-creator">{{item.creatorName}}</a></router-link>
            <a class="item-category">{{item.material}}</a>
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
                 <span class="icon-button-wrapper bookmark-button" @click=clickEvent
                v-bind:class="{bookmarked:item.isBookmarked}">
                    <i class="material-icons md-16">bookmark</i>
                </span>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'ItemCard',
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
@import "./ItemCard.scss";
</style>
