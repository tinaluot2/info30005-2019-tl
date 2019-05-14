<template>
	<div>
		<LandingHero />
		<Mission />
	</div>

</template>

<script>
import LandingHero from '@/components/LandingHero/LandingHero.vue'
import Mission from '@/components/LandingHero/mission.vue'

export default {
	name: 'LandingPage',
		components: {
			LandingHero,
			Mission
		},
		data () {
			return{
				title: 'Welcome to Reform'
			}
		}
}
</script>

<style scoped lang="scss">

</style>
