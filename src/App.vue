<template>
  <LNB/>
  <RNB/>
  <TheHeader />
  <Billboard /> 
  <GlobalBanner />
  <Direct />
</template>

<script>
import LNB from '~/components/LNB'
import RNB from '~/components/RNB'
import TheHeader from '~/components/TheHeader'
import Billboard from '~/components/Billboard'
import GlobalBanner from '~/components/GlobalBanner'
import Direct from '~/components/Direct'

export default {
  components: {
    LNB, 
    RNB,
    TheHeader,
    Billboard,
    GlobalBanner,
    Direct,
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
</style>