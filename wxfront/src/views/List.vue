<template>
  <div>
    <van-cell-group title="分组1">
      <van-cell title="单元格" value="内容"  is-link url="/search"/>
    </van-cell-group>
  </div>
</template>
<script>
import { Cell, CellGroup } from 'vant'
export default {
  name: 'listinfo',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
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
