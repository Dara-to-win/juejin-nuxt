<!-- 上方主导航栏 -->
<template>
<transition name="nav">
  <div v-show="navShow" class="bg-container" :class="navClass" >
    <div class="nav-container">
      <!-- 主导航栏上半部分 - 页面跳转 -->
      <el-row type="flex" class="nav-bar">
        <img src="@/static/assets/logo-text.svg" alt class="logo-text" style="width:107px"/>
        <img src="@/static/assets/logo.svg" alt class="logo-img"  />
        <!-- 主导航栏左半部分，包含链接 -->
        <el-col :span="9" class="left">
          <!-- 屏幕较窄时的下拉链接列表 -->
          <el-dropdown trigger="click" class="nav-link-dropdown">
            <span class="el-dropdown-link" @click="jumpToIndex()">
              首页
              <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>沸点</el-dropdown-item>
              <el-dropdown-item>直播</el-dropdown-item>
              <el-dropdown-item>活动</el-dropdown-item>
              <el-dropdown-item>商城</el-dropdown-item>
              <el-dropdown-item>APP</el-dropdown-item>
              <el-dropdown-item>插件</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- 完整的导航链接 -->
          <el-menu default-active="1" class="nav-link" mode="horizontal">
            <el-menu-item index="1" @click="jumpToIndex()"><el-link>首页</el-link></el-menu-item>
            <el-menu-item index="2"
              ><el-link href="https://juejin.cn/pins" target="_blank"
                >沸点</el-link
              ></el-menu-item
            >
            <el-menu-item index="3"
              ><el-link href="https://juejin.cn/course" target="_blank"
                >课程</el-link
              ></el-menu-item
            >
            <el-menu-item index="4"
              ><el-link href="https://juejin.cn/live" target="_blank"
                >直播</el-link
              ></el-menu-item
            >
            <el-menu-item index="5"
              ><el-link href="https://juejin.cn/events/all" target="_blank"
                >活动</el-link
              ></el-menu-item
            >
            <el-menu-item index="6"><el-link>竞赛</el-link></el-menu-item>
            <el-menu-item index="7"><el-link >商城</el-link></el-menu-item
            >
          </el-menu>
        </el-col>

        <!-- 主导航栏右半部分，包含搜索框、创作者中心按钮、消息提示和用户头像 -->
        <el-col :span="15" class="right">
          <!-- 输入框 -->
          <el-input ref="input" v-model="input"  placeholder="探索稀土掘金"  class="input" @focus="inPut()" @blur="outPut()" >
          </el-input>
          <div class="search" :class="searchChange">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M12.4008 12.4008C14.744 10.0577 14.744 6.25871 12.4008 3.91556C10.0577 1.57242 6.25871 1.57242 3.91556 3.91556C1.57242 6.25871 1.57242 10.0577 3.91556 12.4008C6.25871 14.744 10.0577 14.744 12.4008 12.4008ZM12.4008 12.4008L15.5828 15.5828" :stroke="searchColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
          <!-- 创作者中心按钮 -->
          <div  class="holder">
          <transition name="badge">
          <el-badge v-show="badgeShow" :value="1" class="badge" type="danger" >
            <el-dropdown
              split-button
              type="primary"
              size="small"
              class="originator-drop"
            >
              创作者中心
              <el-dropdown-menu slot="dropdown">
                <div @click="jump2Editor()" >
                <el-dropdown-item >
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
          <!-- vip 图标 -->
          <img src="@/static/assets/logo-vip.svg" style="margin:0 10px 0 10px;z-index: 110;"/>

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
                       :src="userAvatar"
                        alt=""
                        class="lazy avatar"
                        style="width:48px; height:48px; cursor: pointer;border-radius:50%;" >
                    </div>
                    <div class="user-detail">
                      <p class="name">{{username}}</p>
                      <div class="ore" >
                        <span style="font-size:12px;">矿石:2.8w</span>
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
                    <div class="jscore" style="background-color: #fff">
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
                   <hr style="opacity:25%" />
                </div>
                <ul class="drop-down list box">
                  <li class="drop-down">
                    <div class="open-menu">
                      <img
                        src="@/static/assets/info/homepage.jpg"
                        alt=""
                        ip="image"
                        style="width:20px"
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
                        style="width:20px"
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
                        style="width:20px"
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
                        style="width:20px"
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
                        style="width:20px"
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
                        style="width:20px"
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
                        style="width:20px"
                      />
                      <el-link :underline="false">我的足迹</el-link>
                    </div>
                  </li>
                </ul>
                 <hr style="opacity:25%" />
                <div style="display:flex; margin-top:10px">
                  <el-link :underline="false">我的设置</el-link>
                  <div class="hide"></div>
                  <el-link :underline="false" @click='logout()'>退出登录</el-link>
                </div>
              </div>
              <div
                slot="reference"
                class="avatar-div"
                style="width: 40px; height: 40px;margin-right:10px"
              >
                <img
                  :src="userAvatar"
                  style="width: 100%; height: 100%; cursor: pointer;border-radius:50%;"
                />
              </div>
            </el-popover>
            <!-- 登录前 -->
            <el-button v-if="!isLogin" class="landButton" size="small" @click="login()"  >登录</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  </transition>
</template>

