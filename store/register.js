const REGISTER_URL= 'http://jj.hanbing777.top/api/user/register'
export const state = () => ({
  isRegisterDialogShow: false,
  token:''
})

export const actions = {
  //注册操作
 async register(context, value) {
    let nickname = value.nickname
    let userAccount = value.userAccount
    let userPassword = value.password
    let userAvatar=value.userAvatar
    //向服务端发送请求，进行登录
    fetch(REGISTER_URL, {
      method: 'post',
      body: JSON.stringify({
        nickname,
        userAccount,
        userPassword,
        userAvatar,
        introduction: "用户"
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        if(data.data){
          alert("注册成功")
          context.commit("REGISTERED")
        }else(alert(data.description))
      }).catch((err)=>{ console.log(err)});
  }
}

export const mutations = { 
  OPEN_REGISTER_DIALOG(state) {
    state.isRegisterDialogShow = true
  },
  CLOSE_REGISTER_DIALOG(state) {
    state.isRegisterDialogShow = false
    // this.commit('registerOptions/CLEAR_USER_INPUT')
  },
  // 注册成功后，关闭注册弹窗，打开登录弹窗
  REGISTERED(state) {
    this.commit('register/CLOSE_REGISTER_DIALOG')
    this.commit('login/OPEN_LOGIN_DIALOG')
  }
  // // 清空用户输入
  // CLEAR_USER_INPUT(state){
  //   state.userInput.username = ''
  //   state.userInput.password = ''
  // }
}