<template>
  <div>
    <div class="holder"></div>
  <Atc :atcData="Atc"/>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  layout: 'nav',
  data(){
    return {
      Atc:{}
    }
  },
  mounted(){
    this.getAct(this.$route.query.article_id)
    
  },
  methods:{
    getAct(id){
    this.$axios.post("http://jj.hanbing777.top:80/api/article/current",{id}).then(res=>{
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