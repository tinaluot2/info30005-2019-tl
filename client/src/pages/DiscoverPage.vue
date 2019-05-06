<template>
<div>
    <DiscoverBanner />
    <div class="bar">
        <div><FilterBar /></div>
        <div><SearchBar /></div>
    </div>
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
    .bar{
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding-top:5px;
        padding-bottom:5px;
    }

</style>

