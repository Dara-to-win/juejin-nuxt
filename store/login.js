const LOGIN_URL = ''
export const state = () => ({
  // 用户登录时输入的信息
  userInfo: {
    username: '',
    password: ''
  },
  // 是否已经登录
  isLogin: false,
  // 登录对话框是否打开
  isLoginDialogShow: false,
  // 登录后的状态
  userLoginState: {
    token: ''
  }
});
export const actions = {
  // 输入登录信息，并发送 ajax 请求判断能否登录
  login(context, value) {
    let username = context.state.userInfo.username
    let password = context.state.userInfo.password
    if (!username.trim().length) {
      alert('用户名不能为空！')
      return
    }
    if (!password.trim().length) {
      alert('密码不能为空！')
      return
    }
    // 向服务端发送请求，进行登录
    fetch(LOGIN_URL, {
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
        if (data.flag) {
          context.commit('LOGIN', data.token)
          context.commit('CLOSE_LOGIN_DIALOG')
        } else {
          alert('登录失败，请检查输入！')
        }
      })
  }
};
export const mutations = {
  // 打开登录弹窗
  OPEN_LOGIN_DIALOG(state) {
    state.isLoginDialogShow = true
  },
  // 关闭登录弹窗
  CLOSE_LOGIN_DIALOG(state) {
    state.isLoginDialogShow = false
    // this.commit('loginOptions/CLEAR_USER_Info')
  },
  // 设置状态为登录
  LOGIN(state, token) {
    state.isLogin = true
    // this.commit('loginOptions/CLEAR_USER_Info')
    localStorage.setItem('username', state.userInfo.username)
  },
  // 登出，清空 localStorage，刷新页面
  LOGOUT(state) {
    state.isLogin = false
    this.commit('loginOptions/CLEAR_USER_Info')
    // location.reload()
  },
  // 清空用户输入
  CLEAR_USER_Info(state) {
    state.userInfo.username = ''
    state.userInfo.password = ''
  }
}