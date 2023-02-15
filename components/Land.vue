<template>
  <div class="login-section">
    <!-- :rules="rules" -->
    <div>
      <el-form ref="ruleForm" label-position="top" label-width="100px" class="demo-ruleForm" :rules="rules"
        :model="userInfo" status-icon>
        <div class="centerLogo">
          <img src="/_nuxt/static/assets/logo-text.svg" class="logo-text">
        </div>
        <div class="cut-off"></div>
        <div class="top-input">
          <input v-model="userInfo.username" type="text" placeholder="     请输入邮箱/手机号" class="DeInput" />
        </div>
        <div class="bottom-input">
          <input v-model="userInfo.password" type="password" placeholder="     请输入密码" class="DeInput" />
        </div>
        <el-form-item class="login-buttons">
          <button @click="openRegisterDialog" class="button-re">注册</button>
          <button type="primary" @click="login()" class="button-la">登录</button>
        </el-form-item>
        <div class="oauth-box">
          <span style="color: #cacdd4;padding-top: 10px;">其它方式登录</span>
          <div class="oauth">
            <div class="oauth-bg"><img title="微博" alt="微博"
                src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/fa758ebd6691cf5931bbbed63230327b.svg"
                class="oauth-btn"></div>
            <div class="oauth-bg"><img title="微信" alt="微信"
                src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e0ff12435b30910520c9a3aac9b90487.svg"
                class="oauth-btn"></div>
            <div class="oauth-bg"><img title="GitHub" alt="GitHub"
                src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/547dd8a9450cd7be39ff97c40a23e794.svg"
                class="oauth-btn"></div>
          </div>
        </div>
        <div class="special">
          <span>注册登录即表示同意 <span style="color:#1e80ff;cursor: pointer;">用户协议</span> 和<span
              style="color:#1e80ff;cursor: pointer;"> 隐私政策</span></span>
        </div>
      </el-form>
      <!-- 注册链接，点击打开注册页面 -->
      <div class="cencle">
      <el-button icon="el-icon-close" circle @click="closeLoginDialog" ></el-button>
        <!-- <a style="cursor:pointer;" @click="closeLoginDialog">取消</a> -->
      </div>
    </div>
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
          { required: true, message: '密码', trigger: 'change' },
          { min: 9, max: 15, message: '长度在9到15', trigger: 'change' },
        ],
      },
    }
  },
  computed: {
    ...mapState('login', ['userInfo'])
  },
  methods: {
    // 点击“登录”时的逻辑
    login() {
      const namereg = /^1[3-9]\d{9}$/
      const passwordreg = /^(\w){9,15}$/
      if (namereg.test(this.$store.state.login.userInfo.username) && passwordreg.test(this.$store.state.login.userInfo.password)) {
        this.$store.dispatch('login/login')
      } else {
        alert("输入不符合规范")
      }
    },
    // 点击“注册”时关闭登录弹窗，打开注册弹窗
    openRegisterDialog() {
      this.$store.commit('login/CLOSE_LOGIN_DIALOG')
      this.$store.commit('register/OPEN_REGISTER_DIALOG')
    },
    // 点击“取消”时，关闭登录弹窗
    ...mapMutations('login', { closeLoginDialog: 'CLOSE_LOGIN_DIALOG' })
  },
}
</script>
<style scoped>
h2 {
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.login-section {
  /* 用来 mask */
  position: fixed;
  /*固定定位*/
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(120, 0%, 30%, 0.3);
  z-index: 101;
}

.el-form {
  position: fixed;
  /*固定定位*/
  top: 50%;
  /*距顶部50%*/
  left: 50%;
  /* margin: -100px 0 0 -150px; 设定这个div的margin-top的负值为自身的高度的一半,margin-left的值也是自身的宽度的一半的负值.(感觉在绕口令) */
  transform: translateX(-50%) translateY(-50%);
  /* 用平移实现居中更好，自适应 */
  width: 38rem;
  height: 38rem;
  /*宽为400,那么margin-top为-200px*/
  padding: 20px;
  border-radius: 1rem;
  background-color: #ffffff;
  z-index: 99;
  /*浮动在最上层 */
}

.logo-text {
  width: 17rem;
  height: 4rem;
}

.centerLogo {
  padding-top:5px;
  padding-bottom: 20px;
  text-align: center;
}

.cut-off {
  height: 1px;
  background: #f1f1f5;
  display: block;
}

.button-re {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #f2f3f5;
  border: 1px solid #DCDFE6;
  color: #1e80ff;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 1rem;
  width: 13rem;
  height: 4rem;
  border-style: none;
  margin-top: 20px;
  margin-right: 40px;

}

.button-la {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  /* background: #FFF; */
  border: 1px solid #DCDFE6;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  width: 13rem;
  height: 4rem;
  border-radius: 1rem;
  border-style: none;
  background-color: #1e80ff;
}

.oauth-box {
  width: 20rem;
  height: 3rem;
  text-align: center;
  display: flex;
  margin-top: 1.67rem;
  flex-direction: row;
  justify-content: center;
  margin-left: 95px;
}

.oauth {
  display: flex;
  align-items: center;
}

.oauth-bg {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--juejin-gray-2);
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.special {
  color: rgb(202, 205, 212);
  padding-top: 10px;
  text-align: center;
}

.oauth-btn {
  width: 3rem;
  height: 3rem;
  vertical-align: bottom;
  cursor: pointer;
}

.top-input {

  padding-top: 30px;
  text-align: center;
  padding-bottom: 10px;
  height: 88px;
}

.bottom-input {
  padding-top: 20px;
  text-align: center;
  padding-bottom: 10px;
  height: 78px;
}

.DeInput {
  width: 30rem;
  height: 4rem;
  color: #cacdd4;
  background-color: #f1f1f5;
  border-style: none;
  border-radius: 1rem;
}

.login-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cencle {
  text-align: center;
    margin-top: 250px;
    position: fixed;
    top: 50%;
    left: 50%;
}


/* 注册 */
a {
  text-decoration: none;
}

a:link {
  color: black;
}

a:visited {
  color: black;
}

a:hover {
  color: #1e80ff;
}
</style>
