<!-- 弹出框，被用在主导航栏的下半部分的弹出显示 -->
<template>
  <div ref="linkpop" :class="linkPopClass" class="lk-container">
    <ul>
      <!-- ||lists -->
      <LinkPopItem
        v-for="(item, index) in labelList"
        :key="index"
        :index="index"
        :labelList="item"
        @click.native="changeHome(index)"
      />
      <div style="width: 40px"></div>
    </ul>
    <div class="more" :class="moreChange">
      <!-- 透明渐变效果 -->
      <div class="holder"></div>
      <img
        src="@/static/assets/more.svg"
        style="cursor: pointer; background-color: white"
        @click="more()"
      />
      <div class="gradient"></div>
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
    labelList() {
      return this.$store.state.homeConfig.homeConfig.labelList
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
  },
  destroyed() {
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
  },
}
</script>

<style scoped lang="less">
.lk-container {
  position: fixed;
  top: 64px;
  display: flex;
  justify-content: flex-start;
  border-top: 1px solid #e6e6e6;
  width: 100vw;
  background-color: white;
  padding-left: 150px;
  padding-top: 0;
  line-height: 36px;
  z-index: 5;
  transition: 0.2s;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    width: fit-content;
    height: 46px;
    padding: 5px 5px;
    background-color: white;
    list-style: none;
    font-size: 14px;
    color: #71777c;
  }
}
.more {
  position: fixed;
  width: 60px;
  right: 0px;
  top: 73px;
  display: flex;
  flex-direction: row-reverse;
  margin-right: 10px;
  z-index: 9;
  transition: 0.2s;
}
.moreChange {
  top: 9px;
}
.holder {
  width: 10px;
  background-color: white;
}

.fixed {
  top: 0;
  transition: 0.2s;
}

.gradient {
  width: 40px;
  pointer-events: none;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.8)
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
  background-color: white;
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
  color: #71777c;
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

@media screen and (max-width: 1100px) {
  .lk-container {
    padding-left: 20px;
  }
  .more {
    margin-right: 0px;
  }
}

@media screen and (max-width: 1210px) {
  .lk-container {
    padding-left: 50px;
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
