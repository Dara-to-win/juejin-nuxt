const LOGIN_URL = 'http://jj.hanbing777.top/api/user/login'
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
});
export const actions = {
  // 输入登录信息，并发送 ajax 请求判断能否登录
  login(context) {
    let userAccount = context.state.userInfo.username
    let userPassword = context.state.userInfo.password
      fetch(LOGIN_URL, {
        // 向服务端发送请求，进行登录
        method: 'post',
        body: JSON.stringify({
          userAccount,
          userPassword,
        }),
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json()).then(data => {
          if(data){
            localStorage.setItem('username', data.data.nickname)
            localStorage.setItem('userAvatar',data.data.avatar)
            localStorage.setItem('userid',data.data.userid)
            context.commit('LOGIN')
            context.commit('CLOSE_LOGIN_DIALOG')
          }
        }).catch((err)=>{ console.log(err)});
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
    // this.commit('login/CLEAR_USER_Info')
  },
  // 设置状态为登录
  LOGIN(state) {
    state.isLogin = true
    this.commit('login/CLEAR_USER_Info')
  },
  // 登出，清空 localStorage，刷新页面
  LOGOUT(state) {
    state.isLogin = false
    this.commit('login/CLEAR_USER_Info')
    localStorage.setItem('username',null)
    localStorage.setItem('userAvatar',null)
    localStorage.setItem('userid',null)
  },
  // 清空用户输入
  CLEAR_USER_Info(state) {
    state.userInfo.username = ''
    state.userInfo.password = ''
  }
}