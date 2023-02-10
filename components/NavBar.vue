<!-- 上方主导航栏 -->
<template>
  <transition name="nav">
    <div v-show="navShow" class="bg-container" :class="navClass">
      <div class="line"></div>
      <div class="nav-container">
        <!-- 主导航栏上半部分 - 页面跳转 -->
        <el-row type="flex" class="nav-bar">
          <img
            src="@/static/assets/logo-text.svg"
            class="logo-text"
            style="width: 107px;cursor: pointer;" @click="jumpToIndex()"
          />
          <img src="@/static/assets/logo.svg" alt class="logo-img" />
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
                  {{ index }}
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
                    {{ index }}
                  </el-link>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>

          <!-- 主导航栏右半部分，包含搜索框、创作者中心按钮、消息提示和用户头像 -->
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
                <div
                  v-show="!badgeShow"
                  class="searchMenu"
                  :style="{ width: searchWidth }"
                >
                  <div class="searchHead">
                    <span>搜索历史</span>
                    <span class="clear"> 清空</span>
                  </div>
                  <div class="searchList">{{}}</div></div>
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
            <!-- vip 图标 -->
            <img
              src="@/static/assets/logo-vip.svg"
              class="vip"
            />

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
                    :src="userAvatar"
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
      searchWidth:'',
    }
  },
  computed: {
    ...mapState('login', ['isLogin', 'isLoginDialogShow', 'userInput']),
    username() {
      return localStorage.getItem('username')
    },
    userAvatar() {
      return (
        this.$store.state.upLoadImg.imgSrc || localStorage.getItem('userAvatar')
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
    if (this.userAvatar && this.username && localStorage.getItem('userid')) {
      this.$store.state.login.isLogin = true
    } else {
      this.$store.state.login.isLogin = false
    }
    this.scroll = window.addEventListener(
      'scroll',
      this.throttle(this.scrollToTop, 200)
    )
  },
  updated() {},
  destroyed() {
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    ...mapMutations({
      login: 'login/OPEN_LOGIN_DIALOG',
      logout: 'login/LOGOUT',
    }),
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
      this.searchChange = ''
      this.searchColor = '#515767'
      this.badgeShow = true
      this.$refs.input.$refs.input.style.width = ''
      this.$refs.input.$refs.input.placeholder = '探索稀土掘金'
      sessionStorage.setItem('search',this.input)
      if(this.input){
        this.$router.push({
          name: "Search",
          query:{search: this.input}
          })
      }
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
  height: 65px;
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
        .el-dropdown-link {
          font-size: 13px;
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
        .searchMenu {
          width: 100%;
          position: absolute;
          margin-top: 11px;
          line-height: 2rem;
          right: 178px;
          z-index: 100;
          min-width: 6rem;
          font-size: 1rem;
          color: #869aab;
          list-style: none;
          text-align: left;
          border-radius: 0.17rem;
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
          border: 1px solid #ebebeb;
          background-color: #fff;
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
        }

        // 搜索框
        .input {
          width: 200px;
          margin-right: 12px;
          margin-top: -5px;
          height: 31px;
          transition: 0.3s;
          z-index: 101;
        }

        .holder {
          width: 140px;
        }
        @media (max-width: 720px) {
        .input{
          width: 125px;
        }
        }
        @media (max-width: 360px) {
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
        // 消息按钮
        .message-btn {
          height: 100%;
          font-size: 24px;
          margin: 0 15px;
          color: #8a919f; // #515767
          z-index: 110;
        }
        // border: 1px solid skyblue;
      }
    }
  }
}
.nav-leave-active {
  transition: 0.2s;
}
.nav-enter-active {
  transition: 0.2s;
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
  background-color: #cde1f84f;
  color: #1e80ff;
  margin-right: 10px;
  width: 40px;
  height: 28px;
  border-radius: 5px;
  border: 1px solid #1e80ff;
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
  top: 16px;
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
  top: 63px;
  height: 1px;
  width: 100vw;
  background-color: #59575718;
  z-index: 9;
}
.vip{
  margin: 0 10px 0 10px;
  z-index: 110
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
  .vip {
    display: none;
  }
  .holder {
    width: 0;
  }
  .badge {
     display: none;
   }
   .search {
    right: 275px;
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
</style>