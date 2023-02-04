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
    asyncData() {
        
    },
    mounted(){
        // 轮询，获得首页设置
      this.timer = setInterval(() => {
      }, 4000);
    },
    computed:{
    ...mapState('login',['isLoginDialogShow']),
    ...mapState('register',['isRegisterDialogShow'])
  }
}
</script>