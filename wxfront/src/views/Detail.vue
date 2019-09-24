<template>
  <div>
    <div class="detail-bar">
      <van-nav-bar
        title="运单列表"
      />
    </div>
    <div class="mt50">
      <div v-if="lists.length">
        <van-panel
          v-for="(item, index) in lists"
          :key="index"
          :title="'运单编号：'+item.trackNum"
          desc=""
          :status="item.status"
          class="mb10">
          <div class="p20">{{item.detail}}</div>
        </van-panel>
      </div>
    </div>
    <div style="text-align: center; padding: 10px 0;">
      <van-loading size="24px">加载中...</van-loading>
    </div>
  </div>
</template>
<script>
import { NavBar, Panel, Loading } from 'vant'
import { getdetailList } from '@/api/detail'

export default {
  name: 'detail',
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Loading.name]: Loading
  },
  data() {
    return {
      expressNo: '',
      lists: Array.from({ length: 30 }).fill({ detail: '从常州发往镇江的途中',
        status: '运输中',
        trackNum: Math.floor(Math.random() * 100000)
      })
    }
  },
  created () {
    // window.addEventListener('scroll', throttle(this.onScroll))
    this._getLists()
  },
  methods: {
    _getLists() {
      this.show = true
      getdetailList({}).then(res => {
        this.show = false
        let data = res.data
        if (!data.code) {
          this.lists = data.data || []
        }
      })
    },
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>
<style lang="stylus">
  .detail-bar
    position fixed
    top 0
    width 100%
    z-index 10
</style>
