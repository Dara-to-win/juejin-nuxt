<template>
  <div class="login-section">
    <el-form ref="ruleForm" label-position="top" label-width="100px" class="demo-ruleForm" :rules="rules" :model="rulesForm" status-icon >
      <h2>注册新用户</h2>
      <el-form-item label="账号" prop="mobile">
        <el-input v-model.number="rulesForm.name" ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="rulesForm.password" type="password" ></el-input>
      </el-form-item>
      <el-form-item class="register-buttons">
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        <el-button @click="closeRegisterDialog">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      rulesForm: {
        name: '',
        password: '',
      },
      rules: {
        mobile: [
          { required: true, message: '手机号', trigger: 'change' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号码格式不正确', trigger: 'change' }
        ],
        name: [
          { required: true, message: '账号', trigger: 'change' },
          { min: 3, max: 9, message: '长度在3到9', trigger: 'change' },
        ],
        password: [
          { required: true, message: '密码', trigger: 'change' },
          { min: 3, max: 16, message: '长度在3到16', trigger: 'change' },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 如果校检通过，在这里向后端发送用户名和密码
          this.$store.dispatch('register/register', this.rulesForm)
        }
      })
    },
    ...mapMutations('register', {closeRegisterDialog: 'CLOSE_REGISTER_DIALOG'})
  },
}
</script>
<style scoped>
h2{
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.login-section {
  /* 用来 mask */
  position: fixed; /*固定定位*/
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(120, 0%, 30%, 0.3);
  z-index: 98;
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
.register-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
