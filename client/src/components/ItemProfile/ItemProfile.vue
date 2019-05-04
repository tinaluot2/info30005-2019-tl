<template>
<div class="background nav-spacing">
    <div v-for="item in itemsList" v-bind:key="item._id">
        <div v-if="itemid == item._id">
            <div class="container">
                <div class="medium-card">
                    <div class="card-header">
                    <div class="card-header-icon">
                        <figure class="image is-48x48">
                            <img src="https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg" alt="Smol_Dog">
                        </figure>
                    </div>
                    <div class="card-header-title">
                        <div class="item-title">{{item.itemTitle}}</div>
                        <div class="card-creator">{{item.creatorName}}</div>
                    </div>
                    <div class="timestamp">
                        <time datetime="2018-4-1">{{item.createdAt}}</time>
                    </div>

                </div>

                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src="item.images">
                    </figure>
                </div>

                <div class="card-content">
                    <a class="category-tag" href="#">{{item.material}}</a>
                    <p>{{item.description}}</p>
                </div>

                <div class="button-menu">
                    <button class="button-light spacing-not-last-child">
                        <span>Like</span>
                    </button>

                    <button class="button-light spacing-not-last-child">
                        <span>Bookmark</span>
                    </button>

                    <button class="button-light">
                        <span>Share</span>
                    </button>
                </div>

                <article class="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                            <img class="is-rounded" src="https://cdn0.iconfinder.com/data/icons/celebration-and-party-2-1/97/68-512.png">
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="field">
                            <p class="control">
                                <textarea class="textarea" placeholder="Add a comment..."></textarea>
                            </p>
                        </div>
                            <button class="button-dark">Post comment</button>
                    </div>
                </article>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'item-profile',
	data (){
		return {
            itemid: this.$route.params.itemid,
            itemsList:[]
            }
        },
        mounted() {
            axios.get("http://localhost:3000/items/").then((res) => {
            this.itemsList = res.data;})
    }
}
</script>

<style scoped lang="scss">
@import "./ItemProfile.scss";
</style>
