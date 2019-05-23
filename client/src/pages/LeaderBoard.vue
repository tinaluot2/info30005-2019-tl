<template>
    <div class="background nav-spacing">
        <div class="box">
            <h1>Leaderboard</h1>

            <div class="leaderboard">
                <h2><i class="fab fa-pagelines"></i>Users with the most number of projects</h2>
                <label class="contents">{{itemsList.length}} posts </label>

                    <ol class="userbox">
                        <li v-for="user in usersList" v-bind:key="user._id">
                            <div class="userinfo">
                                <div class="contents">
                                   <router-link :to="'/user/' + user.username">
                                       <figure class="image is-48x48 is-rounded "><img class=" is-rounded" src="https://i2.wp.com/fosteredmedia.com/wp-content/uploads/2018/07/female-placeholder.jpg?fit=1024%2C1024&ssl=" alt="Smol_Dog"></figure>
                                       <label >{{user.username}}</label>
                                    </router-link>
                                </div>
                                <label class="contents" >{{userPosts(itemsList,user.username).length}} posts</label>
                            </div>
                        </li>
                    </ol>
            </div>
        </div>
    </div>
</template>

<script>
    import apiService from '@/apiService'

    export default {
        name: 'LeaderBoard',
        data() {
            return {
                usersList: [],
                itemsList: [],
                loading: true,
                rankList:[],
            }
        },
        mounted() {
            apiService.getUserProfile().then((data) => {
                this.loading = false
                this.usersList = data
            })
            apiService.getItemProfile().then((data) => {
                this.loading = false
                this.itemsList = data
            })
        },
        methods:{
            userPosts(itemsList, user){
                return itemsList.filter(function(item){
                    return item.creatorName === user
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/global.scss";

    @media screen and (min-width: 768px) {
        #box {
            padding: $margin;
            margin: $margin $page-margin;
        }
    }
    #box {
        background: $body-background-color;
        padding: 20px;
        margin: 0 auto;
        background-color: white;
        box-shadow: $box-drop-shadow;

    }
    .fab{
        padding:10px;
    }

    h1{
        font-size: $title-size;
        text-transform: uppercase;
        color: $primary-color;
        text-align: center;
        margin-bottom: 30px;
    }
    img{
        float:left;
        margin-right:20px;
    }
    .leaderboard {
        border:$primary-color-dark;
        background: $card-color;
        box-shadow: $box-drop-shadow;
        padding: 20px;
        margin: 20px 20px 80px 80px;
        font-family: $body-family;
        .userinfo {
            flex-direction: column;
            display: inline-block;
            vertical-align:  middle;
        }
        .contents{
            display: inline-block;
            vertical-align:  middle;
            padding:10px;
        }
    }

    ol {
        counter-reset:number;
        list-style-type: none!important;
        margin:0;
        padding:0;
    }
    ol li {
        line-height: 1.5em;
        padding: 10px;
    }

    ol li:before{
        counter-increment: number;
        content: counter(number);
        display:inline-block;
        background: $primary-color-dark;
        color: $body-background-color;
        font-weight:bold;
        font-size: 15px;
        border-radius: 50%;
        left: 0;
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        top: 50%;
    }
</style>