<template>
	<div class="small-card">
		<div class="card-image">
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
			<router-link v-bind:to="'/item/' + item._id"><a class="item-title">{{item.itemTitle}}</a></router-link>
			<router-link v-bind:to="'/user/' + item.creatorName"><a class="item-creator">{{item.creatorName}}</a></router-link>
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
			v-bind:class="{bookmarked:item.isBookmarked}">
					<i class="material-icons md-16">bookmark</i>
				</span>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'ItemCard',
	data () {
		return {
		}
	},
	props: {
			item: {
					type: Object,
					required: true
			}
	},
	methods: {
		likeItem() {
			this.item.isLiked = !this.item.isLiked;
			if (!this.item.isLiked) {
					this.item.likeCount--;
			}
			else {
					this.item.likeCount++;
			}

		},
		bookmarkItem() {
			this.item.isBookmarked = !this.item.isBookmarked
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
@import "./ItemCard.scss";
</style>
