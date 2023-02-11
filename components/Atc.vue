<template>
  <div class="container">
    <div class="atc-main">
      <div class="article-title">{{ atcData.title }}</div>
      <div class="author-info flex">
        <el-avatar><img :src="atcData.avatar" /> </el-avatar>
        <div class="author-info-box">
          <div class="author-name" >{{ atcData.author }}</div>
          <div class="meta-box">
            <span style="font-weight:normal;font-size: 14px;letter-spacing:1px">2023年1月26日 22:41 · 阅读 {{atcData.viewCount}}</span>
          </div>
        </div>
        <button class="follow-button">+ 关注</button>
      </div>
      <div class="markdown-body">
        <img :src='atcData.snapshot' style="max-width:750px;">
        <MarkdownPreview
          v-if="atcData"
          :initialValue="atcData.content"
          style="height: auto"
        />
      </div>
      <!-- <div class="comment-box">评论
        <div class="comment">
        </div>
      </div> -->
    </div>

    <div class="aside">
      <!-- 作者信息 -->
      <div class="author">
        <div class="user-item">
          <img :src="atcData.avatar" alt="" class="user-pic"/>
          <div class="user-box">
            <a class="username">
              <span class="name">{{ atcData.author }}</span>
            </a>
            <div class="user-position" title="">{{  }}</div>
          </div>
        </div>
        <div class="operate-btn" >
          <el-button type="primary" class="ui-btn">关注</el-button>
          <el-button type="primary" plain class="ui-btn-to">私信</el-button>
        </div>
        <div class="cut-off"></div>
        <div class="stat-item">
          <svg class="zan" xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26">
            <g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
              <ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57"></ellipse>
                <path fill="#7BB9FF" d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"></path>
            </g>
          </svg>
          <span class="content">获得点赞</span>
          <span class="count"> &nbsp;{{ }}</span>
        </div>
        <div class="stat-item">
          <svg width="25" height="25" viewBox="0 0 25 25" class="zan">
            <g fill="none" fill-rule="evenodd">
              <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle>
                <path fill="#7BB9FF" d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"></path>
            </g>
          </svg>
          <span class="content">文章被阅读</span>
          <span class="count"> &nbsp;{{atcData.viewCount}}</span>
        </div>
      </div>
      <!--  掘金app二维码-->
      <div class="app-link">
        <img src="~/static/assets/QRCode.jpg" style="max-width: 21%" />
        <div class="app-card">
          <div class="app-card-download">下载稀土掘金APP</div>
          <div class="app-card-text">一个帮助开发者成长的社区</div>
        </div>
      </div>
      <!-- 广告 -->
      <!-- 目录 -->
      <div class="catalog-box" :class="fixed" :style="{top:top}">
        <div
          class="mulu"
          style="font-size: 18px; font-weight: bold; padding: 16px"
        >
          目录
        </div>
        <hr style="opacity: 25%" />
        <div v-if="catalogue" class="catalog" >
          <el-tabs
            v-model="activeName"
            :tab-position="tabPosition"
            class="catalogue"
            @tab-click="handleClick"
          >
            <el-tab-pane 
              v-for="(item, index) in navList"
              :key="index"
              :name="'tab' + index"
              :class="item.lev"
              :label="item.name"
            ></el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div class="article-suspended-panel"> </div>
    <el-backtop :bottom="10" :right="10" :visibility-height="500"></el-backtop>
    <div class="suspended-panel"></div>
    <div class="suspended-panel"></div>
  </div>
</template>
<script>
import MarkdownPreview from './preview/MarkdownPreview'
export default {
  name: "Atc",
  components:{MarkdownPreview},
  props:{
    atcData:{
       type:Object,
       required:false,
       default(){return {}},
    }
  },
  data() {
    return {
      activeName: "tab0",
      tabPosition: "right",
      scroll: 0,
      navList: [],
      index: 5,
      catalogue: false,
      fixed:'',
      top:'',
    };
  },
  mounted() {
    setTimeout(() => {
      this.selectAllTitle();
    }, 1000); // 使用定时器,不然获取不到dom元素
    this.$bus.$on('scrolNumberChange', (newNumber,oldNumber) => {
      this.scroll=newNumber
      this.loadScroll()
     if (newNumber > oldNumber && newNumber>400) {
          this.top="20px"
        }
        if (newNumber < oldNumber && oldNumber>400) {
          this.top="84px"
        }
    if(newNumber>400){
      this.fixed='fixed'
    }else {
      this.fixed=''
    }
    })
    this.$nextTick(() => {
      setTimeout(() => {
        const navs = document.querySelectorAll(".el-tabs__item");
        for (let i = navs.length - 1; i >= 0; i--) {
          //  console.log($('#'+navs[i].id))
          //  从lev1到lev5分别添加不同到样式
          document.querySelector("#" + navs[i].id).style.padding = "0";
          if (this.navList[i].lev === "lev1") {
            document.querySelector("#" + navs[i].id).style.paddingLeft = "20px";
          } else if (this.navList[i].lev === "lev2") {
            document.querySelector("#" + navs[i].id).style.paddingLeft = "35px";
          } else if (this.navList[i].lev === "lev3") {
            document.querySelector("#" + navs[i].id).style.paddingLeft = "50px";
          } else if (this.navList[i].lev === "lev4") {
            document.querySelector("#" + navs[i].id).style.paddingLeft = "65px";
            document.querySelector("#" + navs[i].id).style.fontWeight = "400";
          } else if (this.navList[i].lev === "lev5") {
            document.querySelector("#" + navs[i].id).style.paddingLeft = "80px";
            document.querySelector("#" + navs[i].id).style.fontWeight = "400";
          }
        }
      });
    });
  },
  destroyed() {
    this.$bus.$off('scrolNumberChange')
  },
  methods: {
    handleClick(tab) {
      this.jump(tab.index);
    },
    jump(index) {
      const jump = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
      //  获取需要滚动的距离
      const total = jump[index].offsetTop - 100;
      //  Chrome
      document.body.scrollTop = total;
      //  Firefox
      document.documentElement.scrollTop = total;
      //  Safari
      window.pageYOffset = total;
      //  $('html, body').animate({
      //  'scrollTop': total
      //  }, 400);
    },
    loadScroll() {
      const self = this;
      // const navs = document.querySelectorAll(".el-tabs__item");
      //  var sections = document.getElementsByClassName('section');
      for (let i = self.navList.length - 1; i >= 0; i--) {
        if (self.scroll >= self.navList[i].offsetTop - 120) {
          self.activeName = "tab" + i;
          break;
        }
      }
    },
    selectAllTitle() {
      // 获取h1-6标题
      const title = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
      this.catalogue = true
      this.navList = Array.from(title); // 将获取的title存储到navList数组中
      this.navList.forEach((item) => {
        // 遍历navList数组，将每个title存储为item.name
        item.name = item.innerHTML;
      });
      this.navList.forEach((el) => {
        const index = el.localName.indexOf("h");
        el.lev = "lev" + el.localName.substring(index + 1, el.localName.length); // 截取下标，获取title的级别
      });
    },
  },
};
</script>
<style  scoped>
* {
  font-weight: bold;
}

