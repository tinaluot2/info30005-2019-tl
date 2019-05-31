<template>
  <div class="comment-box">
    <loader v-if="!loaded"/>
    <div v-if="loaded">
      <article class="media">
        <figure class="media-left">
          <p class="image is-48x48">
            <img class="is-rounded" src="https://i2.wp.com/fosteredmedia.com/wp-content/uploads/2018/07/female-placeholder.jpg?fit=1024%2C1024&ssl=">
          </p>
        </figure>

        <div class="media-content">
          <div class="field">
            <textarea v-model="newComment" class="description" placeholder="Share your thoughts!"></textarea>
          </div>
          <button :disabled="newComment==''" class="button-light" @click="postComment">Post a Comment</button>
        </div>
      </article>

      <li class="comment-container" v-for="(comment, index) in comments" :key="index">
        <div class="comment-avatar">
          <p class="image is-48x48">
            <img class="is-rounded" src="https://i2.wp.com/fosteredmedia.com/wp-content/uploads/2018/07/female-placeholder.jpg?fit=1024%2C1024&ssl=">
          </p>
        </div>
        <div class="comment-details">
          <router-link v-bind:to="`/user/${comment.user}`"><a class="comment-username bold">{{comment.user}}</a></router-link>
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
      loaded: true
		}
	},
	mounted() {
    this.getComments()
	},
	methods: {
		formatDate(date) {
			return moment(date).tz("Australia/Melbourne").fromNow()
    },
    getComments(){
      this.loaded = false
      apiService.getItemComments(this.currentItemId)
        .then((data) => {
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
          .then(
            setTimeout(() => {
              this.getComments(),
              //reset comments box
              this.newComment = ""
            }, 1000
            )
        )
    }
  },
  computed: {
		currentUser() {
      return this.$store.state.currentUser
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/_forms.scss";
@import "@/components/ItemCard/ItemCard.scss";
@import "./CommentsBox.scss";
</style>
