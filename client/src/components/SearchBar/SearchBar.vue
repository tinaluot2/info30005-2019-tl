<template>
    <div class="field is-grouped">
        <p class="control has-icons-left has-icons-right is-expanded">
            <input class="input" type="search" placeholder="Search">
            <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
            </span>
        </p>
        <p class="form">
            <a class="button">
                Search
            </a>
        </p>
    </div>

</template>
<!--If icon folder was in this branch, replace
<i class="fas fa-search"></i> with
     <icon-base icon-name="search"><icon-search /></icon-base>

     and in vue

     <script>
import IconBase from './IconBase.vue'
import IconSearch from './icons/IconSearch.vue'

export default {
  components: {
    IconBase,
    IconSearch,
    }
    }
   </script>
     -->

<script>
    export default {
        name: 'SearchBar'
    }
</script>

<style scoped lang="scss">
    @import "../../scss/_banner.scss";
    @import "SearchBar.scss";
</style>

