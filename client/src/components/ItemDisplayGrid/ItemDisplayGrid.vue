<template>
    <div id="display-grid">
        <div class="container">
            <ItemCard />
        </div>
    </div>
</template>

<script>
import ItemCard from '@/components/ItemCard/ItemCard'

export default {
    name: 'ItemDisplayGrid',
    components: {
		ItemCard
    }
}
</script>

<style scoped lang="scss">
    @import "./ItemDisplayGrid.scss";
</style>

