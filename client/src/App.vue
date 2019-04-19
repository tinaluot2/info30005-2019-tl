<template>
  <div>
    <LandingPage />
    <SiteFooter />
  </div>
</template>

<script>
import LandingPage from './pages/LandingPage.vue'
import SiteFooter from './components/SiteFooter/SiteFooter.vue'


export default {
  name: 'app',
  components: {
    LandingPage,
    SiteFooter
  }
}
</script>

<style lang="scss">
@import "./scss/global";
</style>
