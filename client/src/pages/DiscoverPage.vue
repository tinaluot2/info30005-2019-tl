<template>
<div>
    <DiscoverBanner />
    <SearchBar />
    <FilterBar />
    <ItemDisplayGrid />
</div>
</template>

<script>
import DiscoverBanner from '@/components/DiscoverBanner/DiscoverBanner'
import ItemDisplayGrid from '@/components/ItemDisplayGrid/ItemDisplayGrid'
import FilterBar from "@/components/FilterBar/filter";
import SearchBar from "@/components/SearchBar/SearchBar";

export default {
	name: 'DiscoverPage',
		components: {
			DiscoverBanner,
            ItemDisplayGrid,
            SearchBar,
            FilterBar,
		},
		data () {
			return{
				title: 'Discover Ideas'
			}
		}
}
</script>

<style scoped lang="scss">
</style>

