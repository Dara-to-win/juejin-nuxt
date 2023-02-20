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
.lh-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: hidden;
  background-color: #f2f3f6;
  // .ads {
  // }
  @media screen and (max-width: 1000px) {
    .ads {
      display: none;
    }
  }
}
</style>
