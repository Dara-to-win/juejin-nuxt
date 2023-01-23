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
  //  const URL=(process.env.NODE_ENV==='dev')?"http://localhost/article1.json":"https://diandian210.top/article1.json"
    return $axios.get(`${process.env.BASE_URL}/article1.json`).then((res) => {
      const atc = res.data
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