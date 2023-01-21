<template>
  <div>
    <NavBar ref="nav"/>
    <LinkPop ref="link"/>
    <LowerHalf :homeDatas="atc" />
  </div>
</template>

<script>
// import axios from 'axios'  // 安装axios后引入/ 将axios挂载到原型上方便使用
export default {
  name: 'IndexPage',
  asyncData({ $axios }) {
    return $axios.get('/article1.json').then((res) => {
      const atc = res.data
      for (const key in atc) {
        // 删除content文章详情，以及avatar头像属性
        delete atc[key].content
        delete atc[key].avatar
      }
      return { atc }
    })
  },
  data() {
    return {
      scrolNumber:""
    }
  },
  watch:{ 
    scrolNumber: {
      handler(newNumber, oldNumber) {
        if (newNumber > oldNumber) {
          this.down()
        }
        if (newNumber < oldNumber) {
          this.up()
        }
      },
    },

  },
  mounted() {
   this.scroll = window.addEventListener("scroll", this.throttle(this.scrollToTop, 300));
  },
  destroyed() {
    window.removeEventListener('scroll',this.scroll)
  },
  methods:{
    scrollToTop() {
      const scrollTop =window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop;
      this.scrolNumber = scrollTop
    },
    up(){
      this.$refs.link.linkAnimation()
    },
    down(){
      this.$refs.nav.navAnimation()
    },
  },
}
</script>
