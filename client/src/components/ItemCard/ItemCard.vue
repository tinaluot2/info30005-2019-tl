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
				<div class="icon-button-wrapper like-button"
				@click="likeItem()"
				v-bind:class="{liked:item.isLiked}">
						<i class="material-icons md-16">thumb_up</i>
				</div>
				<div class="like-count">
					{{item.likeCount}}
				</div>
			</div>
			<div class="card-footer-item">
				<span class="icon-button-wrapper bookmark-button" @click="bookmarkItem()"
			v-bind:class="{bookmarked:isBookmarked}">
					<i class="material-icons md-16">bookmark</i>
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
			bookmarks:[]
		}
	},
	props: {
		item: {
				type: Object,
				required: true
		},
	},
	methods: {
		likeItem() {
			if (!this.isLoggedIn){
				this.$router.push(this.$route.query.redirect || '/login')
			}
			else {
				this.item.isLiked = !this.item.isLiked;
				if (!this.item.isLiked) {
						this.item.likeCount--;
				}
				else {
						this.item.likeCount++;
				}
			}
		},
		bookmarkItem() {
			if (!this.isLoggedIn){
				this.$router.push(this.$route.query.redirect || '/login')
			}
			else {
				this.item.isBookmarked = !this.item.isBookmarked
				apiService.postBookmark(this.item._id, this.currentUser.username)
			}
		}
	},
	mounted() {
		apiService.getBookmarks(this.currentUser._id)
			.then((data) => {
				this.bookmarks = data.data
			})
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
		}
	}
}
</script>

<style lang="scss">
@import "./ItemCard.scss";
</style>
