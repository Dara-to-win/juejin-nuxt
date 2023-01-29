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
          <el-input v-model="input" placeholder="探索掘金社区"  class="input"  >
            <i slot="suffix" class="el-icon-search"></i>
          </el-input>

          <!-- 创作者中心按钮 -->
          <el-badge :value="1" class="badge" type="danger" >
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
                        style="width:48px">
                    </div>
                    <div class="user-detail">
                      <p class="name">用户12345678</p>
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
      // 广告组件高度
      adHeight: '',
    }
  },
  watch:{ 
    scrolNumber: {
      handler(newNumber, oldNumber) {
        // console.log(newNumber, oldNumber)
        // console.log('adHeight: ', this.adHeight)
        this.$bus.$emit('scrolNumberChange',newNumber,oldNumber)
        if (newNumber > oldNumber && newNumber > 400) {
          this.navShow=false
          this.$bus.$emit('linPopUp')
        }
        if (newNumber < oldNumber && oldNumber > 400) {
          this.navShow=true
          this.$bus.$emit('linPopDown')
        }
        // if(newNumber > oldNumber && newNumber > this.adHeight){
        //   this.$bus.$emit('slideDown')
        // }
        // if(newNumber < oldNumber && newNumber > this.adHeight){
        //   this.$bus.$emit('slideUp') 
        // }
        if(newNumber > this.adHeight){
          this.$bus.$emit('slideAppear')
          if(newNumber > oldNumber)
            this.$bus.$emit('slideDown')
          else
            this.$bus.$emit('slideUp') 
        }else{
          this.$bus.$emit('slideHide')
        }
      },
    },
  },
  mounted() {
   this.scroll = window.addEventListener("scroll", this.throttle(this.scrollToTop, 200));
   this.$bus.$on('getAdHeight', (data) => {
      this.adHeight = data;
   })
  },
  beforeDestroy() {
    window.removeEventListener('scroll',this.scroll)
    this.$bus.$off('getAdHeight')
  },
  methods:{
    scrollToTop() {
      // this.scrolNumber = document.body.scrollTop || document.documentElement.scrollTop 
      this.scrolNumber = window.pageYOffset 
    },
    jumpToIndex(){
      window.location.href = "/"
    }
  },
}
</script>