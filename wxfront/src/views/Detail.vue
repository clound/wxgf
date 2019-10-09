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
      <kong v-else title="空空如也~~"></kong>
    </div>
    <div style="text-align: center; padding: 10px 0;" v-show="show">
      <van-loading size="24px">加载中...</van-loading>
    </div>
  </div>
</template>
<script>
import kong from '@/components/kong/kong'
import { NavBar, Panel, Loading } from 'vant'
import { getdetailList } from '@/api/detail'

export default {
  name: 'detail',
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Loading.name]: Loading,
    kong: kong
  },
  data() {
    return {
      show: false,
      expressNo: '',
      lists: []
    }
  },
  created () {
    // window.addEventListener('scroll', throttle(this.onScroll))
    this._getLists()
  },
  methods: {
    _getLists() {
      let { wechatid, expressno } = this.$route.query
      if (!expressno) return
      this.show = true
      getdetailList({ wechatid, expressno }).then(res => {
        this.show = false
        let data = res.data
        if (!data.code) {
          this.lists = data.data || []
        }
      }).catch(e => {
        this.show = false
        this.$toast.fail('查询数据失败')
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
