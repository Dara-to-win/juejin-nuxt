<!-- 全部文章页，主要做到无限向下滚动 -->
<template>
  <div class="es-container">
    <ul class="nav">
      <li :class="{ active: activeIndex == 1 }" style="border-right: 1px solid hsla(0,0%,59.2%,.2);" @click="activate(1)" >推荐</li>
      <li :class="{ active: activeIndex == 2 }" style="border-right: 1px solid hsla(0,0%,59.2%,.2);" @click="activate(2)" >最新</li>
      <li :class="{ active: activeIndex == 3 }" @click="activate(3)" >热榜</li>
    </ul>
    <hr style="opacity:0" size="1" />
    <el-skeleton v-show="loading" class="skeleton" animated :throttle="300" :loading="loading"/>
    <div v-show="!loading" ref="essaylist" class="content" >
      <Essay v-for="(item, index) in homeDatas"
       :key="item.articleID" :homeData="item" :index="index"
       @click.native="jumpToDetail(item.articleID)"/>
       <div class='io'></div>
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
    loading:{
       type:Boolean,
       required:false,
       default(){return false},
    }
  },
  data() {
    return {
      // nav 栏激活 index
      activeIndex: 1,
    }
  },
  mounted() {
    let current=2
    this.io=new IntersectionObserver((e)=>{
      if(e[0].isIntersecting){
       const tag= window.sessionStorage.getItem('tag')
       this.debounce(this.$bus.$emit('getAtc',current,tag,false),2000)
       current+=1
      }
    })
    this.io.observe( document.querySelector('.io'));
    this.$bus.$on('initCurrent',(Current) => {current=Current})
  },
  beforeDestroy() {
    this.io.disconnect()
    this.$bus.$off('initCurrent')
  },
  methods: {
    activate(index) {
      this.activeIndex = index
    },
   jumpToDetail(id) {
      const newRoute = this.$router.resolve({name:"Detail",query:{article_id:id}})
      window.open(newRoute.href, '_blank')
    },
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
    padding: 13px;
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
.io{
  height: 20px;
}
.skeleton{
  width: 700px;
  margin:1px;
  padding:15px;
  background-color:white;
}
</style>
