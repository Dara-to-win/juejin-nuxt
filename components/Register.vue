<template>
  <div class="login-section">
    <el-form ref="ruleForm" label-position="top" label-width="100px" class="demo-ruleForm" :rules="rules" :model="rulesForm" status-icon >
      <h2>注册新用户</h2>
      <h3 style="margin-left:10px">头像</h3>
      <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="img" :src="img" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-form-item label="用户名" prop="nickname">
        <el-input v-model="rulesForm.nickname" type="text"></el-input>
      </el-form-item>
      <el-form-item label="账号" prop="userAccount">
        <el-input v-model="rulesForm.userAccount" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="rulesForm.password" type="password" ></el-input>
      </el-form-item>
      <el-form-item class="register-buttons">
        <el-button type="primary" @click="submitForm()">注册</el-button>
        <el-button @click="closeRegisterDialog">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { v4 as uuidv4 } from 'uuid';
const qiniu = require('qiniu-js')
export default {
  created() {
    const QiniuUPToken = require('qiniu-uptoken')
    // 生成上传 Token
    this.token = QiniuUPToken(
    'StZJMeCvllWcmnvI7VaUdQsebPOIjOemENGm5sQd', 
    'S2fKXsgqhItS78sf3Oz1VhkB3X00RRWLQEDocKmH', 
    'dian210')
    },
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
      imgSrc:""
    }
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
              const form=this.rulesForm
              form.userAvatar=this.imgSrc
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
          const config = {
            useCdnDomain: false,
            region:null
          };
          const putExtra = {
            fname: "",
            params: {},
            mimeType: null
          };
          const observer = {
          next(res){
            // ...
          },
          error(err){
            this.$message.error(err)
          }, 
          complete(res){
            // ...
          }}
          const uuid=uuidv4()
          const observable = qiniu.upload(file.raw, uuid, this.token, putExtra, config)
          observable.subscribe(observer) // 上传开始
          this.imgSrc=`qiniu.diandian210.top/${uuid}`
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
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
  }
  .avatar {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: block;
  }
</style>
