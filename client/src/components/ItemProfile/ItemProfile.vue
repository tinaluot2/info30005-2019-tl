<template>
<div class="background nav-spacing">
	<loader v-if="!loaded"/>
	<div v-for="item in itemsList" v-bind:key="item._id">
		<div v-if="itemid == item._id">
			<div class="container">
				<div class="medium-card">
					<div class="card-header">
						<div class="card-header-icon">
							<router-link :to="'/user/' + item.creatorName">
								<figure class="image is-48x48 is-rounded">
								<img class="is-rounded" src="https://i2.wp.com/fosteredmedia.com/wp-content/uploads/2018/07/female-placeholder.jpg?fit=1024%2C1024&ssl=" alt="Smol_Dog">
								</figure>
							</router-link>
						</div>
						<div class="card-header-title">
							<header class="item-title">{{item.itemTitle}}</header>
							<router-link :to="'/user/' + item.creatorName">
								<div class="card-creator">{{item.creatorName}}</div>
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
							Like
						</button>

						<button class="button-light spacing-not-last-child">
							<span class="material-icons md-18 button-icon">bookmark</span>
							Bookmark
						</button>

						<div id="social-share" class="right-align">
							<button @click="likeItem" class="button-light spacing-not-last-child button-circle social">
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
	data (){
		return {
			itemid: this.$route.params.itemid,
			itemsList:[],
			comments:[],
			loaded: false,
			loadingLikes: false,
			fbUrl: '',
			twUrl:'',
			likes: [],
			likesClient: 0
			}
	},
	mounted() {
		apiService.getItemProfile()
			.then((data) => {
				this.loaded = true
				this.itemsList = data
				this.getLikes()

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
						console.log('liked')
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
		}
	},
	computed: {
		currentUser() {
      return this.$store.state.currentUser
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
@import "@/components/ItemCard/ItemCard.scss";
@import "@/scss/_forms.scss";
</style>
