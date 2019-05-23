<template>
	<div class="background nav-spacing">
		<div class="container">

			<div class="white-card-bg">
				<h1 class="page-header">Leaderboard</h1>
				<h2 class="form-label"><i class="fab fa-pagelines"></i>Users with the most number of projects</h2>

				<ol class="user-box">
					<li v-for="user in usersList.slice(0, 5)" v-bind:key="user._id">
						<div class="user-info">
							<div class="contents">
								<router-link :to="'/user/' + user.username">
									<figure class="image is-48x48 is-rounded "><img class=" is-rounded" src="https://i2.wp.com/fosteredmedia.com/wp-content/uploads/2018/07/female-placeholder.jpg?fit=1024%2C1024&ssl=" alt="Smol_Dog"></figure>
									<label >{{user.username}}</label>
								</router-link>
							</div>
							<label class="contents" >{{userPosts(itemsList,user.username).length}} projects</label>
						</div>
					</li>
				</ol>

				<table id="leaderboard">
					<tr>
						<th>Rank</th>
						<th>Reformer</th>
						<th># of Projects</th>
					</tr>
					<tr v-for="(user, index) in usersList.slice(0, 10)" v-bind:key="index">
						<td>{{index+1}}</td>
						<td>
							<router-link :to="'/user/' + user.username">{{user.username}}</router-link>
						</td>
						<td>{{userPosts(itemsList,user.username).length}}</td>
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
					rankList:[],
				}
			},
			mounted() {
				apiService.getUserProfile().then((data) => {
					this.loading = false
					this.usersList = data
				})
				apiService.getItemProfile().then((data) => {
					this.loading = false
					this.itemsList = data
				})
			},
			methods:{
				userPosts(itemsList, user){
					return itemsList.filter(function(item){
							return item.creatorName === user
					})
				}
			}
    }
</script>

<style scoped lang="scss">
	@import "./LeaderBoard.scss";
</style>