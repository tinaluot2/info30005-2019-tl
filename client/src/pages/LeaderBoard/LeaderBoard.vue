<template>
	<div class="background nav-spacing">
		<div class="container">
			<div class="white-card-bg">
				<h1 class="page-header">Leaderboard</h1>
				<h2 class="form-label"><i class="fab fa-pagelines"></i>Users with the most number of projects</h2>
				<table id="leaderboard">
					<tr>
						<th>Rank</th>
						<th>Reformer</th>
						<th># of Projects</th>
					</tr>

					<tr v-for="(rank, index) in usersList.slice(0, 5)" v-bind:key="index">
						<td>{{index+1}}</td>
						<td>
							<router-link :to="'/user/' + rank.rankedUser">
								<figure class="image is-48x48 is-rounded "><img class=" is-rounded" src="https://i2.wp.com/fosteredmedia.com/wp-content/uploads/2018/07/female-placeholder.jpg?fit=1024%2C1024&ssl=" alt="Smol_Dog"></figure>
								{{rank.rankedUser}}
							</router-link>
						</td>
						<td>{{rank.postCount}} projects</td>
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
					// rankingList:{
					// 	rankedUser:'',
					// 	postCount:''
					// }
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
					this.displayLeaderboard()
				});
				// this.userPosts();
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
				displayLeaderboard(){
					const groupedByCreator = this.groupBy(this.itemsList, "creatorName");
					groupedByCreator.sort((a, b) => a.length - b.length);
					console.log();
				}
			},
			computed: {

			}
    }
</script>

<style scoped lang="scss">
	@import "./LeaderBoard.scss";
</style>