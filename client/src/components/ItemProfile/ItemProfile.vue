<template>
<div class="background nav-spacing">
	<div class="animation-wrapper" v-if="!loaded">
		<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	</div>
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
						<p>{{item.description}}</p>
					</div>

					<div class="button-menu">
						<button class="button-light spacing-not-last-child">
							<span>Like</span>
						</button>

						<button class="button-light spacing-not-last-child">
							<span>Bookmark</span>
						</button>
						<a class="icon-button-wrapper" :href="fbUrl"
							target="_blank" title="Share on Facebook" @click="share(item.itemTitle)">
							<i class="fab fa-facebook-square"></i>
						</a>

						<a class="icon-button-wrapper" :href="twUrl"
							target="_blank" title="Share on Twitter" @click="share(item.itemTitle)">
							<i class="fab fa-twitter-square"></i>
						</a>
					</div>

					<article class="media">
						<figure class="media-left">
							<p class="image is-64x64">
								<img class="is-rounded" src="https://cdn0.iconfinder.com/data/icons/celebration-and-party-2-1/97/68-512.png">
							</p>
						</figure>
						<div class="media-content">
							<div class="field">
									<p class="control">
										<textarea class="textarea" placeholder="Add a comment..."></textarea>
									</p>
							</div>
							<button class="button-dark">Post comment</button>
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import apiService from '@/apiService'
import moment from 'moment'
export default {
	name: 'item-profile',
	components:{
	},
	data (){
		return {
			itemid: this.$route.params.itemid,
			itemsList:[],
			loaded: false,
			fbUrl: '',
			twUrl:'',
			}
	},
	mounted() {
		apiService.getItemProfile()
			.then((data) => {
				this.loaded = true
				this.itemsList = data
		})
	},
	methods: {
		formatDate(date) {
			return moment(date).startOf('day').fromNow()
		},
		share(itemTitle) {
			var url = encodeURIComponent(location.href)
			//facebook
			this.fbUrl = 'https://www.facebook.com/sharer/sharer.php?u=#' + url
			//twitter
			const txt = itemTitle
			var hashtags ='reformlab, upcycle'
			this.twUrl = 'https://twitter.com/intent/tweet?text=' + txt + '&hashtags=' + hashtags + '&url=' + url
		}
	}
}
</script>

<style lang="scss">
@import "./ItemProfile.scss";
@import "@/components/ItemCard/ItemCard.scss";
</style>
