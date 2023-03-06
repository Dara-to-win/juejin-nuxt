<!-- 全部文章页，主要做到无限向下滚动 -->
<template>
  <div class="es-container">
    <ul class="nav">
      <li
        v-for="(item, index) in screening"
        :key="index"
        :class="{ active: activeIndex == index }"
        class="border"
        @click="activate(index,item.parameter)"
      >
        {{ item.text }}
      </li>
    </ul>
    <hr style="opacity: 0" size="1" />
    <el-skeleton
      v-show="loading"
      class="skeleton"
      animated
      :throttle="200"
      :loading="loading"
    />
    <div v-show="!loading" ref="essaylist" class="content">
      <Essay
        v-for="(item, index) in homeDatas"
        :key="item.articleID"
        :homeData="item"
        :index="index"
        :word='word'
        @click.native="jumpToDetail(item.articleID,item.category)"
      />
      <div class="io"></div>
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
  props: {
    homeDatas: {
      type: Array,
      required: false,
      default() {
        return []
      },
    },
    loading: {
      type: Boolean,
      required: false,
      default() {
        return false
      },
    },
    word:{
      type: String,
      required: false,
      default() {
        return ''
      },
    }
  },
  data() {
    return {
      // nav 栏激活 index
      activeIndex: 0,
    }
  },
  computed: {
    screening() {
      return this.$store.state.homeConfig.homeConfig.screening
    },
  },
  mounted() {
    let current = 2 // 页数
    this.io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        const tag = window.sessionStorage.getItem('tag')
        if(this.$route.name==='Search'){
          this.$bus.$emit('searchAtc',current)
        }else{
          this.debounce(this.$bus.$emit('getAtc', current, tag, false), 2000)
        }
        current += 1
      }
    })
    this.io.observe(document.querySelector('.io'))
    this.$bus.$on('initCurrent', (Current) => {
      current = Current
    })// 设置为首次请求
    this.$bus.$on('changeActive', () => {
      this.activeIndex=0
    })// 设置为推荐高亮
  },
  beforeDestroy() {
    this.io.disconnect()
    this.$bus.$off('initCurrent')
    this.$bus.$off('changeActive')
  },
  methods: {
    activate(index,parameter) {
      this.activeIndex = index
      const tag = window.sessionStorage.getItem('tag')
      this.$bus.$emit('initCurrent',2) // 初始化页数
      this.$bus.$emit('getAtc', 1, tag, true,parameter)
    },
    jumpToDetail(id,category) {      
      window.sessionStorage.setItem('detailTag',category)
      const newRoute = this.$router.resolve({
        name: 'Detail',
        query: { article_id: id },
      })
      window.open(newRoute.href, '_blank')
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
.es-container {
  margin: 15px 15px 0 0;
  .nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    padding: 13px;
    background-color: @bg-color;
    color: @theme-gray;
    font-size: 14px;
    white-space: nowrap;
    width: 100%;
    li {
      background-color: @bg-color;
      color: @theme-gray;
      padding: 0 15px;
      &:hover {
        color: #1e80ff;
        cursor: pointer;
      }
      &.active {
        color: #1e80ff;
        pointer-events: none;
      }
    }
  }
  content {
    width: 100%;
    background-color: @bg-color;
    color: @theme-gray;
  }
}
.io {
  height: 20px;
  width: 700px;
}
@media screen and (max-width: 1000px) {
  .es-container {
    width: 100%;
    margin-right: 0;
  }
  .io {
    width: 0;
  }
}
.skeleton {
  width: 700px;
  margin: 1px;
  padding: 15px;
  background-color: @bg-color;
}
.border {
  border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
}
.border:last-child {
   border-right:none
}
.io{
  height: 20px;
}
.skeleton{
  width: 700px;
  margin:1px;
  padding:15px;
  background-color:@bg-color;
}
</style>
