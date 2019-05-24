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

					<tr v-for="(rank, index) in rankingList.slice(0, 10)" v-bind:key="index">
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
					rankingList:{
						rankedUser:'',
						postCount:''
					}
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
				this.userPosts();

			},
			methods:{
				userPosts(usersList, itemsList){
					let i=0;

					for(i=0; i < usersList; i++) {
						this.rankingList[i].rankedUser=usersList[i].username
						this.rankingList[i].postCount=itemsList.filter(function (item) {
							return item.creatorName === usersList[i].username}).length

					}
				}
			}
    }
</script>

<style scoped lang="scss">
	@import "./LeaderBoard.scss";
</style>