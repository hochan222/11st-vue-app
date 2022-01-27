<template>
  <header>
    <div class="inner">
      <div 
        class="open-nav-drawer"
        @click="onNav"
      >

      </div>
      <div class="search">

      </div>
      <div class="ranking">

      </div>
      <div class="user-menu">

      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  computed: {

  },
  methods: {
    onNav() {
      this.$store.dispatch('navigation/onNav')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  .open-nav-drawer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow:
      0 2px 6px rgba(#000,.06),
      0 0 1px rgba(#000,.4);
    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 36px;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
      background-position: -302px -203px;
      background-size: 363px;
    }
  }
}
</style>
