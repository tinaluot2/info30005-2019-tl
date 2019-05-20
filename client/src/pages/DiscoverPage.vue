<template>
<div>
	<div class="animation-wrapper" v-if="!loaded">
		<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	</div>
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

export default {
	name: 'DiscoverPage',
		components: {
			DiscoverBanner,
			ItemDisplayGrid,
			SearchBar,
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

