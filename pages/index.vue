<template>
<div>
  <NavBar/>
  <LinkPop/>
  <LowerHalf :homeDatas="atc"/>
  </div>
</template>

<script>
// import axios from 'axios'  // 安装axios后引入/ 将axios挂载到原型上方便使用
export default {
  name: 'IndexPage',
   asyncData({$axios}){
   return $axios.get('/article.json').then(res => {  
    const atc=res.data;
    for (const key in atc) {
      // 删除content文章详情，以及avatar头像属性
      delete atc[key].content;
      delete atc[key].avatar;
    } 
    return {atc};
  })},
  data(){
    return {
    }
  },
  mounted(){  
  }
}
</script>
