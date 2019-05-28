<template>
	<div class="background nav-spacing">
		<div class="animation-wrapper" v-if="loading">
			<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
		<div class="container">
			<div class="white-card-bg">
				<h1 class="page-header"><span class="logotype">Reform </span>Leaderboard</h1>

				<h2><i class="fab fa-pagelines"></i>Most passionate reformers.</h2>
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

				<h2><i class="fab fa-pagelines"></i>Popular reform projects.</h2>
				<table id="leaderboard">
					<tr>
						<th>Rank</th>
						<th>Reform Project</th>
						<th>Reformer</th>
						<th># of Likes</th>
					</tr>

					<tr v-for= " (items, index) in sortByLikes.slice(0, 5)" v-bind:key="index">
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
</template>

<script>
    import apiService from '@/apiService'

    export default {
			name: 'LeaderBoard',
			data() {
				return {
					usersList: [],
					itemsList: [],
					loading: true,
				}
			},
			mounted() {
				apiService.getUserProfile().then((data) => {
					this.loading = false
					this.usersList = data
				});
				apiService.getItemProfile().then((data) => {
					this.loading = false
					this.itemsList = data
				});
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
				}
			},
			computed: {
				sortByProjects(){
					//sort in descending order by grouping by number of projects by a user
					const groupedByCreator = this.groupBy(this.itemsList, "creatorName");
					groupedByCreator.sort((a, b) => b.length - a.length);
					return(groupedByCreator);
				},
				sortByLikes(){
					let items = this.itemsList
					items.sort((a, b) => b.likeCount - a.likeCount);
					return(items);

				}
			}
    }
</script>

<style scoped lang="scss">
	@import "./LeaderBoard.scss";
</style>