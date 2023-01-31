<!-- 弹出框，被用在主导航栏的下半部分的弹出显示 -->
<template>
  <div ref="linkpop" :class="linkPopClass" class="lk-container">
    <ul>
      <LinkPopItem
        v-for="item in lists"
        :key="item.id"
        :index="item.id"
        :info="item.info"
        @click.native="changeHome(item.id)"
      />
    </ul>
  </div>
</template>

<script>
import LinkPopItem from '@/components/LinkPopItem'
export default {
  name: 'LinkPop',
  components: {
    LinkPopItem,
  },
  data() {
    return {
      linkPopClass: '',
      up: [
        {
          transform: 'translateY(-64px)',
        },
      ],
      down: [
        {
          transform: 'translateY(64px)',
        },
      ],
      // 测试数据，可发请求拿到
      lists: [
        {
          id: 1,
          info: {
            main: '综合',
          },
        },
        {
          id: 2,
          info: {
            main: '关注',
          },
        },
        {
          id: 3,
          info: {
            main: '后端',
            sub: [
              '后端',
              'java',
              'go',
              '算法',
              'Python',
              'SpringBoot',
              'MySQL',
              '数据库',
              '面试',
              'Spring',
              '架构',
              'Redis',
              'LeetCode',
              '前端',
              'Linux',
            ],
          },
        },
        {
          id: 4,
          info: {
            main: '前端',
            sub: [
              '前端',
              'JavaScript',
              'Vue.js',
              'React.js',
              'css',
              '面试',
              'TypeScript',
              '后端',
              'Node.js',
              '前端框架',
              '算法',
              'Webpack',
              '架构',
              '微信小程序',
              'Android',
            ],
          },
        },
        {
          id: 5,
          info: {
            main: 'Android',
            sub: [
              'Android',
              'Kotlin',
              'Flutter',
              '前端',
              'Android Jetpack',
              'Java',
              'APP',
              'Android Studio',
              '源码',
              '面试',
              '性能优化',
              '架构',
              'gradle',
              'iOS',
              '程序员',
            ],
          },
        },
        {
          id: 6,
          info: {
            main: 'iOS',
            sub: [
              'iOS',
              'Swift',
              'SwiftUl',
              'Flutter',
              '算法',
              '前端',
              'LeetCode',
              'Objective-C',
              'Xcode',
              'Mac',
              'WWDC',
              'Apple',
              '计算机视觉',
              'Android',
              '前端框架',
            ],
          },
        },
        {
          id: 7,
          info: {
            main: '人工智能',
            sub: [
              '人工智能',
              '深度学习',
              '算法',
              '机器学习',
              'Python',
              '计算机视觉',
              '后端',
              'NLP',
              'PyTorch',
              '神经网络',
              '数据分析',
              'TensorFlow',
              '程序员',
              '数据可视化',
              '自动驾驶',
            ],
          },
        },
        {
          id: 8,
          info: {
            main: '开发工具',
            sub: [
              '后端',
              '前端',
              '开源',
              'Git',
              'GitHub',
              '测试',
              'Linux',
              '设计',
              '数据库',
              '大数据',
              '程序员',
              'Python',
              'JavaScript',
              'Unity3D',
              '云原生',
            ],
          },
        },
        {
          id: 9,
          info: {
            main: '代码人生',
            sub: [
              '程序员',
              '前端',
              '后端',
              '算法',
              'JavaScript',
              'Python',
              'Java 架构 ',
              '面试',
              '开源',
              '大数据',
              '年终总结',
              'Linux',
              '数据结构',
              '数据库',
            ],
          },
        },
        {
          id: 10,
          info: {
            main: '阅读',
          },
        },
      ],
    }
  },
  mounted() {
    this.$bus.$on('linPopDown', () => {
      this.linkPopClass = ''
    })
    this.$bus.$on('linPopUp', () => {
      this.linkPopClass = 'fixed'
    })
  },
  destroyed() {
    this.$bus.$off('linPopDown')
    this.$bus.$off('linPopUp')
  },
  methods: {
    changeHome(id) {
      const tag = document.querySelectorAll('.tag')
      for (const item of tag) {
        item.style.color = '#71777c'
      }
      tag[id - 1].style.color = '#1e80ff'
      // 然后发请求，改数据
      this.$bus.$emit('initCurrent',2) // 初始化页数
      const linkpop=tag[id - 1].innerText
      window.sessionStorage.setItem('tag',linkpop)
      this.$bus.$emit('getAtc',1,linkpop,true)
    },
  },
}
</script>

<style scoped lang="less">
.lk-container {
  position: fixed;
  top: 64px;
  display: flex;
  justify-content: flex-start;
  border-top: 1px solid #e6e6e6;
  width: 100vw;
  background-color: white;
  padding-left: 150px;
  padding-top: 0;
  line-height: 36px;
  z-index: 5;
  transition: 0.2s;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    width: fit-content;
    height: 46px;
    padding: 5px 5px;
    background-color: white;
    list-style: none;
    font-size: 14px;
    color: #71777c;
  }
}
@media screen and (max-width: 600px) {
  .lk-container {
    overflow-x: auto;
    overflow-y: hidden;
  }
}
@media screen and (max-width: 960px) {
  .lk-container {
    padding-left: 0 !important;
  }
}

@media screen and (max-width: 1100px) {
  .lk-container {
    padding-left: 20px;
  }
}

@media screen and (max-width: 1210px) {
  .lk-container {
    padding-left: 50px;
  }
}

.fixed {
  top: 0;
  transition: 0.2s;
}
</style>
