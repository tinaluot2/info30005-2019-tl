<template>
    <div class="profile-box">
        <span class="edit-icon-wrapper">
            <i class="material-icons md-18">edit</i>
        </span>
        <img class="profile-img" :src="profile.profilePic">
        <h1 class="username">{{profile.username}}</h1>
        <div class="bio">
            <h3>About</h3>
            <p class="bio-description">{{profile.description}}</p>
        </div>
        <div class="achievement">
            <h3>Achievements</h3>
            {{profile.achievements}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileBox',
    props: {
        profile: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
@import "./ProfileBox.scss";
</style>

