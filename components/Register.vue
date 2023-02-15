<template>
  <div class="login-section">
    <div>
      <el-form ref="ruleForm" label-position="top" label-width="100px" class="demo-ruleForm" :rules="rules" :model="rulesForm" status-icon >
        <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="img" :src="img" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        <div class="input">
          <input v-model="rulesForm.nickname" type="text" placeholder="     请输入用户名" class="DeInput"/>
        </div>
        <div class="input">
          <input v-model="rulesForm.userAccount" type="text"  placeholder="     请输入邮箱/手机号" class="DeInput"/>
        </div>
        <div class="input">
          <input v-model="rulesForm.password" type="password" placeholder="     请输入密码" class="DeInput"/>
        </div>
        <div class="login-buttons">
            <button @click="submitForm()" class="button-re">注册</button>
        </div>
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
        <div class="cencle">
        <el-button icon="el-icon-close" circle @click="closeLoginDialog" ></el-button>
          <!-- <a style="cursor:pointer;" @click="closeLoginDialog">取消</a> -->
        </div>
        <!-- <div class="register-buttons">
          <el-button @click="closeRegisterDialog">取消</el-button>
        </div> -->
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      rulesForm: {
        nickname: '',
        password: '',
        userAccount:'',
      },
      rules: {
        nickname: [
          { required: true, message: '用户名', trigger: 'change' },
          { min: 2, max: 10, message: '长度在2到10', trigger: 'change' },
        ],
        userAccount: [
          { required: true, message: '手机号', trigger: 'change' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入手机号', trigger: 'change' },
        ],
        password: [
          { required: true, message: '密码', trigger: 'change' },
          { min: 9, max: 15, message: '长度在9到15', trigger: 'change' },
        ],
      },
      img:"",
      token:'',
    }
  },
  created(){
    this.$store.dispatch('upLoadImg/getToken')
  },
  methods: {
    submitForm() {
          // 如果校检通过，在这里向后端发送用户名和密码
          if(!this.img){alert("请上传头像")}
          const namereg=/^[\u4E00-\u9FA5\uF900-\uFA2D|\w]{2,10}$/
          const phonereg=/^1[3-9]\d{9}$/
          const passwordreg=/^(\w){9,15}$/
          if(phonereg.test(this.rulesForm.userAccount)&& 
             passwordreg.test(this.rulesForm.password) &&
             namereg.test(this.rulesForm.nickname)){
            this.$store.dispatch('register/register', this.rulesForm)
          }else{
            alert("输入不符合要求")
          }
        },
    ...mapMutations('register', {closeRegisterDialog: 'CLOSE_REGISTER_DIALOG'}),
        handleAvatarSuccess(res, file) {
          const reader  = new FileReader()
          reader.readAsDataURL(file.raw)
          reader.onload =  (res)=>{
          this.img =res.target.result
          }
          this.$store.dispatch('upLoadImg/upLoadImg',file.raw)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  },
}
</script>
<style scoped>
*{
  text-align: center;
}
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
.register-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 48px;
    margin-top: 15px;

}
.button-re {
  display: inline-block;
  line-height: 1;
  cursor: pointer;
  background:#1e80ff ; 
  border: 1px solid #DCDFE6;
  color:#f2f3f5;
  text-align: center;
  box-sizing: border-box;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 1rem;
  width: 13rem;
  height: 4rem;
  border-style: none;
  margin-top: 10px;
    width: 340px;
    margin-right: 0px;


}
.input {
  padding-top: 10px;
  text-align: center;
  padding-bottom: 10px;
  height: 68px;
}
.login-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
.DeInput {
  width: 30rem;
  height: 4rem;
  color: #cacdd4;
  background-color: #f1f1f5;
  border-style: none;
  border-radius: 1rem;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 5rem;
    height: 5rem;
    text-align: center;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #ffff;
    width: 5rem;
    height: 5rem;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    background-color: #f2f3f5;
    border-style: solid;
    border-color: #1e80ff;
  }
  .avatar {
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    display: block;
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
.cencle {
  text-align: center;
    margin-top: 250px;
    position: fixed;
    top: 50%;
    left: 50%;
}
</style>
