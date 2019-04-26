<template>
    <div class="profile-box">
        <span class="edit-icon-wrapper">
            <i class="material-icons md-18">edit</i>
        </span>
        <img class="profile-img" src="https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg">
        <h1 class="username">mariniida</h1>
        <div class="bio">
            <h3>About</h3>
            <p class="description">Reducer. Reuser. Reformer.</p>
        </div>

        <div class="achievement">
            <h3>Achievements</h3>
            0
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileBox',
    data () {
    }
}
</script>

<style scoped lang="scss">
@import "./ProfileBox.scss";
</style>

