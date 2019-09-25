<template>
  <div>
    <div class="search-bar">
      <van-nav-bar
        title="物流查询"
      />
      <van-search
        v-model="value"
        placeholder="请输入搜索运单编号"
        show-action
        shape="round"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="mt120">
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
      <van-loading size="24px" vertical v-show="show">加载中...</van-loading>
    </div>
  </div>
</template>
<script>
import kong from '@/components/kong/kong'
import { NavBar, Search, Panel, Loading } from 'vant'
import { search } from '@/api/search'
// import { throttle } from '@/libs/tools'
export default {
  name: 'about',
  components: {
    [NavBar.name]: NavBar,
    [Panel.name]: Panel,
    [Search.name]: Search,
    [Loading.name]: Loading,
    kong: kong
  },
  data () {
    return {
      value: '',
      lists: [],
      show: false
    }
  },
  created () {
    // window.addEventListener('scroll', throttle(this.onScroll))
    this._getLists()
  },
  methods: {
    _getLists() {
      this.show = true
      search({ expressNo: this.value }).then(res => {
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
    onSearch() {
      this.lists = []
      this._getLists()
    }
    // onScroll() {
    //   // 可滚动容器的高度
    //   let innerHeight = document.querySelector('#app').clientHeight
    //   // 屏幕尺寸高度
    //   let outerHeight = document.documentElement.clientHeight
    //   // 可滚动容器超出当前窗口显示范围的高度
    //   let scrollTop = document.documentElement.scrollTop
    //   // scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，
    //   // 出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
    //   console.log(innerHeight + ' ' + outerHeight + ' ' + scrollTop)
    //   if (innerHeight < (outerHeight + scrollTop)) {
    //     // 加载更多操作
    //     console.log('loadmore')
    //     this.items += 10
    //   }
    // }
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
