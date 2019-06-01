<template>
  <div class="comment-box">
    <loader v-if="!loaded"/>
    <div v-if="loaded">
      <article class="media">

        <div class="media-content">
          <div class="field">
             <textarea v-if="!isLoggedIn" :disabled="!isLoggedIn" v-model="newComment" class="description" placeholder="Login to share your thoughts!"></textarea>
            <textarea v-else-if="isLoggedIn" v-model="newComment" class="description" placeholder="Share your thoughts!"></textarea>
          </div>
          <button v-if="isLoggedIn" :disabled="newComment==''" class="button-light" @click="postComment">Post a Comment</button>
          <router-link to="/login" v-if="!isLoggedIn"><button class="button-light">Login to share your thoughts</button></router-link>
        </div>
      </article>

      <li class="comment-container" v-for="(comment, index) in comments" :key="index">
        <!--<div class="comment-avatar">
            &lt;!&ndash; Sprout &ndash;&gt;
            <span v-if="getStatus(comment.user).postCount < status.leaf.count" class="fas fa-seedling badge-icon"></span>
            &lt;!&ndash; Leaf &ndash;&gt;
            <span v-else-if="getStatus(comment.user).postCount < status.tree.count" class="fas fa-leaf badge-icon"></span>
            &lt;!&ndash; Tree &ndash;&gt;
            <span v-else-if="getStatus(comment.user).postCount > status.tree.count" class="fas fa-tree badge-icon"></span>

        </div>-->
        <div class="comment-details">
          <router-link v-bind:to="`/user/${comment.user}`"><a class="comment-username bold">{{comment.user}}</a></router-link>

          <!-- Sprout -->
          <span v-if="getStatus(comment.user).postCount < status.leaf.count" class="fas fa-seedling badge-icon"></span>
          <!-- Leaf -->
          <span v-else-if="getStatus(comment.user).postCount < status.tree.count" class="fas fa-leaf badge-icon"></span>
          <!-- Tree -->
          <span v-else-if="getStatus(comment.user).postCount > status.tree.count" class="fas fa-tree badge-icon"></span>

          <span class="comment-date">{{formatDate(comment.datePosted)}}</span>
          <div class="comment-text">
            {{comment.text}}
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import apiService from '@/apiService'
import moment from 'moment-timezone'
import DivLoader from '@/components/AnimatedLoaders/DivLoader'

export default {
  name: 'comment',
  components: {
    loader: DivLoader
  },
  props: {
    currentItemId: String
  },
  data (){
      return {
        newComment: "",
        comments: [],
        itemsList: [],
    loaded: true,
        sprout: 0,
        status: {
          sprout: { title: "Sprout", count: 0},
          leaf: { title: "Leaf", count: 5},
          tree: { title: "Tree", count: 10}
        }
      }
  },
  mounted() {
      apiService.getItemProfile().then((data) => {
        this.loaded = true
        this.itemsList = data
      }), this.getComments()
  },
  methods: {
      formatDate(date) {
          return moment(date).tz("Australia/Melbourne").fromNow()
      },
      getComments(){
        this.loaded = false
        apiService.getItemComments(this.currentItemId).then((data) => {
            this.comments = data.reverse();
            this.loaded = true
        })
      },
      postComment(){
        const newComment = {
          "user": this.currentUser.username,
          "datePosted": new Date(),
          "text": this.newComment
        }
        this.loaded = false
        apiService.postComment(this.currentItemId, newComment)
                .then(setTimeout(() => {
            this.getComments(),
            //reset comments box
            this.newComment = ""
          }, 1000)
        )
      },
    userPosts(user) {
      return this.itemsList.filter(item => {
        return item.creatorName === user
      })
    },
    getStatus(user) {
      let status = {
        postCount: this.userPosts(user).length,
        title: ''
      }
      if (status.postCount < this.status.leaf.count) {
        status.title = this.status.sprout.title
        return status
      }
      else if (status.postCount < this.status.tree.count) {
        status.title = this.status.leaf.title
        return status
      }
      else
        status.title = this.status.tree.title
      return status
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    },
    isLoggedIn(){
      return this.$store.getters.isLoggedIn
    }

  }
}
</script>

<style lang="scss">
@import "../../scss/_forms.scss";
@import "../../scss/base.scss";
@import "../../components/ItemCard/ItemCard.scss";
@import "./CommentsBox.scss";
</style>
