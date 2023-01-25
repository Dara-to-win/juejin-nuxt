<template>
  <div>
    <!-- <transition name="fade"> -->
    <div class="holder"></div>
    <div class="ad main">
      <!-- 提示信息 -->
      <div class="tip">
        <div class="left">
          <!-- 一个日历小图标 -->
          <!-- <svg width="60" height="30" viewBox="0 0 24 24" >
            <path fill="#FFCF8B" d="M8 2C8 1.72386 7.77614 1.5 7.5 1.5H6.5C6.22386 1.5 6 1.72386 6 2L5.9995 
            3H3C2.44772 3 2 3.47259 2 4.05556V7H22V4.05556C22 3.47259 21.5523 3 21 3H18V2C18 
            1.72386 17.7761 1.5 17.5 1.5H16.5C16.2239 1.5 16 1.72386 16 2V3H8V2ZM22 8.5H2V20
            .9444C2 21.5274 2.44772 22 3 22H21C21.5523 22 22 21.5274 22 20.9444V8.5Z" ></path>
                <rect x="5" y="12" width="3" height="2" rx="1" fill="#FF7D00" ></rect>
                <rect x="10.5" y="12" width="3" height="2" rx="1" fill="#FF7D00" ></rect>
                <rect x="5" y="16" width="3" height="2" rx="1" fill="#FF7D00" ></rect>
                <rect x="10.5" y="16" width="3" height="2" rx="1" fill="#FF7D00" ></rect>
                <rect x="16" y="12" width="3" height="2" rx="1" fill="#FF7D00" ></rect>
                <rect x="16" y="16" width="3" height="2" rx="1" fill="#FF7D00" ></rect>
            </svg> -->
          <h2 style="font-weight: 700">{{ helloInfo }}</h2>
          <p>点亮你在社区的每一天</p>
        </div>
        <div class="right">
          <el-button type="primary" plain>去签到</el-button>
        </div>
      </div>
      <!-- 广告组件 -->
      <div class="ad">
        <div v-for="(ad, index) in adInfo" :key="index" class="outsideDiv mt10">
          <a :href="ad.adUrl"
            ><img v-show="ad.isShow" :src="ad.imgUrl" alt="广告"
          /></a>
          <i
            class="el-icon-close insideDiv"
            @click="ad.isShow = !ad.isShow"
          ></i>
        </div>
      </div>
      <!-- 下载掘金 -->
      <div class="download mt10">
        <div class="left">
          <img src="~/static/assets/QRCode.jpg" alt="" />
        </div>
        <div class="right">
          <h3>下载掘金稀土APP</h3>
          <p>一个帮助开发者成长的社区</p>
        </div>
      </div>
      <!-- 作者榜 -->
      <div class="authorRank mt10">
        <h3>🎖️作者榜</h3>
        <div v-for="(author, index) in authorInfo" :key="index" class="author">
          <el-avatar :size="45" fit="fill" :src="author.avatarUrl"></el-avatar>
          <div>
            <h3 class="username">
              {{ author.username
              }}<img :src="author.levelUrl" alt="level" class="level" />
            </h3>
            <p>{{ author.introduce }}</p>
          </div>
        </div>
        <div class="totalRank">
          <a href="javascript:;">完整榜单 ></a>
        </div>
      </div>
    </div>
    <!-- </transition> -->
    <!-- <transition name="fade"> -->
    <div id="slide" :class="slideClass" >
      <!-- 广告组件 -->
      <div class="ad">
        <div v-for="(ad, index) in adInfo" :key="index" class="outsideDiv mt10">
          <a :href="ad.adUrl"
            ><img v-show="ad.isShow" :src="ad.imgUrl" alt="广告"
          /></a>
          <i
            class="el-icon-close insideDiv"
            @click="ad.isShow = !ad.isShow"
          ></i>
        </div>
      </div>
      <!-- 下载掘金 -->
      <div class="download mt10">
        <div class="left">
          <img src="~/static/assets/QRCode.jpg" alt="" />
        </div>
        <div class="right">
          <h3>下载掘金稀土APP</h3>
          <p>一个帮助开发者成长的社区</p>
        </div>
      </div>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Adv',
  data() {
    return {
      slideClass:'',
      bottom:'',
      adInfo: [
        {
          imgUrl: require('~/static/assets/adv1.jpg'),
          adUrl: '',
          isShow: true,
        },
        {
          imgUrl: require('~/static/assets/adv2.jpg'),
          adUrl:
            'https://juejin.cn/pin/7129334097113006116?utm_source=slide&utm_medium=banner&utm_campaign=reading',
          isShow: true,
        },
        // {
        //   imgUrl: require('~/static/assets/adv3.jpg'),
        //   adUrl: 'https://juejin.cn/book/7126538479051210766?utm_source=web_banner&utm_medium=banner&utm_campaign=Book_SK_0817',
        //   isShow: true
        // }
      ],
      helloInfo: '',
      authorInfo: [
        {
          avatarUrl: require('~/static/assets/avatar1.png'),
          username: 'YeeWang',
          levelUrl: require('~/static/assets/level6.png'),
          introduce:
            '前端@Lazada前端@Lazada前端@Lazada前端@Lazada前端@Lazada前端',
        },
        {
          avatarUrl: require('~/static/assets/avatar2.png'),
          username: 'YeeWang',
          levelUrl: require('~/static/assets/level6.png'),
          introduce:
            '前端@Lazada前端@Lazada前端@Lazada前端@Lazada前端@Lazada前端',
        },
        {
          avatarUrl: require('~/static/assets/avatar3.png'),
          username: 'YeeWang',
          levelUrl: require('~/static/assets/level6.png'),
          introduce:
            '前端@Lazada前端@Lazada前端@Lazada前端@Lazada前端@Lazada前端',
        },
      ],
      // adShow: true,
      // slideShow: false
    }
  },
  mounted() {
    this.getHelloInfo()
    const slide=document.getElementById('slide')
    this.$bus.$on('slideHide', () => {// 为slide过渡
      this.slideClass = 'slide' // 隐藏
    })
    this.$bus.$on('slideAppear', () => {
      this.slideClass = 'slideFixed' // 出现
    })
    this.$bus.$on('slideDown', () => {
      slide.style.bottom="50px" // 起
    })
    this.$bus.$on('slideUp', () => {
      slide.style.bottom="5px"// 落
    })
  },
  destroyed() {
    this.$bus.$off('slideHide')
    this.$bus.$off('slideAppear')
    this.$bus.$off('slideUp')
    this.$bus.$off('slideDown')
  },
  methods: {
    // 根据 Hour设置提示语
    getHelloInfo() {
      const date = new Date()
      const hour = date.getHours()
      if (hour < 6) {
        this.helloInfo = '凌晨好！'
      } else if (hour < 12) {
        this.helloInfo = '早上好！'
      } else if (hour < 18) {
        this.helloInfo = '中午好！'
      } else {
        this.helloInfo = '晚上好！'
      }
    },
    // 获取广告信息
    async asyncAdInfo() {
      const { data } = await axios.get('https://api.myjson.com/bins/8gdmr')
      return { adInfo: data }
    },
    // 获取作者信息
    async asyncAuthorInfo() {
      const { data } = await axios.get('https://api.myjson.com/bins/8gdmr')
      return { authorInfo: data }
    },
  },
}
</script>
<style scoped>
.ad {
  margin-top: 15px;
}
img {
  height: 200px;
}
i {
  cursor: pointer;
}
/* 提示信息部分 */
.tip {
  display: flex;
  padding: 0 15px 0;
  background-color: white;
  width: 240px;
  height: 100px;
  align-items: center;
}
.tip .left {
  flex: 2;
}
.tip .left p {
  margin-top: 5px;
  color: #666;
}
.tip .right {
  flex: 1;
}
.tip .right .el-button {
  /* margin-left: 15px; */
  text-align: center;
  width: 74px;
  height: 36px;
  padding: 0;
}
.tip .right .el-button:hover {
  background-color: #e8f2ff;
  color: #5a9df4;
  outline: none;
}
/* 广告部分 */
.mt10 {
  margin-top: 10px;
}
.outsideDiv {
  position: relative;
}
.insideDiv {
  position: absolute;
  display: none;
  right: 5px;
  top: 8px;
}
.outsideDiv:hover .insideDiv {
  display: block;
}
/* 下载部分 */
.download {
  display: flex;
  padding: 12px;
  background-color: white;
  width: 240px;
  height: 74px;
  align-items: center;
}
.download .left img {
  width: 50px;
  height: 50px;
}
.download .right {
  margin-left: 16px;
}
.download .right p {
  margin-top: 10px;
  color: #666;
}
/* 作者榜 */
.authorRank {
  width: 240px;
  background-color: white;
}
.authorRank > h3 {
  height: 42px;
  line-height: 42px;
  padding: 0 12px 0;
  border-bottom: 1px #ccc solid;
}
.author {
  height: 70px;
  padding: 12px;
}
.author .el-avatar {
  float: left;
}
.author div {
  float: left;
  padding-left: 6px;
  width: 170px;
}
.author .level {
  margin-left: 4px;
  width: 35px;
  height: 16px;
}
.author .username {
  height: 18px;
  line-height: 18px;
}
.author p {
  color: #666;
  margin-top: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.authorRank .totalRank {
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  text-align: center;
  border-top: 1px #ccc solid;
}
.authorRank .totalRank a {
  color: #5a9df4;
}
.slide {
  opacity: 0;
  pointer-events: none;
  position: fixed;
  transition: 0.2s;
}
.slideFixed {
  position: fixed;
  pointer-events: all;
  opacity: 1;
  transition:0.2s;
  bottom:0
}
.holder {
  width: 240px;
}
</style>
