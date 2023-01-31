const REGISTER_URL= ''
export const state = () => ({
  isRegisterDialogShow: false,
})

export const actions = {
  // 注册操作
  register(context, value) {
    console.log('register-actions:', context)
    let username = value.name
    let password = value.password
    // 向服务端发送请求，进行登录
    fetch(REGISTER_URL, {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        console.log(`response: ${data}`)
        if (!data.status_code) {
          context.commit('REGISTERED', data.token)
          context.commit('CLOSE_REGISTER_DIALOG')
        } else {
          alert('注册失败，请检查输入！')
        }
      })
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
    this.commit('registerOptions/CLOSE_REGISTER_DIALOG')
    this.commit('loginOptions/OPEN_LOGIN_DIALOG')
  }
  // // 清空用户输入
  // CLEAR_USER_INPUT(state){
  //   state.userInput.username = ''
  //   state.userInput.password = ''
  // }
}