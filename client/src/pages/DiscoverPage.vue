<template>
<div>
    <DiscoverBanner />
    <ItemDisplayGrid />
</div>
</template>

<script>
import DiscoverBanner from '@/components/DiscoverBanner/DiscoverBanner'
import ItemDisplayGrid from '@/components/ItemDisplayGrid/ItemDisplayGrid'

export default {
	name: 'DiscoverPage',
		components: {
			DiscoverBanner, ItemDisplayGrid
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

