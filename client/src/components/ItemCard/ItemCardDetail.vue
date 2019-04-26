<template>
    <div class="grid-container">
        <div class="small-card" v-for="item in items" v-bind:key="item.itemID">
            <div class="card-image">
                <figure class="image is-5by4">
                    <img :src="item.itemImage"/>
                </figure>
            </div>
            <div class="card-content">
                <a class="item-title">{{item.itemTitle}}</a>
                <a class="item-creator">{{item.itemCreator}}</a>
                <a class="item-category">{{item.itemCategory}}</a>
            </div>

            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        <i class="fas fa-star" ></i>
                        ❤ {{item.likeCount}}
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        <i class="fas fa-book"></i>
                        (Bookmark Count)
                    </span>
                </p>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'item-card-detail',
    props: {
        items: {
            itemTitle: {type: String, required: true},
            itemCreator: {type: String, required: true},
            itemImage: {type: String, required: true},
            itemCategory: {type: String, required: true},
            itemID: {type: Number, required: true},
            likeCount: {type: Number, required: true}
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss">
</style>

