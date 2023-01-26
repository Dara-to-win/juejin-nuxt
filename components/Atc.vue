<template>
  <div class="container">
    <div class="atc-main">
      <div class="article-title">{{ atcData.title }}</div>
      <div class="author-info flex">
        <el-avatar><img :src="atcData.avatar" /> </el-avatar>
        <div class="author-info-box">
          <div class="author-name" >{{ atcData.author }}</div>
          <div class="meta-box">
            <span style="font-weight:normal;font-size: 14px;letter-spacing:1px">2022年08月26日 22:41 · 阅读 {{atcData.view_count}}</span>
          </div>
        </div>
        <button class="follow-button">+ 关注</button>
      </div>
      <div class="markdown-body">
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
      <div class="author"></div>
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
    <el-backtop :bottom="100" :visibility-height="50"></el-backtop>
    <el-backtop :bottom="100" :visibility-height="50"></el-backtop>
    <div class="suspended-panel"></div>
    <div class="suspended-panel"></div>
  </div>
</template>
<script>
import MarkdownPreview from './preview/MarkdownPreview'
export default {
  name: "Atc",
  components:{MarkdownPreview},
  data() {
    return {
      activeName: "tab0",
      tabPosition: "right",
      scroll: 0,
      navList: [],
      atcData: "",
      index: 5,
      catalogue: false,
      fixed:'',
      top:'',
    };
  },
  mounted() {
    setTimeout(() => {
      this.selectAllTitle();
    }, 500); // 使用定时器,不然获取不到dom元素
    this.atcData = JSON.parse(window.sessionStorage.getItem("atcData"))
    this.$bus.$on('scrolNumberChange', (newNumber,oldNumber) => {
      this.loadScroll()
      this.scroll=newNumber
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
      const total = jump[index].offsetTop - 80;
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
  width: 100%;
  margin: 5px 20px 50px 100px;
  background-color: white;
  padding: 25px 20px 20px 20px;
  border-radius: 5px;
}

.el-tabs__header.is-right {
  height: auto;
  width: 100%;
}

.aside {
  height: auto;
  border-radius: 5px;
  margin-right: 50px ;
  width: 300px;
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
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  justify-content: center;
  align-items: flex-start;
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
