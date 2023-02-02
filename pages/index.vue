<template>
  <div>
    <div class="holder"></div>
    <LinkPop ref="link" />
    <LowerHalf :homeDatas="atc" :loading="loading"/>
  </div>
</template>

<script>
// import axios from 'axios'  // 安装axios后引入/ 将axios挂载到原型上方便使用
export default {
  name: 'IndexPage',
  layout: 'nav',
  asyncData({ $axios }) {
    const postData = {
      articleStatus:2,// 根据文章状态查询0-草稿箱1-待审核2-已发布  
      category: '',// 不传默认不根据分类查询,传具体的分类名称
      content:'',// 搜索字段(可搜索内容、标题、快照)模糊查询
      current: 1,// 当前页数
      lable:'',// 不传默认不根据标签查询,传具体的标签名称
      pageSize: 20,// 一页共几条数据
      sortField: '',// 排序字段可以按照创建时间、点赞量等对结果排序
      sortOrder: '',// 默认升序排序
    }
    return $axios.post('http://jj.hanbing777.top/api/article/current_list',postData).then((res) => {
        const atc = res.data.data.list
        return { atc }
      })
  },
  data(){
    return{
      loading:false,
      atc:'',
      postData:{
      articleStatus:2,// 根据文章状态查询0-草稿箱1-待审核2-已发布  
      category: '',// 不传默认不根据分类查询,传具体的分类名称
      content:'',// 搜索字段(可搜索内容、标题、快照)模糊查询
      current: 1,// 当前页数
      lable:'',// 不传默认不根据标签查询,传具体的标签名称
      pageSize: 20,// 一页共几条数据
      sortField: '',// 排序字段可以按照创建时间、点赞量等对结果排序
      sortOrder: '',// 默认升序排序
    }
    }
  },
  mounted(){
    this.$bus.$on('getAtc', (current,category,isInit) => {// 页数，标签，是否重新加载
      if(isInit){
        this.loading=true
      }
      this.postData.current=current
      if(category!=="综合"&&category!=="关注"){
        this.postData.category=category}else{ this.postData.category=''}
      this.$axios.post('http://jj.hanbing777.top/api/article/current_list',this.postData).then((res) => {
        if(isInit) {
          this.atc=res.data.data.list
        }else{this.atc=[...this.atc,...res.data.data.list]}
        this.loading=false
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