<template>
  <div>
    <div class="holder">
    </div>
    <LinkPop ref="link"/>
    <LowerHalf :homeDatas="atc" />
  </div>
</template>

<script>
// import axios from 'axios'  // 安装axios后引入/ 将axios挂载到原型上方便使用
export default {
  name:'IndexPage',
  layout: 'nav',
  asyncData({ $axios }) {
    return $axios.get('https://diandian210.top/article1.json').then((res) => {
      const atc = res.data
      for (const key in atc) {
        // 删除content文章详情，以及avatar头像属性
        delete atc[key].content
        delete atc[key].avatar
      }
      return { atc }
    })
  },
}
</script>
<style scoped>
.holder {
  height:111px;
}
</style>