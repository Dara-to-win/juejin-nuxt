<template>
  <div>
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
    return $axios.get('http://jj.hanbing777.top/api/article/current', {
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

<style scoped>
.holder {
  height: 64px;
}
</style>