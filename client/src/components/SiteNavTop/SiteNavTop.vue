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
				<a class="navbar-item">About</a>
				<a class="navbar-item">Misson</a>
				<a class="navbar-item">
						<button class="button-light spacing-not-last-child">Log In</button>
						<button class="button-dark">Sign Up</button>
				</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'SiteNavTop',
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

