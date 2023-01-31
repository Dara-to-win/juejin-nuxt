<template>
  <div>
    <div class="holder"></div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  layout: 'nav',
  data(){
    return {
    }
  },
  mounted(){
  },
  methods:{
    searchAct(content){
    this.$axios.post("http://jj.hanbing777.top:80/api/article/current",{content}).then(res=>{
       this.Atc=res.data.data
        });
    }
  }
}
</script>

<style scoped>
.holder {
  height:64px;
}
</style>