<template>
  <div class="login-section">
    <!-- :rules="rules" -->
    <el-form ref="ruleForm" label-position="top" label-width="100px" class="demo-ruleForm" :rules="rules" :model="userInfo" status-icon >
      <h2>登录掘金畅享更多权益</h2>
      <hr/>
      <el-form-item label="账号" prop="username">
        <el-input v-model="userInfo.username" type="text"  placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userInfo.password" type="password"  placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item class="login-buttons">
        <el-button type="primary" @click="login()">登录</el-button>
        <el-button @click="closeLoginDialog">取消</el-button>
      </el-form-item>
      <!-- 注册链接，点击打开注册页面 -->
      <a style="cursor:pointer;" @click="openRegisterDialog">没有掘金账号？</a>
    </el-form>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      // 存储数据的对象
      rules: {
        username: [
          { required: true, message: '手机号', trigger: 'change' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入手机号', trigger: 'change' },
        ],
        password: [
          { required: true, message: '密码',trigger: 'change'},
          { min: 9, max: 15, message: '长度在9到15',trigger: 'change'},
        ],
      },
    }
  },
  computed: {
    ...mapState('login', ['userInfo'])
  },
  methods: {
    // 点击“登录”时的逻辑
    login(){
    const namereg=/^1[3-9]\d{9}$/
    const passwordreg=/^(\w){9,15}$/
    if(namereg.test(this.$store.state.login.userInfo.username)&& passwordreg.test(this.$store.state.login.userInfo.password)){
      this.$store.dispatch('login/login')
    }else{
      alert("输入不符合规范")
    }
    },
    // 点击“注册”时关闭登录弹窗，打开注册弹窗
    openRegisterDialog(){
      this.$store.commit('login/CLOSE_LOGIN_DIALOG')
      this.$store.commit('register/OPEN_REGISTER_DIALOG')
    },
    // 点击“取消”时，关闭登录弹窗
    ...mapMutations('login', {closeLoginDialog: 'CLOSE_LOGIN_DIALOG'})
  },
}
</script>
<style scoped>
h2{
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.login-section {
  /* 用来 mask */
  position: fixed; /*固定定位*/
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(120, 0%, 30%, 0.3);
  z-index: 101;
}
.el-form {
  position: fixed; /*固定定位*/
  top: 50%; /*距顶部50%*/
  left: 50%;
  /* margin: -100px 0 0 -150px; 设定这个div的margin-top的负值为自身的高度的一半,margin-left的值也是自身的宽度的一半的负值.(感觉在绕口令) */
  transform: translateX(-50%) translateY(-50%); /* 用平移实现居中更好，自适应 */
  width: 300px; /*宽为400,那么margin-top为-200px*/
  padding: 20px;
  border-radius: 8px;
  background-color: #f3f5f6;
  z-index: 99; /*浮动在最上层 */
}
.login-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 注册 */
a{
  text-decoration: none;
}
a:link{
  color: black;
}
a:visited{
  color: black;
}
a:hover{
  color: #1e80ff;
}
</style>
