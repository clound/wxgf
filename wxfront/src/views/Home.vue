<template>
  <div class="home">
    <van-image width="10rem" height="10rem" fit="contain" :src="logoSrc" />
    <div class="mb20 f20 companyname">润阳鸿运物流</div>
    <van-cell-group>
      <van-field v-model="form.username" label="真实姓名:" placeholder="请输入真实姓名" required/>
      <van-field v-model="form.phone" type="phone" label="手机号:" placeholder="请输入手机号" required/>
      <van-field v-model="form.sms" center clearable label="短信验证码：" placeholder="请输入短信验证码" required>
        <van-button slot="button" size="small" type="primary" @click="sendcode" :disabled="senddisabled">{{sendBtnTitle}}</van-button>
      </van-field>
      <van-field v-model="form.authcode" center clearable label="验证码：" placeholder="请输入短信验证码" required>
        <!-- <img :src="src" slot="right-icon"> -->
        <span v-html="src" @click="_getCode()" slot="right-icon"></span>
      </van-field>
    </van-cell-group>
    <div class="mt20 p20">
      <van-button type="primary" size="large" round @click="_signup" :disabled="signupdisabled">注册</van-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Image, CellGroup, Cell, Button, Field } from 'vant'
import { validatePhone } from '@/libs/validate'
import { signup, getcode, getPhoneCode } from '@/api/user'

export default {
  name: 'home',
  components: {
    [Image.name]: Image,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Field.name]: Field
  },
  data() {
    return {
      logoSrc: require('@/common/images/logo.jpg'),
      src: '',
      senddisabled: false,
      signupdisabled: false,
      sendBtnTitle: '获取验证码',
      form: {
        username: '',
        phone: '',
        sms: '',
        code: '',
        authcode: ''
      }
    }
  },
  created() {
    let { code } = this.$route.query
    // console.log(code)
    this.form.code = code || ''
    this._getCode()
  },
  methods: {
    _getCode() {
      getcode().then(res => {
        // console.log(res)
        this.src = res.data
      })
    },
    validateBtn() {
      let time = 60
      let timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer)
          this.senddisabled = false
          this.sendBtnTitle = '获取验证码'
        } else {
          this.sendBtnTitle = time + '秒后重试'
          this.senddisabled = true
          time--
        }
      }, 1000)
    },
    sendcode() {
      let { authcode, phone } = this.form
      if (!phone || !validatePhone(phone)) {
        this.$toast.fail('请填写正确的手机号')
        return
      }
      if (!authcode) {
        this.$toast.fail('请输入验证码')
        return
      }
      this.validateBtn()
      getPhoneCode({ code: authcode, phone }).then(res => {
        let data = res.data
        if (!data.code) {
          this.$toast.success('短信发送成功')
        } else {
          this.$toast.fail(data.message)
        }
      })
    },
    _signup() {
      let { username, phone, sms, code } = this.form
      if (!username) {
        this.$toast.fail('请填写真实姓名')
        return
      }
      if (!phone || !validatePhone(phone)) {
        this.$toast.fail('请填写正确的手机号')
        return
      }
      if (!sms) {
        this.$toast.fail('请填写短信验证码')
        return
      }
      this.signupdisabled = true
      signup({ username, phone, sms, code }).then(res => {
        this.signupdisabled = false
        let data = res.data
        if (!data.code) {
          this.$toast.success('注册成功')
          this.$router.push({
            name: 'search',
            query: { code: code }
          })
        } else {
          this.$toast.fail(data.message)
        }
      })
    }
  }
}
</script>
<style lang="stylus">
.home
  text-align center
  .companyname
    color #07c160
    margin-bottom 20px
    font-size 20px
</style>
