<template>
  <nav class="show">
    <div class="user">
      <a href="#">로그인</a>
      <div class="flex-space"></div>
      <div class="close-nav"></div>
    </div>
    <div class="container"></div>
  </nav>
</template>

<script>
</script>

<style scoped lang="scss">
$NAVIGATION_Z_INDEX: 99;

nav {
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: $NAVIGATION_Z_INDEX;
  background-color: #f6f6f6;
  transition: transform 0.4s;
  transform: translateX(-300px);

  &.show {
    transform: translateX(0);
  }
  .user {
    height: 70px;
    padding: 0 25px;
    background-color: #fff;
    display: flex;
    align-items: center;

    a {
      font-size: 20px;
      font-weight: 700;
      text-decoration: none;
      color: #333;

      &:hover {
        text-decoration: underline;
      }
    }
    .flex-space {
      flex-grow: 1;
    }
    .close-nav {
      width: 36px;
      height: 36px;
      // image sprite 기법
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
      background-position: -261px -203px;
      background-size: 363px;
      cursor: pointer;
    }
  }
}
</style>
