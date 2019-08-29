<template>
  <div>
    <van-nav-bar
      title="关于我们"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </div>
</template>
<script>
import { NavBar, Search } from 'vant'
export default {
  name: 'about',
  components: {
    [NavBar.name]: NavBar,
    [Search.name]: Search
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>
