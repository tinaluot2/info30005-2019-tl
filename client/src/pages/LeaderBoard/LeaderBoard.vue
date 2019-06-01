<template>
	<div class="background nav-spacing">
		<loader v-if="loading"></loader>
		<div class="container">
			<div class="white-card-bg" v-if="!loading">
				<h1 class="page-header"><span class="logotype">Reform </span>Leaderboard</h1>
				<div class="two-column leaderboard">
					<div id="most-projects" class="column">
						<h2 class="leaderboard-title"><i class="fab fa-pagelines"></i>Most Passionate Reformers</h2>
						<table id="leaderboard">
							<tr>
								<th>Rank</th>
								<th>Reformer</th>
								<th># of Creations</th>
							</tr>

							<tr v-for="(rank, index) in sortByProjects.slice(0, 5)" v-bind:key="index">
								<td>{{index + 1}}</td>
								<td>
									<router-link :to="'/user/' + rank[0].creatorName">
										{{rank[0].creatorName}}
									</router-link>
								</td>
								<td>{{rank.length}}</td>
							</tr>

						</table>
					</div>
					<div id="most-likes" class="column">
						<h2 class="leaderboard-title"><i class="fab fa-pagelines"></i>Most Popular Projects</h2>
						<table id="leaderboard">
							<tr>
								<th>Rank</th>
								<th>Project</th>
								<th>Reformer</th>
								<th># of Likes</th>
							</tr>

							<tr v-for="(items, index) in sortByLikes.slice(0, 5)" v-bind:key="index">
								<td>{{index + 1}}</td>
								<td>
									<router-link :to="'/item/' + items._id">
										{{items.itemTitle}}
									</router-link>
								</td>
								<td>
									<router-link :to="'/user/' + items.creatorName">
										{{items.creatorName}}
									</router-link>
								</td>
								<td>{{items.likeCount}}</td>
							</tr>

						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import apiService from '@/apiService'
import PageLoader from '@/components/AnimatedLoaders/PageLoader'

export default {
	name: 'LeaderBoard',
	components: {
		'loader': PageLoader
	},
	data() {
		return {
			usersList: [],
			itemsList: [],
			loading: true
		}
	},
	mounted() {
		apiService.getUserProfile().then((data) => {
			this.loading = false
			this.usersList = data
			apiService.getItemProfile().then((data) => {
				this.loading = false
				this.itemsList = data
				this.addLikes()
			})
		})
		;
	},
	methods:{
		//sourced from https://stackoverflow.com/questions/21776389/javascript-object-grouping
		groupBy(collection, property) {
			let i = 0, val, index,
			values = [], result = [];
				for (; i < collection.length; i++) {
					val = collection[i][property];
					index = values.indexOf(val);
					if (index > -1)
						result[index].push(collection[i]);
					else {
						values.push(val);
						result.push([collection[i]]);
					}
				}
			return result;
		},
		//add the likes to the likeCount attribute
		addLikes(){
			//convert object to array in format [itemid, likesCount]
			let countLikes = Object.entries(this.countLikes)
			for (let item of this.itemsList) {
				for (let likes of countLikes){
					//if the item id matches the itemid of countLikes
					if (item._id == likes[0]) {
						//add the likesCount to the item's likeCount
						item.likeCount += likes[1]
					}
				}
			}
		}
	},
	computed: {
		//sort in descending order by grouping by number of projects by a user
		sortByProjects(){
			const groupedByCreator = this.groupBy(this.itemsList, "creatorName");
			groupedByCreator.sort((a, b) => b.length - a.length);
			return(groupedByCreator);
		},
		//sort in descending order by likesCount
		sortByLikes(){
			return(this.itemsList.sort((a, b) => b.likeCount - a.likeCount))
		},
		//extract users with items in their likes array
		usersWithLikes(){
			return this.usersList.filter(user => {
				return user.likes.length > 0
			})
		},
		//get the likes array for users with likes
		extractLikes(){
			for (var item of this.itemsList) {
				return this.usersWithLikes.map(user => {
					return user.likes
				})
			}
		},
		//flatten the array to count the occurence of each item
		countLikes(){
			var mergedLikes = [].concat.apply([], this.extractLikes)
			var likeCount = {}
			mergedLikes.forEach(item => { likeCount[item] = (likeCount[item] || 0 ) + 1; })
			return likeCount
		}
	}
}
</script>

<style lang="scss">
	@import "./LeaderBoard.scss";
</style>