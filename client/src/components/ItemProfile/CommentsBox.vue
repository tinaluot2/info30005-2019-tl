<template>
<div>
  <li class="comment-container">
    <div class="comment-avatar">
      <p class="image is-48x48">
        <img class="is-rounded" src="https://i2.wp.com/fosteredmedia.com/wp-content/uploads/2018/07/female-placeholder.jpg?fit=1024%2C1024&ssl=">
      </p>
    </div>
    <div class="comment-details">
      <a class="comment-username bold">username</a>
      <span class="comment-date">5 minutes ago</span>
      <div class="comment-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  </li>
   <li class="comment-container">
    <div class="comment-avatar">
      <p class="image is-48x48">
        <img class="is-rounded" src="https://i2.wp.com/fosteredmedia.com/wp-content/uploads/2018/07/female-placeholder.jpg?fit=1024%2C1024&ssl=">
      </p>
    </div>
    <div class="comment-details">
      <a class="comment-username bold">username</a>
      <span class="comment-date">5 minutes ago</span>
      <div class="comment-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
	data (){
		return {
			}
	},
	mounted() {
	},
	methods: {
		formatDate(date) {
			return moment(date).startOf('day').fromNow()
		}
	}
}
</script>

<style lang="scss">
@import "@/scss/_forms.scss";
@import "@/components/ItemCard/ItemCard.scss";
@import "./CommentsBox.scss";
</style>
