<template>
    <div>
        <NavBar/>
        <Nuxt/>
        <!-- 注册登陆 -->
        <Land v-if="isLoginDialogShow"/>
        <Register v-if="isRegisterDialogShow"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
        }
    },
   async fetch(){
     await this.$axios.get('https://jj.hanbing777.top/api/article/getHomeConfig').then((res) => {
        this.$store.state.homeConfig.homeConfig = res.data.data
        }).catch((err)=>{ console.log(err)});
      },
    mounted(){
        // 轮询，获得首页设置
        this.timer=setInterval(()=>{
          this.getHome()
        },60000)
    },
    beforeDestroy(){
        clearInterval(this.timer)
    },
    methods:{
     async getHome(){
      await this.$axios.get('http://jj.hanbing777.top/api/article/getHomeConfig').then((res) => {
        this.$store.state.homeConfig.homeConfig = res.data.data
        }).catch((err)=>{ console.log(err)});
      }
    },
    computed:{
    ...mapState('login',['isLoginDialogShow']),
    ...mapState('register',['isRegisterDialogShow'])
  }
}
</script>