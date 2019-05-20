<template>
<div>
	<DiscoverBanner />
	<SearchBar />
	<ItemDisplayGrid />
</div>
</template>

<script>
import DiscoverBanner from '@/components/DiscoverBanner/DiscoverBanner'
import ItemDisplayGrid from '@/components/ItemDisplayGrid/ItemDisplayGrid'
import SearchBar from "@/components/SearchBar/SearchBar";

export default {
	name: 'DiscoverPage',
		components: {
			DiscoverBanner,
				ItemDisplayGrid,
				SearchBar,
		},
		data () {
			return{
			}
		}
}
</script>

<style scoped lang="scss">

</style>

