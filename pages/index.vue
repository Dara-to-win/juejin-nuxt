<template>
  <div>
    <div class="holder"></div>
    <LinkPop ref="link" />
    <LowerHalf :homeDatas="atc" />
  </div>
</template>

<script>
// import axios from 'axios'  // 安装axios后引入/ 将axios挂载到原型上方便使用
export default {
  name: 'IndexPage',
  layout: 'nav',
  asyncData({ $axios }) {
    const postData = {
      category: '',
      current: 1,
      pageSize: 20,
      sortField: '',
      sortOrder: '',
    }
    return $axios.post('http://jj.hanbing777.top/api/article/current_list',postData).then((res) => {
        const atc = res.data.data
        return { atc }
      })
  },
  data(){
    return{
      atc:'',
      postData:{
      category: '',
      current: 1,
      pageSize: 20,
      sortField: '',
      sortOrder: '',
    }
    }
  },
  mounted(){
    this.$bus.$on('getAtc', (current,category,isInit) => {
      this.postData.current=current
      console.log(category==="综合")
      if(category!=="综合"||category!=="关注"){
        this.postData.category=category}
      this.$axios.post('http://jj.hanbing777.top/api/article/current_list',this.postData).then((res) => {
        if(isInit) {
          this.atc=res.data.data
        }else{this.atc=[...this.atc,...res.data.data]}
      })
    })
  },
  destroyed(){
    this.$bus.$off('getAtc')
  }
}
</script>
<style scoped>
.holder {
  height: 111px;
}
</style>