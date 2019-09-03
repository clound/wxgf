<template>
  <div>
    <div class="search-bar">
      <van-nav-bar
        title="物流查询"
      />
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="mt120">
      <van-panel
        v-for="(item, index) in lists"
        :key="index"
        :title="'运单编号：'+item.trackNum"
        desc=""
        status="运输中"
        class="mb10">
        <div class="p20">{{item.detail}}</div>
      </van-panel>
    </div>
  </div>
</template>
<script>
import { NavBar, Search, Panel } from 'vant'
import { search } from '@/api/search'
export default {
  name: 'about',
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Search.name]: Search
  },
  data () {
    return {
      value: '',
      lists: []
    }
  },
  methods: {
    onSearch() {
      console.log(this.value)
      search({ expressNo: this.value }).then(res => {
        let data = res.data
        this.lists = data.data || []
      })
    }
  }
}
</script>
<style lang="stylus">
  .search-bar
    position fixed
    top 0
    width 100%
    z-index 10
</style>
