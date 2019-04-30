<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="container">
			<div class="navbar-brand">
				<router-link to="/" class="logotype">Reform.</router-link>
				<div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div class="navbar-menu" :class="{ 'is-active': showNav }">
				<div class="navbar-end">
					<router-link to="/discover" class="navbar-item">Discover</router-link>
					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link">You</a>
						<div class="navbar-dropdown">
							<router-link to="/user"
                                 class="navbar-item">My Profile</router-link>
							<router-link to="/settings"
                                 class="navbar-item">Account Settings</router-link>
							<router-link to="/lists"
                                 class="navbar-item">Saved Lists</router-link>
							<hr class="navbar-divider">
							<a class="navbar-item" href="#logout">Sign Out</a>
						</div>
					</div>
					<router-link to="/create" class="navbar-item button-no-background"><button class="button-dark">New Project</button></router-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'SiteNavUser',
	data: function() {
			return {
				showNav: false
			}
		}
}
</script>

<style scoped lang="scss">
@import "../../scss/_navbar.scss";
</style>

