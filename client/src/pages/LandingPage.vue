<template>
<div>
	<loader v-if="!loaded"/>
	<div v-show="loaded">
		<LandingHero />
		<Mission @loaded="toggleLoaded"/>
	</div>
</div>
</template>

<script>
import LandingHero from '@/components/LandingHero/LandingHero.vue'
import Mission from '@/components/LandingHero/mission.vue'
import PageLoader from '@/components/AnimatedLoaders/PageLoader'

export default {
	name: 'LandingPage',
		components: {
			LandingHero,
			Mission,
			'loader': PageLoader
		},
		data () {
			return{
				loaded: false
			}
		},
		methods: {
			toggleLoaded(){this.loaded = true}
		}
}
</script>

<style scoped lang="scss">

</style>
