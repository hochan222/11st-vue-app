<template>
  <header>
    <div class="inner">
      <div 
        class="open-nav-drawer"
        @click="onNav"
      >

      </div>
      <a 
        href="/" 
        class="logo"
      >
      </a>
      <div class="search">
        <input 
          type="text" 
          v-model="searchText"
          placeholder="찾고 싶은 상품을 검색해 보세요!" 
          @keypress.enter="search" 
        />
        <div 
          class="search__icon"
          @click="search"
        >

        </div>
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
      searchText: ''
    }
  },
  computed: {

  },
  methods: {
    onNav() {
      this.$store.dispatch('navigation/onNav')
    },
    search() {

    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  &.fixed {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 97;
    box-shadow: 0 2px 8px rgba(#000, .07);
    .inner {
      height: 80px;
    }
  } // header fixed end
  .inner {
    height: 120px;
    display: flex;
    align-items: center;
  } // inner end
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
  } // opend-nav-drawer end
  .logo {
    width: 94px;
    height: 40px;
    margin: 0 24px;
    background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
    background-position: -162px 0;
    background-size: 363px;
    cursor: pointer;
  } // logo end
  .search {
    position: relative;
    input {
      width: 500px;
      height: 50px;
      padding: 0 27px;
      border: 1px solid #ddd;
      border-radius: 25px;
      box-sizing: border-box;
      background-color: #fafafa;
      outline: none;
      font-size: 18px;
      font-family: 'Noto Sans KR', sans-serif;
      &::placeholder {
        color: #bbb;
      }
    }
    &__icon {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
      background-position: -162px -45px;
      background-size: 363px;
    }
  } // search end
}
</style>
