<template>
  <div class="login-page">
    <div class="login-wrapper" @keydown.enter="submitForm('ruleForm')">
      <p>用户登录</p>
      <el-card shadow="never">
        <el-form
          :model="formLogin"
          :rules="rules"
          label-position="top"
          ref="ruleForm"
          size="default">
          <el-form-item prop="name">
            <el-input
              placeholder="请输入用户名"
              prefix-icon="el-icon-user-solid"
              v-model="formLogin.name">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-key"
              show-password
              v-model="formLogin.password">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button :disabled="isLogin" @click="submitForm('ruleForm')" class="button-login" size="default" type="primary">
              <i class="el-icon-s-unfold "/>&nbsp;&nbsp;登&nbsp;录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { setStorage } from '@/util/util'
export default {
  computed: {
    isLogin () {
      return !this.formLogin.name || !this.formLogin.password
    }
  },
  data () {
    return {
      formLogin: {},
      rules: {
        name: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login(this.formLogin).then(res => {
            this.$store.commit('SET_TOKEN', res.data.token)
            setStorage('user', res.data)
            this.$router.push('/home')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style scoped lang="stylus">
  .login-page
    background: url(../../assets/img/bg_login.svg) 50%/100% no-repeat
    cursor: auto
    height: 100%
    position: relative
    .login-wrapper
      width: 300px
      position: absolute
      top: 50%
      left: 50%
      padding: 20px 50px
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
      border-radius: 4px
      border: 1px solid #ebeef5
      background: #fff
      transform: translate(-50%, -50%)
      & > p
        font-size: 30px
        text-align: center
        color: #909399
      .el-card
        border: none
      .button-login
        width: 100%
</style>
