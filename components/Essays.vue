<!-- 全部文章页，主要做到无限向下滚动 -->
<template>
  <div class="es-container">
    <ul class="nav">
      <li :class="{ active: activeIndex == 1 }" @click="activate(1)" >推荐</li>
      <li :class="{ active: activeIndex == 2 }" @click="activate(2)" >最新</li>
      <li :class="{ active: activeIndex == 3 }" @click="activate(3)" >热榜</li>
    </ul>
    <div ref="essaylist" class="content" >
      <Essay v-for="(item, index) in homeDatas"
       :key="item.article_id" :homeData="item" :index="index"
       @click.native="jumpToDetail(item)"/>
    </div>
  </div>
</template>

<script>
import Essay from '@/components/Essay'
export default {
  name: 'Essays',
  components: {
    Essay,
  },
  props:{
     homeDatas: {
        type:Array,
        required:false,
        default(){return []}
    },
  },
  data() {
    return {
      // nav 栏激活 index
      activeIndex: 1,
      // 判断当前是否正在加载（正忙）
      busy: false,
      // 记录当前文章列表长度
      curEssaysLength: 0,
      // IntersectionObserver 对象，用来监听元素实现无限滚动
      // observer: new IntersectionObserver(
      //   (entries) => {
      //     if (!this.busy && entries[0].intersectionRatio > 0.75) {
      //       this.busy = true
      //       const p = new Promise((resolve, reject) => {
      //         // 加载更多文章
      //         this.loadMore()
      //         resolve()
      //       })
      //       p.then(() => {
      //         // 执行异步操作后的内容（目前没有）
      //       })
      //     }
      //   },
      //   {
      //     threshold: [0.75],
      //   }
      // ),
      // 测试无限滚动，用来新增的新文章数据
      newEssays:'',
    }
  },
  computed: {
  },
  mounted() {
    // 监听当前列表的最下部元素
    // setTimeout(() => {this.observer.observe(this.$refs.essaylist.lastElementChild)},300)
  },
  updated() {
    // 更新后，如果使得文章列表长度发生变化，则重新监听最下方的元素
    // if (this.$refs.essaylist.childNodes.length !== this.curEssaysLength) {
    //   this.observer.disconnect()
    //   this.observer.observe(this.$refs.essaylist.lastElementChild)
    //   this.busy = false
    // }
  },
  beforeDestroy() {
    // this.observer.disconnect()
  },
  methods: {
    activate(index) {
      this.activeIndex = index
    },
    // 模拟滚动到最下方时加载新数据
    // loadMore() {
    //   setTimeout(() => {
    //     this.essays = [...this.essays, ...this.newEssays]
    //   }, 1000)
    // },
    // 点击文章跳转到详情页
   jumpToDetail(item) {
    window.sessionStorage.setItem("atcData",JSON.stringify(item));
     const newRoute = this.$router.resolve({name:"Detail",query:{article_id:item.article_id}})
     window.open(newRoute.href, '_blank')
   }
    // getEssays(){
    //   // 发送 ajax 请求获取 essays
    // }
  },
}
</script>

<style scoped lang="less">
.es-container {
  margin: 15px 15px 0 0;
  .nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;

    padding: 20px;

    background-color: white;
    color: #909090;
    font-size: 14px;
    white-space: nowrap;
    li {
      padding: 0 15px;
      &:hover {
        color: #1e80ff;
        cursor: pointer;
      }
      &.active {
        color: #1e80ff;
      }
    }
  }
  content {
    width: 100%;
    
  }
}
@media screen and (max-width: 1000px) {
  .es-container {
    width: 100%;
    margin-right: 0;
  }
}
</style>
