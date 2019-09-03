<template>
  <div class="about">
    <van-nav-bar
      title="关于我们"
    />
    <div class="container"></div>
  </div>
</template>
<script>
import { NavBar } from 'vant'
export default {
  name: 'about',
  components: {
    [NavBar.name]: NavBar
  },
  data() {
    return {
      // src: require('@/common/images/about.jpg')
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>
<style lang="stylus">
  .about
    .container
      width 100%
      height 100vh
      background url('~@/common/images/about.jpg') no-repeat
      background-size cover
</style>
