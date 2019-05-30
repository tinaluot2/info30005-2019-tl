<template>
<div>
	<loader v-if="!loaded"/>
	<div v-show="loaded">
		<DiscoverBanner />
		<SearchBar />
		<ItemDisplayGrid @loaded="toggleLoaded"/>
	</div>
</div>
</template>

<script>
import DiscoverBanner from '@/components/DiscoverBanner/DiscoverBanner'
import ItemDisplayGrid from '@/components/ItemDisplayGrid/ItemDisplayGrid'
import SearchBar from "@/components/SearchBar/SearchBar";
import { bus } from '@/main'
import PageLoader from '@/components/AnimatedLoaders/PageLoader'

export default {
	name: 'DiscoverPage',
		components: {
			DiscoverBanner,
			ItemDisplayGrid,
			SearchBar,
			'loader': PageLoader
		},
		data() {
			return {
				loaded: false
			}
		},
		methods: {
			toggleLoaded(){this.loaded = true}
		}
}
</script>
<style lang="scss">
</style>