<template>
  <div>
    <div v-for="(item,index) in tenAtc" :key="index" class="tenAct" @click="jumpToDetail(item.articleID)">
        <div class="title">{{item.title}}</div>
        <div class="like">{{item.collectCount}}点赞 · {{item.commentCount}}评论
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tenAtc: '',
    }
  },
  mounted() {
    this.getTenAtc(sessionStorage.getItem('detailTag'))
  },
  methods: {
    getTenAtc(category) {
      const postData = {
        articleStatus: 0, // 根据文章状态查询0-草稿箱1-待审核2-已发布
        category, // 不传默认不根据分类查询,传具体的分类名称
        content: '', // 搜索字段(可搜索内容、标题、快照)模糊查询
        current: 1, // 当前页数
        lable: '', // 不传默认不根据标签查询,传具体的标签名称
        pageSize: 10, // 一页共几条数据
        sortField: '', // 排序字段可以按照创建时间、点赞量等对结果排序
        sortOrder: '', // 默认升序排序
      }
      this.$axios
        .post('https://jj.hanbing777.top/api/article/current_list', postData)
        .then((res) => {
          this.tenAtc = res.data.data.list
        })
        .catch((err) => {
          console.log(err)
        })
    },
    jumpToDetail(id) {      
      const newRoute = this.$router.resolve({
        name: 'Detail',
        query: { article_id: id },
      })
      window.open(newRoute.href, '_blank')
    },
  },
}
</script>

<style scoped lang='less'>
.tenAct{
    padding: 0.667rem 1.667rem;
    cursor: pointer;
}
.like{
    color: #909090;
    font-size: 1.167rem;
}
.title{
    font-size: 1.167rem;
}
.tenAct:hover{
    .title{
        color: #1171ee;
    }
}
</style>