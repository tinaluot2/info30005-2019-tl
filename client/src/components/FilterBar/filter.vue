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
                        <label class="checkbox">
                            <input type="checkbox" name="paper">
                            Paper
                        </label>

                        <label class="checkbox" name="glass">
                            <input type="checkbox">
                            Glass
                        </label>

                        <label class="checkbox" name="textiles">
                            <input type="checkbox">
                            Textiles
                        </label>

                        <label class="checkbox" name="plastic">
                            <input type="checkbox">
                            Plastic
                        </label>

                        <label class="checkbox" name="metal">
                            <input type="checkbox">
                            Aluminium
                        </label>
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
    @import "../../scss/_banner.scss";
    @import "filter.scss";
</style>

