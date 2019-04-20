<template>
  <div>
    <SiteNavTop />
    <LandingPage />
    <SiteFooter />
  </div>
</template>

<script>
import SiteNavTop from '@/components/SiteNavTop/SiteNavTop'
import LandingPage from '@/pages/LandingPage'
import SiteFooter from '@/components/SiteFooter/SiteFooter'

export default {
  name: 'app',
  components: {
    SiteNavTop,
    LandingPage,
    SiteFooter
  }
}
</script>

<style lang="scss">
  @import "./scss/global";
</style>
