<template>
	<div class="small-card">
		<div class="thumbnail">
			<div class="image-overlay" v-if="item.creatorName == currentUser.username">
				<router-link :to="'/edit/' + item._id">
					<span class="edit-wrapper edit-item-button">
						<i class="material-icons md-18">edit</i>
					</span>
				</router-link>
			</div>
			<figure class="image is-5by4">
				<router-link v-bind:to="'/item/' + item._id"><img :src="'/api' + '/items/' + item.images[0]"/></router-link>
			</figure>
		</div>
		<div class="card-content">
			<router-link v-bind:to="'/item/' + item._id"><a class="card-title">{{item.itemTitle}}</a></router-link>
			<router-link v-bind:to="'/user/' + item.creatorName"><a class="username-link">{{item.creatorName}}</a></router-link>
			<div class="material-tags">
				<a class="tag" v-for="(material, index) in item.material" :key="index">{{material}}</a>
			</div>
		</div>

		<footer class="card-footer">
			<div class="card-footer-item">
				<span class="icon-button-wrapper like-button"
				@click="likeItem()"
				v-bind:class="{liked:isLiked}">
					<div v-if="loadingLikes" class="lds-ring"><div></div><div></div><div></div><div></div></div>
					<i v-if="!loadingLikes" class="material-icons md-16">thumb_up</i>
				</span>
				<div class="like-count">
					{{item.likeCount}}
				</div>
			</div>

			<div class="card-footer-item">
				<span class="icon-button-wrapper bookmark-button" @click="bookmarkItem()"
			v-bind:class="{bookmarked:isBookmarked}">
					<div v-if="loadingBookmarks" class="lds-ring"><div></div><div></div><div></div><div></div></div>
					<i v-if="!loadingBookmarks" class="material-icons md-16">bookmark</i>
				</span>
			</div>
		</footer>
	</div>
</template>

<script>
import apiService from '@/apiService'

export default {
	name: 'ItemCard',
	data () {
		return {
			bookmarks:[],
			likes: [],
			loadingBookmarks: false,
			loadingLikes : false
		}
	},
	props: {
		item: {
				type: Object,
				required: true
		},
	},
	methods: {
		getBookmarks(){
			apiService.getBookmarks(this.currentUser._id)
			.then((data) => {
				this.bookmarks = data.data
				this.loadingBookmarks = false
			})
		},
		getLikes(){
			apiService.getLikes(this.currentUser._id)
			.then((data) => {
				this.likes = data.data
				this.loadingLikes = false
			})
		},
		bookmarkItem(){
			if (!this.isLoggedIn){
				this.$router.push(this.$route.query.redirect || '/login')
			}
			else {
				if (!this.isBookmarked) {
					this.loadingBookmarks = true
					apiService.postBookmark(this.item._id, this.currentUser.username)
						.then(() => {
							this.getBookmarks()
						})
				}
				else if (this.isBookmarked) {
					this.loadingBookmarks = true
					apiService.deleteBookmark(this.currentUser.username, this.item._id)
						.then(()=>{
							this.getBookmarks()
						})
				}
			}
		},
		likeItem(){
			if (!this.isLoggedIn){
				this.$router.push(this.$route.query.redirect || '/login')
			}
			else {
				if (!this.isLiked) {
					this.loadingLikes = true
					apiService.postLike(this.item._id, this.currentUser.username)
						.then(() => {
							this.getLikes()
						})
				}
				else if (this.isLiked) {
					this.loadingLikes = true
					apiService.deleteLike(this.currentUser.username, this.item._id)
						.then(()=>{
							this.getLikes()
						})
				}
			}
		}
	},
	mounted() {
		this.getBookmarks(),
		this.getLikes()
	},
	computed: {
		isLoggedIn(){
			return this.$store.getters.isLoggedIn
		},
		currentUser() {
			return this.$store.state.currentUser
		},
		isBookmarked(){
			return this.bookmarks.includes(this.item._id)
		},
		isLiked() {
			return this.likes.includes(this.item._id)
		}
	}
}
</script>

<style lang="scss">
@import "./ItemCard.scss";
</style>
