<template>
  <div class="lh-container">
    <!-- 左边文章区 -->
    <Essays  :homeDatas="homeDatas" :loading="loading"/>
    <!-- 右区广告区 -->
    <Adv class="ads"/>
  </div>
</template>

<script>
import Essays from './Essays'
import Adv from './Adv'

export default {
  name: 'LowerHalf', 
  components: { Essays, Adv },
  props:{
    homeDatas:{
       type:Array,
       required:false,
       default(){return []},
    },
    loading:{
       type:Boolean,
       required:false,
       default(){return false},
    }
  },
  data() {
    return {}
  },
 
}
</script>

<style scoped lang="less">
// 导入主题样式
@import '~/static/css/theme/theme.less';
.setTheme();
.theme(@bg-color, @font-color, @tip-background-color, @tip-font-color, @theme-gray, @hover-color, @search, @login-bg, @login-color, @lowerhalf, @logo){
.lh-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: hidden;
  background-color: @lowerhalf;
  // .ads {
  // }
  @media screen and (max-width: 1000px) {
    .ads {
      display: none;
    }
  }
}
}
</style>
