<!-- 上方主导航栏 -->
<template>
<transition name="nav">
  <div v-show="navShow" class="bg-container" :class="navClass" >
    <div class="nav-container">
      <!-- 主导航栏上半部分 - 页面跳转 -->
      <el-row type="flex" class="nav-bar">
        <img src="@/static/assets/logo-text.svg" alt class="logo-text" />
        <img src="@/static/assets/logo.svg" alt class="logo-img" />
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
            <el-menu-item index="6"><el-link>商城</el-link></el-menu-item>
            <el-menu-item index="7"
              ><el-link href="" target="_blank">APP</el-link></el-menu-item
            >
            <el-menu-item index="8"
              ><el-link href="" target="_blank">插件</el-link></el-menu-item
            >
          </el-menu>
        </el-col>

        <!-- 主导航栏右半部分，包含搜索框、创作者中心按钮、消息提示和用户头像 -->
        <el-col :span="15" class="right">
          <!-- 输入框 -->
          <el-input v-model="input" placeholder="探索掘金社区"  class="input"  >
            <i slot="suffix" class="el-icon-search"></i>
          </el-input>

          <!-- 创作者中心按钮 -->
          <el-badge :value="1" class="badge" type="danger">
            <el-dropdown
              split-button
              type="primary"
              size="small"
              class="originator-drop"
            >
              创作者中心
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <img src="@/static/assets/write-article.svg" /> 写文章
                </el-dropdown-item>
                <el-dropdown-item>
                  <img src="@/static/assets/boiling.svg" /> 发沸点
                </el-dropdown-item>
                <el-dropdown-item>
                  <img src="@/static/assets/coding.svg" /> 写代码
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-badge>

          <!-- vip 图标 -->
          <img src="@/static/assets/logo-vip.svg" />

          <!-- 消息图标 -->
          <el-button
            type="text"
            icon="el-icon-bell"
            class="message-btn"
          ></el-button>

          <!-- 用户menu -->
          <div>
            <!-- 登录后 -->
            <el-popover placement="bottom" trigger="click">
              <!-- 信息框 -->
              <div class="infobox">
                <div class="user-card">
                  <div class="user-info">
                    <div class="avatar">
                      <img
                        src="@/static/assets/info/head protrait.jpg"
                        alt=""
                        class="lazy avatar"
                        width="40px"
                      />
                    </div>
                    <div class="user-detail">
                      <p class="name"></p>
                      <div class="ore">
                        矿石:
                        <span>2.8w</span>
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
                </div>
                <ul class="drop-down list box">
                  <li class="drop-down">
                    <div class="open-menu">
                      <img
                        src="@/static/assets/info/homepage.jpg"
                        alt=""
                        ip="image"
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
                      />
                      <el-link :underline="false">我的足迹</el-link>
                    </div>
                  </li>
                </ul>
                <div style="display: flex">
                  <el-link :underline="false">我的设置</el-link>
                  <div class="hide"></div>
                  <el-link :underline="false">退出登录</el-link>
                </div>
              </div>
              <div
                slot="reference"
                class="avatar-div"
                style="width: 40px; height: 40px"
              >
                <img
                  src="@/static/assets/info/head protrait.jpg"
                  style="width: 100%; height: 100%; cursor: pointer"
                />
              </div>
            </el-popover>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return {
      input:'',
      scrolNumber:"",
      navClass:'',
      navShow:true,
    }
  },
  watch:{ 
    scrolNumber: {
      handler(newNumber, oldNumber) {
        if (newNumber > oldNumber && newNumber>240) {
          this.navShow=false
          this.$bus.$emit('linPopUp')
          this.$bus.$emit('slideDown')
        }
        if (newNumber < oldNumber && oldNumber>240) {
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
   this.scroll = window.addEventListener("scroll", this.throttle(this.scrollToTop, 200));
  },
  destroyed() {
    window.removeEventListener('scroll',this.scroll)
  },
  methods:{
    scrollToTop() {
      this.scrolNumber =window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop;
    },
    jumpToIndex(){
      window.location.href = "/"
    }
  },
}
</script>