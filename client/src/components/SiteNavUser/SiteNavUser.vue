<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="container">
			<div class="navbar-brand">
				<div class="logotype">Reform.</div>
				<div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div class="navbar-menu" :class="{ 'is-active': showNav }">
				<div class="navbar-end">
					<a class="navbar-item">Discover</a>
					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link">You</a>
						<div class="navbar-dropdown">
							<a class="navbar-item" href="#user">My Profile</a>
							<a class="navbar-item" href="#settings">Account Settings</a>
							<a class="navbar-item" href="#lists">Lists</a>
							<hr class="navbar-divider">
							<a class="navbar-item" href="#logout">Sign Out</a>
						</div>
					</div>
					<a class="navbar-item button-no-background" href="#create"><button class="button-dark">New Project</button></a>
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
@import "@/scss/_navbar.scss";
</style>

