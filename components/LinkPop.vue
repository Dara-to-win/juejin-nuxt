<!-- 弹出框，被用在主导航栏的下半部分的弹出显示 -->
<template>
  <div ref="linkpop" :class="linkPopClass" class="lk-container">
    <ul>
      <!-- ||lists -->
      <LinkPopItem
        v-for="(item, index) in  labelList"
        :key="index"
        :index="index"
        :labelList="item"
        @click.native="changeHome(index)"
      />
      <div style="width: 40px"></div>
    </ul>
    <div class="more" :class="moreChange">
      <!-- 透明渐变效果 -->
      <div class="gradient"></div>
      <!-- <img
        src="@/static/assets/more.svg"
        style="cursor: pointer; background-color: white"
        @click="more()"
      /> -->
      <div class="moreBtn">
        <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" @click="more()">
          <path d="M7.94971 11.9497H39.9497" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.94971 23.9497H39.9497" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.94971 35.9497H39.9497" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <transition name="more">
      <div v-show="moreShow" class="moreShow" :class="moreTagChange">
        <span
          v-for="(item, index) in labelList"
          :key="index"
          class="moreTag"
          @click="changeHome(index)"
          >{{ item.text }}</span
        >
      </div>
    </transition>
  </div>
</template>

<script>
import LinkPopItem from '@/components/LinkPopItem'
export default {
  name: 'LinkPop',
  components: {
    LinkPopItem,
  },
  props: {
    label: {
       type:Array,
       required:false,
       default(){return []},
    }
  },
  data() {
    return {
      linkPopClass: '',
      moreChange: '',
      moreShow: false,
      moreTagChange:'',
      up: [
        {
          transform: 'translateY(-64px)',
        },
      ],
      down: [
        {
          transform: 'translateY(64px)',
        },
      ],
    }
  },
  computed: {
    labelList(){
      if(JSON.stringify(this.label)==='[]'){// 判断是否为空数组
      return this.$store.state.homeConfig.homeConfig.labelList.slice(0,14)
      }else{
        return this.label
      }
    },
  },
  mounted() {
    this.$bus.$on('linPopDown', () => {
      this.linkPopClass = ''
      this.moreChange = ''
      this.moreTagChange=''
    })
    this.$bus.$on('linPopUp', () => {
      this.linkPopClass = 'fixed'
      this.moreChange = 'moreChange'
      this.moreTagChange='moreTagChange'
    })
    this.resize=window.addEventListener('resize', this.throttle(this.setNavPadding),200);
    this.setNavPadding();
  },
  destroyed() {
    window.removeEventListener('resize', this.resize)
    this.$bus.$off('linPopDown')
    this.$bus.$off('linPopUp')
  },
  methods: {
    changeHome(id) {
      const tag = document.querySelectorAll('.tag')
      const moreTag = document.querySelectorAll('.moreTag')
      this.actived(moreTag, id)
      this.actived(tag, id)
      this.$bus.$emit('changeActive') // 设置底下的综合高亮
      // 然后发请求，改数据
      this.$bus.$emit('initCurrent', 2) // 初始化页数
      const linkpop = tag[id].innerText
      window.sessionStorage.setItem('tag', linkpop)
      this.$bus.$emit('getAtc', 1, linkpop, true)
    },
    actived(tag, id) {
      for (const item of tag) {
        item.style.color = '#71777c'
      }
      tag[id].style.color = '#1e80ff'
    },
    more() {
      this.moreShow = !this.moreShow
    },
    setNavPadding(){
      const width = document.documentElement.clientWidth;
      const nav = document.querySelector('.lk-container');
      const paddingWidth = (width - 980) / 2;
      if(paddingWidth > 0 && width > 1000){
        nav.style.paddingLeft = paddingWidth + 'px';
      }
    },
  },
}
</script>

<style scoped lang="less">
// 导入主题样式
@import '~/static/css/theme/var.less';
// @import '~/static/css/theme/theme.less';
// .setTheme();
// .theme(@bg-color, @font-color, @tip-background-color, @tip-font-color, @theme-gray, @hover-color, @search, @login-bg, @login-color, @lowerhalf, @logo){
.lk-container {
  position: fixed;
  top: 64px;
  display: flex;
  justify-content: flex-start;
  border-top: 1px solid #e6e6e6;
  width: 100vw;
  background-color: @bg-color;
  padding-left: 150px;
  padding-top: 0;
  line-height: 36px;
  z-index: 5;
  transition:top 0.2s;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    width: fit-content;
    height: 46px;
    padding: 5px 5px;
    background-color: @bg-color;
    list-style: none;
    font-size: 14px;
    color: @tip-font-color;
  }
}
.more {
  position: fixed;
  width: 60px;
  right: 0px;
  top: 73px;
  display: none;
  z-index: 9;
  transition: 0.2s;
  .moreBtn {
    width: 30px;
    height: 30px;
    background-color: #fff;
    svg {
      border: 1px solid #e3e3e3;
      path {
        // background-color: #fff !important;
        stroke: #2f2f2f;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .more {
    display: flex;
  }
}
.moreChange {
  top: 9px;
}

.fixed {
  top: 0;
  transition: 0.2s;
}

.gradient {
  width: 30px;
  pointer-events: none;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    @bg-color
  );
}
.moreShow {
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 76px;
  height: 100%;
  top: 111px;
  right: 0px;
  background-color: @bg-color;
  transition: 0.2s;
  border-top: 1px solid #95999c44;
  border-left: 1px solid #95999c44;
}
.moreTagChange{
  top: 47px;
  transition: 0.2s;
}
.moreTag {
  white-space: nowrap;
  cursor: pointer;
  font-size: 14px;
  color: @theme-gray;
}
.moreTag:hover{
  color:#1e80ff
}
@media screen and (max-width: 600px) {
  .lk-container {
    overflow-x: auto;
    overflow-y: hidden;
  }
}
@media screen and (max-width: 960px) {
  .lk-container {
    padding-left: 0 !important;
  }
}
.more-leave-active {
  transition: 0.4s;
}
.more-enter-active {
  transition: 0.4s;
}
.more-enter,
.more-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
