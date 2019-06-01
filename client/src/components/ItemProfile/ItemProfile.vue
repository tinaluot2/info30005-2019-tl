<template>
<div class="background nav-spacing">
	<loader v-if="!loaded"/>
	<div v-for="item in itemsList" v-bind:key="item._id">
		<div v-if="itemid === item._id">
			<div class="container">
				<div class="medium-card">
					<div class="card-header">
						<div class="card-header-title">
							<header class="item-title">{{item.itemTitle}}</header>
							<router-link :to="'/user/' + item.creatorName">
								<div class="card-creator">{{item.creatorName}}
									<!-- Sprout -->
									<div v-if="getStatus(item.creatorName).postCount < status.leaf.count" class="fas fa-seedling badge-icon"></div>
									<!-- Leaf -->
									<div v-else-if="getStatus(item.creatorName).postCount < status.tree.count" class="fas fa-leaf badge-icon"></div>
									<!-- Tree -->
									<div v-else-if="getStatus(item.creatorName).postCount >= status.tree.count" class="fas fa-tree badge-icon"></div>
								</div>
							</router-link>
						</div>
						<div class="timestamp">
							<time>{{formatDate(item.createdAt)}}</time>
						</div>
					</div>

					<div class="card-image">
						<div v-for="(image, index) in item.images" v-bind:key="index">
							<figure class="image is-4by3">
									<img :src="'/api' + '/items/' + image">
							</figure>
						</div>
					</div>

					<div class="card-content">
						<div class="material-tags">
							<a class="tag tag-spacing" v-for="(material, index) in item.material" :key="index">{{material}}</a>
						</div>
						<p class="item-description">{{item.description}}</p>
					</div>

					<div class="button-menu">
						<button @click="likeItem" class="button-light spacing-not-last-child" v-bind:class="{clicked:isLiked}">
							<span class="material-icons md-18 button-icon">thumb_up</span>
							<span v-if="!isLiked">Like</span>
							<span v-else-if="isLiked">Liked</span>
						</button>

						<button @click="bookmarkItem" class="button-light spacing-not-last-child" v-bind:class="{clicked:isBookmarked}">
							<span class="material-icons md-18 button-icon">bookmark</span>
							<span v-if="!isBookmarked">Bookmark</span>
							<span v-else-if="isBookmarked">Bookmarked</span>
						</button>

						<div id="social-share" class="right-align">
							<button class="button-light spacing-not-last-child button-circle social">
								<a :href="fbUrl"
								target="_blank" title="Share on Facebook" @click="share(item.itemTitle)">
									<span class="fab fa-facebook-f"></span>
								</a>
							</button>

							<button class="button-light button-circle social">
								<a :href="twUrl"
								target="_blank" title="Share on Twitter" @click="share(item.itemTitle)">
									<span class="fab fa-twitter"></span>
								</a>
							</button>
						</div>
					</div>
						<comment :currentItemId="item._id"></comment>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import apiService from '@/apiService'
import CommentsBox from './CommentsBox'
import moment from 'moment-timezone'
import PageLoader from '@/components/AnimatedLoaders/PageLoader'

export default {
	name: 'item-profile',
	components: {
		comment: CommentsBox,
		loader: PageLoader
	},
	data () {
		return {
			itemid: this.$route.params.itemid,
			itemsList: [],
			comments: [],
			loaded: false,
			loadingLikes: false,
			loadingBookmarks: false,
			fbUrl: '',
			twUrl: '',
			likes: [],
			bookmarks: [],
			likesClient: 0,
			sprout: 0,
			status: {
				sprout: {title: "Sprout", count: 0},
				leaf: {title: "Leaf", count: 5},
				tree: {title: "Tree", count: 10}
			}
		}
	},
	mounted() {
		apiService.getItemProfile()
			.then((data) => {
				this.loaded = true
				this.itemsList = data
				this.getLikes()
				this.getBookmarks()

		})
	},
	methods: {
		formatDate(date) {
			return moment(date).tz("Australia/Melbourne").fromNow()
		},
		share(itemTitle) {
			var url = encodeURIComponent(location.href)
			//facebook
			this.fbUrl = 'https://www.facebook.com/sharer/sharer.php?u=#' + url
			//twitter
			const txt = itemTitle
			var hashtags ='reformlab, upcycle'
			this.twUrl = 'https://twitter.com/intent/tweet?text=' + txt + '&hashtags=' + hashtags + '&url=' + url
		},
		getLikes(){
			apiService.getLikes(this.currentUser._id).then((res) => {
				this.likes = res.data
				this.loadingLikes = false
				this.countLikes
			})
		},
		likeItem(){
			if (!this.isLoggedIn){
				this.$router.push(this.$route.query.redirect || '/login')
			}
			else {
				if (!this.isLiked) {
					this.likesClient++
					this.loadingLikes = true
					apiService.postLike(this.itemid, this.currentUser.username).then(() => {
						this.getLikes()
					})
				}
				else if (this.isLiked) {
					this.likesClient--
					this.loadingLikes = true
					apiService.deleteLike(this.currentUser.username, this.itemid).then(()=>{
						this.getLikes()
					})
				}
			}
		},
		getBookmarks(){
			apiService.getBookmarks(this.currentUser._id)
			.then((data) => {
				this.bookmarks = data.data
				this.loadingBookmarks = false
			})
		},
		bookmarkItem(){
			if (!this.isLoggedIn){
				this.$router.push(this.$route.query.redirect || '/login')
			}
			else {
				if (!this.isBookmarked) {
					this.loadingBookmarks = true
					apiService.postBookmark(this.itemid, this.currentUser.username).then(() => {
						this.getBookmarks()
					})
				}
				else if (this.isBookmarked) {
					this.loadingBookmarks = true
					apiService.deleteBookmark(this.currentUser.username, this.itemid).then(()=>{
						this.getBookmarks()
					})
				}
			}
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
		isBookmarked(){
			return this.bookmarks.includes(this.itemid)
		},
		isLiked() {
			return this.likes.includes(this.itemid)
		},
		isLoggedIn(){
			return this.$store.getters.isLoggedIn
		}
	}
}
</script>

<style lang="scss">
@import "./ItemProfile.scss";
@import "../../scss/base.scss";
@import "@/components/ItemCard/ItemCard.scss";
@import "@/scss/_forms.scss";
</style>
