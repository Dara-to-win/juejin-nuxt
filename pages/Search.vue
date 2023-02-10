<template>
  <div>
    <div class="holder"></div>
    <LinkPop :label='label' />
    <div class="essays">
    <Essays  :homeDatas="Atc" :loading="loading" :word="word"/>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  layout: 'nav',
  data() {
    return {
      Atc: [],
      loading:false,
      postData: {
        articleStatus: 0, // 根据文章状态查询0-草稿箱1-待审核2-已发布
        category: '', // 不传默认不根据分类查询,传具体的分类名称
        content: '', // 搜索字段(可搜索内容、标题、快照)模糊查询
        current: 1, // 当前页数
        lable: '', // 不传默认不根据标签查询,传具体的标签名称
        pageSize: 20, // 一页共几条数据
        sortField: '', // 排序字段可以按照创建时间、点赞量等对结果排序
        sortOrder: '', // 默认升序排序
      },
      label: [
        { text: '综合', parameter: '', badge: '', sublist: [] },
        { text: '文章', parameter: '', badge: '', sublist: [] },
        { text: '课程', parameter: '', badge: '', sublist: [] },
        { text: '标签', parameter: '', badge: '', sublist: [] },
        { text: '用户', parameter: '', badge: '', sublist: [] },
        ],
    }
  },
  computed:{
    word(){
      return this.$route.query.search
    }
  },
  mounted() {
    this.searchAct(this.word)
  },
  methods: {
    searchAct(content) {
      this.loading=true
      this.postData.content = content
      this.$axios
        .post(
          'http://jj.hanbing777.top/api/article/current_list',
          this.postData
        )
        .then((res) => {
         this.Atc=res.data.data.list
         this.loading=false
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>
.holder {
  height: 105px;
}
.essays{
  width:100%;
  max-width: 705px;
  overflow: hidden;
  margin-left: 15vw;
}
@media (max-width: 900px) {
.essays{
  margin-left:0;
  max-width: 900px;
}
}
</style>