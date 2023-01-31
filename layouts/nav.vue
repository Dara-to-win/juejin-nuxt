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
    computed:{
    ...mapState('login',['isLoginDialogShow']),
    ...mapState('register',['isRegisterDialogShow'])
  }
}
</script>