<template>
  <div class="comment-box">
    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img class="is-rounded" src="https://i2.wp.com/fosteredmedia.com/wp-content/uploads/2018/07/female-placeholder.jpg?fit=1024%2C1024&ssl=">
        </p>
      </figure>

      <div class="media-content">
        <div class="field">
          <textarea v-model="newComment" class="description" placeholder="What do you think of this creation?"></textarea>
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
</template>

<script>
import apiService from '@/apiService'
import moment from 'moment'

export default {
  name: 'comment',
  props: {
    currentItemId: String
  },
	data (){
		return {
      newComment: "",
      comments: []
		}
	},
	mounted() {
    this.getComments()
	},
	methods: {
		formatDate(date) {
			return moment(date).startOf('day').fromNow()
    },
    getComments(){
      apiService.getItemComments(this.currentItemId)
        .then((data) => {
          this.comments = data;
      })
    },
    postComment(){
			const newComment = {
        "user": this.currentUser.username,
        "datePosted": new Date(),
        "text": this.newComment
      }
			apiService.postComment(this.currentItemId, newComment)
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
