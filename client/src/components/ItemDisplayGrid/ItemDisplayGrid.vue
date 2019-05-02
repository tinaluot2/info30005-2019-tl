<template>
    <div class="background">
        <div class="container">
            <div class="grid-container site-wide">
                <item-card v-for="item in items" v-bind:key="item.itemID" :item="item">
                </item-card>
            </div>
        </div>
    </div>
</template>

<script>

import ItemCard from '@/components/ItemCard/ItemCard';
import axios from 'axios';

export default {
    name: 'item-display-grid',
    components: {
        'item-card': ItemCard
    },
    mounted() {
      axios.get("http://localhost:3000/items").then((response) => {
        this.items = response;
      })
    },
    data() {
        return {
            items: []
        }
    }
}
</script>

<style scoped lang="scss">
    @import "./ItemDisplayGrid.scss";
</style>
