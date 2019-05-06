<template>
    <div class="filterbar">
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Materials</span>
                    <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                    <div class="checkboxes">

                        <input class="checkbox" type="checkbox" id="Paper" value="Paper">
                        <label for="Paper">Paper</label>

                        <input class="checkbox" type="checkbox" id="Glass" value="Glass">
                        <label for="Glass">Glass</label>

                        <input class="checkbox" type="checkbox" id="Textiles" value="Textiles">
                        <label for="Textiles">Textiles</label>

                        <input class="checkbox" type="checkbox" id="Plastic" value="Plastic">
                        <label for="Plastic">Plastic</label>

                        <input class="checkbox" type="checkbox" id="Aluminium" value="Aluminium">
                        <label for="Aluminium">Aluminium</label>
                    </div>

                    <div class="apply">
                        <button class="button-light">Apply</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'FilterBar'
    }
</script>

<style scoped lang="scss">
    @import "./FilterBar.scss";
</style>