<script>
import { mapMutations,mapState} from 'vuex';
export default {
  name: 'NavBar',
  data(){
    return {
      input:'',
      scrolNumber:"",
      navClass:'',
      navShow:true,
      badgeShow:true,
      inputClass:'',
      searchChange:'',
      searchColor:'#515767',
    }
  },
  computed: {
    ...mapState('login', ['isLogin', 'isLoginDialogShow', 'userInput']),
    username(){
      return localStorage.getItem('username')
    },
    userAvatar(){
      return this.$store.state.upLoadImg.imgSrc || localStorage.getItem('userAvatar')
    },
  },
  watch:{ 
    scrolNumber: {
      handler(newNumber, oldNumber) {
        this.$bus.$emit('scrolNumberChange',newNumber,oldNumber)
        if (newNumber > oldNumber && newNumber>400) {
          this.navShow=false
          this.$bus.$emit('linPopUp')
          this.$bus.$emit('slideDown')
        }
        if (newNumber < oldNumber && oldNumber>400) {
          this.navShow=true
          this.$bus.$emit('linPopDown')
          this.$bus.$emit('slideUp') 
        }
        if(newNumber >1300){
          this.$bus.$emit('slideAppear')
        }else{
          this.$bus.$emit('slideHide')
        }
      },
    },
  },
  mounted() {
    if(this.userAvatar && this.username && localStorage.getItem('userid')){
    this.$store.state.login.isLogin=true
   }else{
    this.$store.state.login.isLogin=false
   }
   this.scroll = window.addEventListener("scroll", this.throttle(this.scrollToTop, 200)); 
  },
  updated(){
  },
  destroyed() {
    window.removeEventListener('scroll',this.scroll)
  },
  methods:{
    ...mapMutations({
        login:'login/OPEN_LOGIN_DIALOG',
        logout:'login/LOGOUT',
      }),
    scrollToTop() {
      this.scrolNumber = document.body.scrollTop || document.documentElement.scrollTop 
    },
    jumpToIndex(){
      window.location.href = "/"
    },
    jump2Editor(){
      if(this.$store.state.login.isLogin){
        window.location.href = "/Editor"
      }else{
        alert("请先登录")
      }
    },
    inPut(){
      if(document.body.clientWidth>1000){
      this.searchColor="#409EFF"
      this.badgeShow=false
      this.searchChange="searchChange"
      this.$refs.input.$refs.input.style.transition="0.4s"
      this.$refs.input.$refs.input.style.width="340px"
      }
    },  
    outPut(){
      this.searchChange=""
      this.searchColor="#515767"
      this.badgeShow=true
      this.$refs.input.$refs.input.style.width=""
    },
  },
}
</script>
<style scoped lang="less">
.bg-container {
  width: 100vw;
  background-color: #fff;
  z-index: 100;
  position: fixed;
  .nav-container {
    margin: 0 auto;
    width: 100%;
    .nav-bar {
      height: 64px;
      align-items: center;
      background-color: white;

      // logo 区域
      .logo-text {
        width: 100px;
        height: 33px;
        margin-left: 20px;
      }
      .logo-img {
        display: none;
        width: 31px;
      }
      // 媒体查询要写在下面才能生效
      @media (max-width: 640px) {
        .logo-text {
          display: none;
        }
        .logo-img {
          display: block;
          margin-left: 20px;
        }
        .el-dropdown-link{
          font-size:13px
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
        margin-left: 10px;

        // 导航栏左侧宽度较窄时的下拉导航链接
        .nav-link-dropdown {
          font-size: 16px;
          color: #1e80ff;
          display: none;
          cursor: pointer;
        }

        // 完整的导航链接部分
        .nav-link {
          border-bottom: 1px solid white;
          margin-left: 13px;
          .el-menu-item {
            width: 50px;
            font-size: 16px;
            padding: 0 10px;
            transition: none !important;
            &.is-active {
              color: #1e80ff;
              border-bottom: none;
            }
          }
        }

        @media (max-width: 1230px) {
          .nav-link-dropdown {
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

        // 搜索框
        .input {
          max-width: 200px;
          min-width: 130px;
          margin-right: 12px;
          margin-top:-5px;
          height: 31px;
          transition: 0.4s;
          z-index: 101;
          // 搜索框的图标
          .search {
            margin-top: 5px;
            width: 30px;
            line-height: 30px;
            border-radius: 5px;
            background-color: #f2f3f5;
            color:#86909c;
            font-weight: bold;
          }
        }
        .holder{
            width: 140px;
          }
        @media (max-width: 360px) {
          .input {
            display: none;
          }
        }
        
        // 创作者中心下拉按钮和消息气泡
        .badge {
          right: 60px;
          z-index:100;
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
        // 消息按钮
        .message-btn {
          height: 100%;
          font-size: 24px;
          margin: 0 15px;
          color:#8a919f;// #515767
          z-index: 110;
        }
        // border: 1px solid skyblue;
      }
    }
  }
}
.nav-leave-active{
  transition: 0.2s;
}
.nav-enter-active{
  transition: 0.15s;
}
.nav-enter, .nav-leave-to  {
  transform: translateY(-100%)
}
.badge-leave-active{
  transition: 0.4s;
}
.badge-enter-active{
  transition: 0.4s;
}
.badge-enter, .badge-leave-to  {
  transform: translateX(20%);
  opacity:0;
}
.landButton{
  border-color:#1e80ff;
  background-color:#cde1f84f;
  color:#1e80ff;
  margin-right:10px;
}
.search{
    width: 44px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 102;
    position: absolute;
    background-color: #f2f3f5;
    top: 19px;
    right:325px;
    border-radius: 5px;
    transition: 0.4s;
    cursor:pointer;
}
.searchChange{
  right:185px;
  transition: 0.4s;
  background-color:rgb(217, 236, 255);
}
@media (max-width: 920px) {
   .input{
     font-size: 13px;
  }
  .search{
    width: 30px;
  }
}
@media (max-width: 700px) {
  .landButton{
    margin-right:0px;
  }
  .badge {
   display: none;
  }
  .message-btn{
   display: none;
    }
  .holder{
   width: 0;
  }
  .search{
    display: none;
  }
}
</style>