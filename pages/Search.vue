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
  watchQuery: ['search'],
  asyncData({ $axios,route}) {
    console.log()
    const postData = {
      articleStatus: 0, // 根据文章状态查询0-草稿箱1-待审核2-已发布
      category: '', // 不传默认不根据分类查询,传具体的分类名称
      content: route.query.search, // 搜索字段(可搜索内容、标题、快照)模糊查询
      current: 1, // 当前页数
      lable: '', // 不传默认不根据标签查询,传具体的标签名称
      pageSize: 20, // 一页共几条数据
      sortField: '', // 排序字段可以按照创建时间、点赞量等对结果排序
      sortOrder: '', // 默认升序排序
    }
    return $axios
      .post('/api/article/current_list', postData)
      .then((res) => {
        const Atc = res.data.data.list
        return { Atc }
      })
      .catch((err) => {
        console.log(err)
      })
  },
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
    this.setMargin()
    this.$bus.$on('searchAtc',(current) => this.searchAct(this.word,current))
    this.resize=window.addEventListener('resize', this.throttle(this.setMargin),200);
  },
  beforeDestroy() {
    this.$bus.$off('searchAtc')
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    searchAct(content,current) {
      this.postData.content = content
      this.postData.current = current
      this.$axios
        .post(
          '/api/article/current_list',
          this.postData
        )
        .then((res) => {
         this.Atc = [...this.Atc, ...res.data.data.list]
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setMargin(){
      const width = document.documentElement.clientWidth;
      const nav = document.querySelector('.essays');
      const marginWidth = (width - 980) / 2;
      if(marginWidth > 0 && width > 1000){
        nav.style.marginLeft = marginWidth + 'px';
      }
    }
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
}
@media (max-width: 1000px) {
.essays{
  margin-left:0!important;
  max-width: 900px;
}
}
</style>