<template>
  <div class="detail">
    <div class="holder"></div>
    <Atc :atcData="Atc" />
  </div>
</template>
<script>
export default {
  name: 'Detail',
  layout: 'nav',
  data() {
    return {
      Atc: {},
    }
  },
  asyncData({$axios,route}) {
    return $axios.get('https://jj.hanbing777.top/api/article/current', {
          params:{id:route.query.article_id},
        })
        .then((res) => {
          const Atc=res.data.data
          return { Atc}
        })
        .catch((err) => {
          console.log(err)
        })
  },
  methods: {
    getAct(id) {
      this.$axios
        .get('/api/article/current', {
          params: { id },
        })
        .then((res) => {
          this.Atc = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
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
.holder {
  height: 64px;
}
.detail {
  background-color: @lowerhalf;
}
</style>