<template>
  <div class="navbar">
    <div class="wrapper">
      <div class="logotype">Reform.</div>
        <nav-links>
          <a href="#register"><button class="button-light">Register</button></a>
          <a href="#login"><button class="button-dark">Sign In</button></a>
        </nav-links>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteNavTop'
}
</script>

<style scoped lang="scss">
@import "./SiteNavTop.scss";
</style>

