<!-- 上方主导航栏 -->
<template>
  <transition name="nav">
    <div v-show="navShow" class="bg-container" :class="navClass">
      <div class="line"></div>
      <div class="nav-container">
        <!-- 主导航栏上半部分 - 页面跳转 -->
        <el-row type="flex" class="nav-bar">
          <!-- SEO LOGO优化 -->
          <h1  class="seoLogo" >
            <a href="/" title="稀土掘金首页" class="seo">
              <!-- <img
                src="@/static/assets/logo-text.svg"
                alt="稀土掘金logo"
              /> -->
              <span style="width: 107px; cursor: pointer; display:block;" class="logo-text">
                <svg width="107" height="28" viewBox="0 0 137 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5865 17.3955H17.5902L28.5163 8.77432L25.5528 6.39453L17.5902 12.6808H17.5865L17.5828 12.6845L9.62018 6.40201L6.6604 8.78181L17.5828 17.3992L17.5865 17.3955Z" fill="#1E80FF"/>
                  <path d="M17.5872 6.77268L21.823 3.40505L17.5872 0.00748237L17.5835 0L13.3552 3.39757L17.5835 6.76894L17.5872 6.77268Z" fill="#1E80FF"/>
                  <path d="M17.5865 23.2854L17.5828 23.2891L2.95977 11.7531L0 14.1291L0.284376 14.3574L17.5865 28L28.5238 19.3752L35.1768 14.1254L32.2133 11.7456L17.5865 23.2854Z" fill="#1E80FF"/>
                  <path d="M133.287 18.4172H131.162L129.923 23.0758H126.825V16.7559H135.364V14.7315H126.825V11.1469H133.074V9.12256H118.454V11.1469H124.703V14.7315H116.164V16.7559H124.703V23.0758H121.601L120.363 18.4172H118.237L119.487 23.0758H115.543V25.1001H135.985V23.0758H132.041L133.287 18.4172Z" fill="#323232"/>
                  <path d="M130.522 3.3151L130.2 2.94092H121.321L120.999 3.3151C119.298 5.2467 117.378 6.97337 115.278 8.46009V10.9522C116.206 10.3573 120.183 7.72295 122.327 4.98768H129.235C131.375 7.72295 135.356 10.3573 136.284 10.9522V8.46009C134.169 6.97586 132.235 5.2491 130.522 3.3151Z" fill="#323232"/>
                  <path d="M94.9037 8.53127H96.494V6.50323H94.9037V2.88867H92.9056V6.50323H91.3303V8.53127H92.9094V14.7914L91.3303 15.3377V17.5828L92.9094 17.0365V20.7371C92.8414 22.2391 92.5579 23.7236 92.0674 25.145H94.1629C94.6112 23.7165 94.863 22.2335 94.9112 20.7371V16.3442L96.5053 15.7904V13.5229L94.9112 14.0767L94.9037 8.53127Z" fill="#323232"/>
                  <path d="M99.1875 2.88867H97.6608V20.7446C97.6727 22.2359 97.4852 23.7221 97.1033 25.1637H99.1875C99.5206 23.7145 99.6851 22.2316 99.6776 20.7446V9.77357H112.321V2.88867H99.1875ZM110.308 7.75303H99.6851V4.91671H110.304L110.308 7.75303Z" fill="#323232"/>
                  <path d="M110.305 23.405H107.566V17.6838H110.021H110.702H111.91V11.8166H110.021V15.9363H107.566V11.1431H105.676V15.9363H103.27V11.8166H101.381V17.6838H102.298H103.27H105.676V23.405H102.967V19.173H101.074V25.1524H102.286H102.967H110.305H110.683H112.195V19.173H110.305V23.405Z" fill="#323232"/>
                  <path d="M53.0024 2.91846V4.83801L56.5908 6.11397L53.0024 7.38618V9.30573L59.2887 7.07187L65.5749 9.30573V7.38618L61.9865 6.11397L65.5749 4.83801V2.91846L59.2887 5.15232L53.0024 2.91846Z" fill="#323232"/>
                  <path d="M79.9508 11.697H88.5944V9.47813H79.9508V2.80273H77.5299V9.47813H68.8863V11.697H77.5299V22.9823H67.76V25.2012H89.7207V22.9823H79.9508V11.697Z" fill="#323232"/>
                  <path d="M48.9461 5.39227L52.2913 5.18272V3.24072L43.6813 3.78328V5.72529L47.0265 5.512V8.50545H43.5803V10.4213H47.0265V25.164H48.9461V10.4213H52.3923V8.50545H48.9461V5.39227Z" fill="#323232"/>
                  <path d="M57.6539 9.01025H55.6595L55.1768 10.3648H52.9991V12.2357H54.5145L52.55 17.7662H53.8821V24.1534H55.7007V16.8457H58.6642V25.1787H60.5837V16.8457H63.4612V21.059C63.4534 22.1374 63.181 23.1974 62.6679 24.146H64.7147C65.1423 23.173 65.3627 22.1217 65.362 21.059V15.6932V15.1282H60.5837V13.2572H58.6642V15.1282H55.4836L56.5313 12.2245H65.594V10.3536H57.1749L57.6539 9.01025Z" fill="#323232"/>
                  <path d="M43.562 24.6246H45.4591L46.2786 11.4272H44.3815L43.562 24.6246Z" fill="#323232"/>
                  <path d="M49.7849 11.4272L50.3499 23.2963H52.247L51.682 11.4272H49.7849Z" fill="#323232"/>
                </svg>
              </span>
              <img src="@/static/assets/logo.svg" alt="稀土掘金logo" class="logo-img"/>
            </a>
            </h1>
          <!-- 主导航栏左半部分，包含链接 -->
          <el-col :span="15" class="left">
            <!-- 屏幕较窄时的下拉链接列表 -->
            <el-dropdown trigger="click" class="nav-link-dropdown">
              <span class="el-dropdown-link">
                首页
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  ><span @click="jumpToIndex()">首页</span></el-dropdown-item
                >
                <el-dropdown-item>沸点</el-dropdown-item>
                <el-dropdown-item>直播</el-dropdown-item>
                <el-dropdown-item>活动</el-dropdown-item>
                <el-dropdown-item>商城</el-dropdown-item>
                <el-dropdown-item>APP</el-dropdown-item>
                <el-dropdown-item>插件</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!-- 完整的导航链接 -->
            <el-menu default-active="0" class="nav-link" mode="horizontal">
              <el-menu-item
                v-for="(item, index) in titleList"
                :key="index"
                :index="index.toString()"
              >
                <el-link :href="item.url" target="_blank">
                  {{ item.title }}
                </el-link>
                <span class="tablead">{{ item.badge }}</span>
              </el-menu-item>
              <el-submenu v-show="moreShow" index="8">
                <template slot="title">更多</template>
                <el-menu-item
                  v-for="(item, index) in moreList"
                  :key="index"
                  :index="`8-${index.toString()}}`"
                >
                  <el-link :href="item.url" target="_blank">
                    {{ item.title }}
                    <img :src="item.imgUrl" style="width:50px">
                  </el-link>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>

          <!-- 主导航栏右半部分，包含搜索框、创作者中心按钮、主题切换按钮、消息提示和用户头像 -->
          <el-col :span="14" class="right">
            <!-- 输入框 -->
            <div>
              <el-input
                ref="input"
                v-model="input"
                placeholder="探索稀土掘金"
                class="input"
                @focus="inPut()"
                @blur="outPut()"
                @keydown.enter.native="outPut()"
              >
              </el-input>
              <transition name="el-zoom-in-left">
                <client-only>
                  <div
                    v-show="!badgeShow && !input && searchArr.length"
                    class="searchMenu"
                    :style="{ width: searchWidth }">
                    <div class="searchHead">
                      <span>搜索历史</span>
                      <div @click='clearHistory()'>
                      <span class="clear" > 清空</span>
                      </div>
                    </div>
                    <div
                      v-for="(item, index) in searchArr"
                      :key="index"
                      class="searchList"
                    @click="jump2search(item)"
                    >
                      {{ item }}
                    </div>
                  </div>
                </client-only>
              </transition>
              <div class="search" :class="searchChange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M12.4008 12.4008C14.744 10.0577 14.744 6.25871 12.4008 3.91556C10.0577 1.57242 6.25871 1.57242 3.91556 3.91556C1.57242 6.25871 1.57242 10.0577 3.91556 12.4008C6.25871 14.744 10.0577 14.744 12.4008 12.4008ZM12.4008 12.4008L15.5828 15.5828"
                    :stroke="searchColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <!-- 创作者中心按钮 -->
            <div class="holder">
              <transition name="badge">
                <el-badge
                  v-show="badgeShow"
                  :value="1"
                  class="badge"
                  type="danger"
                >
                  <el-dropdown
                    split-button
                    type="primary"
                    size="small"
                    class="originator-drop"
                  >
                    创作者中心
                    <el-dropdown-menu slot="dropdown">
                      <div @click="jump2Editor()">
                        <el-dropdown-item>
                          <img src="@/static/assets/write-article.svg" /> 写文章
                        </el-dropdown-item>
                      </div>
                      <el-dropdown-item>
                        <img src="@/static/assets/boiling.svg" /> 发沸点
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <img src="@/static/assets/coding.svg" /> 写代码
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-badge>
              </transition>
            </div>

            <!-- 主题切换图标 -->
            <input id="modeCheckBox" type="checkbox" :checked="pageTheme=='theme-dark'? true:false" @click="changeTheme">
            <label for="modeCheckBox" class="modeCheck"></label>

            <!-- 消息图标 -->
            <el-button
              type="text"
              size="small"
              icon="el-icon-message-solid"
              class="message-btn"
            ></el-button>

            <!-- 用户menu -->
            <div>
              <!-- 登录后 -->
              <el-popover v-if="isLogin" placement="bottom" trigger="click">
                <!-- 信息框 -->
                <div class="infobox">
                  <div class="user-card">
                    <div class="user-info">
                      <div class="avatar">
                        <img
                          :src="userAvatar ||useravatar"
                          alt=""
                          class="lazy avatar"
                          style="
                            width: 48px;
                            height: 48px;
                            cursor: pointer;
                            border-radius: 50%;
                          "
                        />
                      </div>
                      <div class="user-detail">
                        <p class="name">{{ username }}</p>
                        <div class="ore">
                          <span style="font-size: 12px">矿石:2.8w</span>
                          <img
                            src="@/static/assets/info/unfold.jpg"
                            alt=""
                            class="path"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- <<<<<<< Updated upstream -->
                    <a href="" class="progress-list">
                      <div class="jscore" >
                        <div class="js-level">
                          掘友等级
                          <span>JY.4</span>
                        </div>
                        <div class="progress">
                          <span>
                            308.4/500
                            <img
                              src="@/static/assets/info/unfold.jpg"
                              alt=""
                              class="progress-path"
                            />
                          </span>
                        </div>
                        <div class="bar">
                          <div class="current-bar" style="width: 128px"></div>
                        </div>
                      </div>
                    </a>
                    <ul class="status-bar">
                      <li class="item">
                        <div class="item-count">2</div>
                        <div class="item-name">关注</div>
                      </li>
                      <li class="item">
                        <div class="item-count">26</div>
                        <div class="item-name">赞过</div>
                      </li>
                      <li class="item">
                        <div class="item-count">1</div>
                        <div class="item-name">收藏</div>
                      </li>
                    </ul>
                    <hr style="opacity: 25%" />
                  </div>
                  <ul class="drop-down list box">
                    <li class="drop-down">
                      <div class="open-menu">
                        <img
                          src="@/static/assets/info/homepage.jpg"
                          alt=""
                          ip="image"
                          style="width: 20px"
                        />
                        <el-link :underline="false">我的主页</el-link>
                      </div>
                    </li>
                    <li class="drop-down">
                      <div class="open-menu" style="width: 100px">
                        <img
                          src="@/static/assets/info/welfare.jpg"
                          alt=""
                          ip="image"
                          style="width: 20px"
                        />
                        <el-link :underline="false">成长福利</el-link>
                      </div>
                    </li>
                    <li class="drop-down">
                      <div class="open-menu">
                        <img
                          src="@/static/assets/info/member.jpg"
                          alt=""
                          ip="image"
                          style="width: 20px"
                        />
                        <el-link :underline="false">会员中心</el-link>
                      </div>
                    </li>
                    <li class="drop-down">
                      <div class="open-menu">
                        <img
                          src="@/static/assets/info/course.jpg"
                          alt=""
                          ip="image"
                          style="width: 20px"
                        />
                        <el-link :underline="false">我的课程</el-link>
                      </div>
                    </li>
                    <li class="drop-down">
                      <div class="open-menu">
                        <img
                          src="@/static/assets/info/discounts.jpg"
                          alt=""
                          ip="image"
                          style="width: 20px"
                        />
                        <el-link :underline="false">我的优惠</el-link>
                      </div>
                    </li>
                    <li class="drop-down">
                      <div class="open-menu">
                        <img
                          src="@/static/assets/info/apply.jpg"
                          alt=""
                          ip="image"
                          style="width: 20px"
                        />
                        <el-link :underline="false">我的报名</el-link>
                      </div>
                    </li>
                    <li class="drop-down">
                      <div class="open-menu">
                        <img
                          src="@/static/assets/info/footprint.jpg"
                          alt=""
                          ip="image"
                          style="width: 20px"
                        />
                        <el-link :underline="false">我的足迹</el-link>
                      </div>
                    </li>
                  </ul>
                  <hr style="opacity: 25%" />
                  <div style="display: flex; margin-top: 10px">
                    <el-link :underline="false">我的设置</el-link>
                    <div class="hide"></div>
                    <el-link :underline="false" @click="logout()"
                      >退出登录</el-link
                    >
                  </div>
                </div>
                <div
                  slot="reference"
                  class="avatar-div"
                  style="width: 40px; height: 40px; margin-right: 10px"
                >
                  <img
                    :src="userAvatar||useravatar"
                    style="
                      width: 100%;
                      height: 100%;
                      cursor: pointer;
                      border-radius: 50%;
                    "
                  />
                </div>
              </el-popover>
              <!-- 登录前 -->
              <button v-if="!isLogin" class="landButton" @click="login()">
                登录
              </button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'NavBar',
  data() {
    return {
      input: '',
      scrolNumber: '',
      navClass: '',
      navShow: true,
      badgeShow: true,
      inputClass: '',
      searchChange: '',
      searchColor: '#515767',
      searchMenu: '',
      searchWidth: '',
      pageTheme: '',
      get searchArr(){
        if(process.client){
          return (JSON.parse(localStorage.getItem('searchList')) || [])}
        else{return []}
      },
      get useravatar(){
        return localStorage.getItem('userAvatar')
      },
    }
  },
  computed: {
    ...mapState('login', ['isLogin', 'isLoginDialogShow', 'userInput']),
    username() {
      return localStorage.getItem('username')
    },
    userAvatar() {
      return (
        this.$store.state.upLoadImg.imgSrc
      )
    },
    titleList() {
      return this.$store.state.homeConfig.homeConfig.titleList.slice(0, 8)
    },
    moreShow() {
      return this.$store.state.homeConfig.homeConfig.titleList.length > 8
    },
    moreList() {
      return this.$store.state.homeConfig.homeConfig.titleList.slice(8)
    },
  },
  watch: {
    scrolNumber: {
      handler(newNumber, oldNumber) {
        this.$bus.$emit('scrolNumberChange', newNumber, oldNumber)
        if (newNumber > oldNumber && newNumber > 400) {
          this.navShow = false
          this.$bus.$emit('linPopUp')
          this.$bus.$emit('slideDown')
        }
        if (newNumber < oldNumber && oldNumber > 400) {
          this.navShow = true
          this.$bus.$emit('linPopDown')
          this.$bus.$emit('slideUp')
        }
        if (newNumber > 1300) {
          this.$bus.$emit('slideAppear')
        } else {
          this.$bus.$emit('slideHide')
        }
      },
    },
  },
  mounted() {
    if (this.useravatar && this.username && localStorage.getItem('userid')) {
      this.$store.state.login.isLogin = true
    } else {
      this.$store.state.login.isLogin = false
    }
    this.scroll = window.addEventListener(
      'scroll',
      this.throttle(this.scrollToTop, 200)
    )
    this.pageTheme = localStorage.getItem("theme") || "theme-white";
    document.body.setAttribute('class', this.pageTheme);
    this.storage=window.addEventListener("storage", (e) =>{
        if(e.key ==="theme"){
          this.pageTheme=e.newValue;
          document.body.setAttribute('class',e.newValue);
          this.$bus.$emit('changeTheme')
        }
    });
  },
  updated() {},
  destroyed() {
    window.removeEventListener('scroll', this.scroll)
    window.removeEventListener('storage', this.storage)
  },
  methods: {
    ...mapMutations({
      login: 'login/OPEN_LOGIN_DIALOG',
      logout: 'login/LOGOUT',
    }),
    changeTheme(){
      // 更改页面主题变量
      if(this.pageTheme === 'theme-white'){
          this.pageTheme = 'theme-dark';
      }else{
          this.pageTheme = 'theme-white';
      }
      document.body.setAttribute('class', this.pageTheme);
      // 将主题信息保存到localStorage中
      localStorage.setItem("theme", this.pageTheme);
      this.$bus.$emit('changeTheme')
    },
    scrollToTop() {
      this.scrolNumber =
        document.body.scrollTop || document.documentElement.scrollTop
    },
    jumpToIndex() {
      window.location.href = '/'
    },
    jump2Editor() {
      if (this.$store.state.login.isLogin) {
        window.location.href = '/Editor'
      } else {
        alert('请先登录')
      }
    },
    inPut() {
      if (document.body.clientWidth > 865) {
        this.searchColor = '#409EFF'
        this.badgeShow = false
        this.searchChange = 'searchChange'
        this.$refs.input.$refs.input.style.transition = '0.3s'
        this.$refs.input.$refs.input.style.width = '340px'
        this.$refs.input.$refs.input.placeholder = '搜索文章/小册/标签/用户'
        this.searchWidth = '342px'
      } else {
        this.searchColor = '#409EFF'
      }
    },
    outPut() {
      setTimeout(() =>{
        this.badgeShow = true
        this.searchChange = ''
        this.searchColor = '#515767'
        this.$refs.input.$refs.input.style.width = ''
        this.$refs.input.$refs.input.placeholder = '探索稀土掘金'
      },50)
      if (this.input) {
        this.searchHistory()
        this.$router.push({
          name: 'Search',
          query: { search: this.input },
        })
      }
    },
    searchHistory() {
      let arr=[]
      if (!localStorage.getItem('searchList')) {
        localStorage.setItem('searchList', '[]')
      } else {
        arr = JSON.parse(localStorage.getItem('searchList'))
      }
      arr.unshift(this.input)
      const newArr = new Set(arr)
      localStorage.setItem('searchList', JSON.stringify(Array.from(newArr)))
    },
    clearHistory() {
      localStorage.setItem('searchList','[]')
    },
    jump2search(item) {
      this.input=item
      this.$refs.input.focus()
      this.$router.push({
        name: 'Search',
        query: { search: item },
      })
    },
  },
}
</script>
<style scoped lang="less">
// 导入主题样式
@import '~/static/css/theme/theme.less';
.setTheme();
.theme(@bg-color, @font-color, @tip-background-color, @tip-font-color, @theme-gray, @hover-color, @search, @login-bg, @login-color, @lowerhalf, @logo){
.bg-container {
  width: 100vw;
  background-color: @bg-color;
  z-index: 100;
  position: fixed;
  height: 64.5px;
  
  .nav-container {
    margin: 0 auto;
    width: 100%;
    .nav-bar {
      height: 64px;
      align-items: center;
      background-color: @bg-color;
      // logo 区域
      .seoLogo {
        font-size: 20px;
        .seo {
          cursor: pointer;
          .logo-text {
            margin-left: 20px;
            color: @tip-font-color;
            svg path:nth-child(n+4) {
              // stroke: #fff;
              fill: @logo;
            }
          }
          .logo-img {
            display: none;
            margin-left: 20px;
            width: 31px;
          }
        }
        // 媒体查询要写在下面才能生效
        @media (max-width: 640px) {
          .logo-text {
            display: none !important;
          }
          .logo-img {
            display: block !important;
            margin-left: 20px !important;
          }
          .el-dropdown-link {
            font-size: 13px;
          }
        }
      }
      
      // 导航栏区域
      .left,
      .right {
        display: flex;
      }
      // 左侧链接部分
      .left {
        justify-content: flex-start;
        align-items: center;
        background-color: @bg-color;
        // 导航栏左侧宽度较窄时的下拉导航链接
        .nav-link-dropdown {
          font-size: 16px;
          color: #1e80ff;
          display: none;
          cursor: pointer;
        }
        // 完整的导航链接部分
        .nav-link {
          border-bottom: 1px solid @bg-color;
          margin-left: 13px;
          background-color: @bg-color;
          .el-menu-item {
            width: 50px;
            font-size: 16px;
            padding: 0 10px;
            transition: none !important;
            color: @tip-font-color;
            &.is-active {
              color: #1e80ff;
              border-bottom: none;
            }
            &:hover {
              background-color: @hover-color;
            }
          }
        }
        @media (max-width: 1230px) {
          .nav-link-dropdown {
            margin-left: 10px;
            display: block;
          }
          .nav-link {
            display: none;
          }
        }
        // border: 1px solid red;
      }
      // 右侧按钮、用户头像部分
      .right {
        justify-content: flex-end;
        align-items: center;
        margin: 0 15px;
        .searchMenu {
          width: 100%;
          position: absolute;
          margin-top: 11px;
          line-height: 2rem;
          right: 178px;
          z-index: 100;
          min-width: 6rem;
          font-size: 1rem;
          color: @theme-gray;
          list-style: none;
          text-align: left;
          border-radius: 0.17rem;
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
          border: 1px solid #ebebeb;
          background-color: @bg-color;
          .searchHead {
            border-bottom: 1px solid #ebebeb;
            padding: 0.5rem 1rem;
            display: flex;
            justify-content: space-between;
          }
          .clear {
            cursor: pointer;
            color: #1e80ff;
          }
          .searchList {
            padding: 0.5rem 1rem;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            color: #5e6369;
          }
          .searchList:hover {
            background-color: #f2f3f5;
          }
        }
        ::v-deep .el-input__inner {
          background-color: @search;
        }
        // 搜索框
        .input {
          width: 200px;
          margin-right: 12px;
          margin-top: -5px;
          height: 31px;
          transition: 0.3s;
          z-index: 101;
          color: @theme-gray;
          // background-color: #2f2f2f;
        }
        .holder {
          width: 140px;
        }
        @media (max-width: 720px) {
          .input {
            width: 125px;
          }
        }
        @media (max-width: 370px) {
          .input {
            display: none;
          }
        }
        // 创作者中心下拉按钮和消息气泡
        .badge {
          right: 60px;
          z-index: 100;
          height: 30px;
          .originator-drop {
            right: -62px;
            min-width: 140px;
            z-index: 0;
            &:hover {
              z-index: 0;
            }
            & > * {
              width: 100%;
            }
          }
        }

        // 主题切换
        #modeCheckBox {
          display: none;
        }
        .modeCheck {
          margin: 0 10px;
        }
        .modeCheck::after {
            content: "";
            background: url("~/static/assets/sun.png") no-repeat center;
            background-size: 25px 25px;
            display: block;
            width: 25px;
            height: 25px;
        }
        #modeCheckBox:checked + .modeCheck::after {
            content: "";
            background: url("~/static/assets/moon.png") no-repeat center;
            background-size: 25px 25px;
            display: block;
            width: 25px;
            height: 25px;
        }
        // 消息按钮
        .message-btn {
          height: 100%;
          font-size: 24px;
          margin: 0 15px;
          // color: #8a919f; // #515767
          color: @theme-gray;
          z-index: 110;
        }
        // border: 1px solid skyblue;
      }
    }
    @media (min-width: 1366px) {
      .nav-bar{
        margin:0 6vw 0 5vw;
      }
    }
  }
}
.nav-leave-active {
  transition: 0.2s;
}
.nav-enter-active {
  transition:ease-out 0.13s;
}
.nav-enter,
.nav-leave-to {
  transform: translateY(-100%);
}
.badge-leave-active {
  transition: 0.4s;
}
.badge-enter-active {
  transition: 0.4s;
}
.badge-enter,
.badge-leave-to {
  transform: translateX(20%);
  opacity: 0;
}
.landButton {
  text-align: center;
  line-height: 28px;
  background-color: @login-bg;//#cde1f84f
  color: @login-color;//#1e80ff
  border: 1px solid @login-color;//#1e80ff
  margin-right: 10px;
  width: 40px;
  height: 28px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
}
.landButton:hover {
  background-color: #cde1f89c;
  transition: 0.4s;
}
.search {
  width: 40px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 102;
  position: absolute;
  background-color: #f2f3f5;
  top: 17px;
  right: 321px;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
}
.searchChange {
  right: 181px;
  transition: 0.3s;
  background-color: rgb(217, 236, 255);
}
.line {
  position: absolute;
  top: 64px;
  height: 1px;
  width: 100vw;
  background-color: #59575718;
  z-index: 99;
}
@media (max-width: 1100px) {
  .input {
    font-size: 13px;
  }
  .search {
    width: 30px;
  }
}
@media (max-width: 720px) {
  .landButton {
    margin-right: 0px;
  }
  .holder {
    width: 0;
  }
  .badge {
    display: none;
  }
  .search {
    right: 264px;
  }
  .message-btn {
     display: none;
  }
}
@media (max-width: 666px) {
  .search {
    display: none;
  }
}
// @media (max-width: 1210px) {
//   .search {
//     display: none;
//   }
//   .badge {
//     display: none;
//   }
// }
.tablead {
  position: absolute;
  top: 6px;
  left: 10px;
  z-index: 2;
  white-space: nowrap;
  padding: 0px 3px;
  background-color: #ee502f;
  border-radius: 20px;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  transform: scale(0.5);
}
}
</style>