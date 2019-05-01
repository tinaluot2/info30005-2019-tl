<template>
<div class="background nav-spacing">
    <div v-for="item in itemsList" v-bind:key="item.itemID">
        <div v-if="id == item.itemID">
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
                        <time datetime="2018-4-1">12 hours ago</time>
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
		return{
            id: this.$route.params.itemid,
            //test data
            itemsList:[
                {
                    itemID: 1,
                    itemTitle: "Paper Coasters",
                    creatorID: 1000,
                    creatorName: "Paperman",
                    material: ["Paper"],
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
                    material: ["Textiles"],
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
                    material: ["Plastic"],
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
                    material: ["Textiles"],
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
        // mounted() {
        //     axios.get("http://localhost:3000/items/").then((response) => {
        //     this.items = response;
        //     console.log(response);
        // })
}
</script>

<style scoped lang="scss">
@import "./ItemProfile.scss";
</style>
