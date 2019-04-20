<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
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
						<a class="navbar-item">My Profile</a>
						<a class="navbar-item">Account Settings</a>
						<a class="navbar-item">Wishlist</a>
					</div>
				</div>
				<a class="navbar-item"><button class="button-dark">Create</button></a>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'SiteNavTopUser',
	data: function() {
			return {
				showNav: false
			}
		}
}
</script>

<style scoped lang="scss">
@import "SiteNavTopUser.scss";
</style>

