<template>
	<div class="background nav-spacing">
        <div v-for="profile in profilesList" v-bind:key="profile.userID">
            <div v-if="username == profile.username">
                <div class="container">
                    <div class="two-column">
                        <div class="profile-box">
                            <span class="edit-icon-wrapper">
                                <i class="material-icons md-18">edit</i>
                            </span>
                            <img class="profile-img" :src="profile.profilePic">
                            <h1 class="username">{{profile.username}}</h1>
                            <div class="bio">
                                <h3>About</h3>
                                <p class="description">{{profile.description}}</p>
                            </div>
                            <div class="achievement">
                                <h3>Achievements</h3>
                                <p>{{countAchievements}}</p>
                            </div>
                        </div>
                        <div class="grid-container profile-grid">
                            <item-card v-for="item in filterByUser()" v-bind:key="item.itemID" :item="item"></item-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>import ItemCard from '@/components/ItemCard/ItemCard'

export default {
    name: 'UserProfile',
    components: {
        'item-card': ItemCard
	},
    data() {
        return {
            //test data
            username: this.$route.params.username,
            profilesList: [
                {
                    userID: 1000,
                    profilePic: "https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg",
                    username: "Paperman",
                    description: "I love paper",
                },
                {
                    userID: 1001,
                    profilePic: "https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg",
                    username: "sheep",
                    description: "I am your wool sweater",
                },
                {
                    userID: 1002,
                    profilePic: "https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg",
                    username: "Plasticman",
                    description: "Plastic hurts turtles",
                },
                {
                    userID: 1003,
                    profilePic: "https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg",
                    username: "mariniida",
                    description: "Reducer. Reuser. Reformer. I love puppies",
                }
            ],
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
    },
    computed: {
        filterByUser() {
            return this.itemsList.filter((item) => {
                return item.creatorName === this.username
            })
        },
        countAchievements() {
            return this.itemsList.filter((item) => item.creatorName === this.username).length;
        }
    }

}
</script>

<style scoped lang="scss">
@import "@/scss/global.scss";
@import "@/components/ProfileBox/ProfileBox.scss";
</style>