.markdown-body {
  word-break: break-word;
  line-height: 1.75;
  font-weight: 400;
  font-size: 16px;
  overflow-x: hidden;
  color: #333;
}

h1,h2,h3,h4,h5,h6 {
  line-height: 5;
}

.suspended-panel {
  z-index: 2;
  width: 32px;
  height: auto;
  position: fixed;
  top: 140px;
  left: 40px;
}

.article-title {
  font-size: 32px;
  margin-bottom: 20px;
}

.author-info-box {
  margin-bottom: 20px;
  align-items: center;
  cursor: pointer;
}

.el-avatar {
  margin-right: 12px;
  cursor: pointer;
}

.author-name {
  font-size: 16px;
  cursor: pointer;
  font-weight:normal
}

.meta-box {
  margin-top: 2px;
  color: rgb(134, 134, 134);
}

.follow-button {
  margin: 15px 20px 15px auto;
  cursor: pointer;
  height: 34px;
  font-size: 14px;
  background: rgb(30, 128, 255, 0.05);
  border: 1px solid rgb(30, 128, 255, 0.3);
  border-radius: 4px;
  align-items: center;
  width: 52px;
  color: #1e80ff;
}

.follow-button:hover {
  background: rgb(30, 128, 255, 0.15);
  transition: 300ms;
}

.atc-main {
  width: 820px;
  background-color: white;
  padding: 32px 32px 0px 32px;
  border-radius: 5px;
}

.el-tabs__header.is-right {
  height: auto;
  width: 100%;
}

.aside {
  position: absolute;
  top: 0;
  right: 0;
  width: 25rem;
}
.author{
  border-radius: 4px;
  background: #fff;
  padding: 1.667rem;
}
.user-item{
  min-width: 0;
  max-width: 260px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 17px;
}
.user-pic{
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.user-box{
  width: 196px;
  height: 50px;
  margin-left: 16px;
  right: 0px;
}
.username{
  display: flex;
  align-items: center;
}
 .name{
  max-width: 128px;
  font-size: 1.333rem;
  font-weight: 500;
  line-height: 2rem;
  color: #252933;
  white-space: pre-wrap;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user-position{
  margin-top: 4px;
  font-size: 1.167rem;
  color: #515767;
  font-weight: 400;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.operate-btn{
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.ui-btn{
  border-radius: 4px;
  font-size: 14px;
  justify-content: center;
  padding-top: 7px;
  padding-bottom: 7px;
  width: 124px;
  height: 37px;
}
.ui-btn-to{
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  width: 122px;
  height: 36px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
}
.cut-off{
  height: 1px;
  background: #e4e6eb;
  display: block;
}
.stat-item{
  margin-top: 0.667rem;
  display: flex;
  align-items: center;
  height: 26px;
}
.zan{
  margin-right: 1rem;
}
.content{
  font-size: 1.167rem;
  color: #252933;
  font-weight: 400;
}
.count{
  font-size: 1.167rem;
  color: #252933;
  font-weight: 400;
}
.article-suspended-panel{
  position: fixed;
  top: 140px;
  z-index: 2;
}
.app-link {
  margin: 5px 0;
  cursor: pointer;
  display: inline-block;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
}

.app-card {
  display: inline-block;
}

.app-card-download {
  font-size: 16px;
  padding-bottom: 24px;
}

.app-card-text {
  color: #8a919f;
  border: 4px;
}

.mulu {
  background-color: white;
  border-radius: 5px;
}

.catalog {
  max-height: 500px;
  background-color: white;
  overflow: hidden;
  border-radius: 5px;
}
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  margin-top: 20px;
}
.catalogue {
  float: left;
  height:380px;
}
@media screen and (max-width: 1250px) {
  .suspended-panel {
    display: none;
  }
}

@media screen and (max-width: 1140px) {
  .aside {
    display: none;
  }
  .atc-main {
  margin: 0px 5px 50px 5px;
}
}
.fixed{
  position: fixed;
  width: 300px;
  transition:0.15s;
}
.catalog-box{
  transition:0.2s;
}
</style>
