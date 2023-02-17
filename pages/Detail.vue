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
  mounted() {
    this.getAct(this.$route.query.article_id)
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