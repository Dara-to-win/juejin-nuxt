<!-- 内容区的每一项 -->
<!-- 数据有：发稿人、发稿时间、分类、文章标题、文章内容前 x 个字、点赞、评论、查看 -->
<template>
<div>
  <div class="e-container">
    <!-- 稿件信息 -->
    <div class="info">
      <div>
        <span >{{ homeData.author }}</span>
      </div>
      <!-- <div>{{ dateFromNow }}</div> -->
      <div>
      <span>{{homeData.category}}</span>
      </div>
    </div> 
    <!-- 稿件内容预览 -->
    <div class="content">
      <div class="text">
        <div class="title" v-html="light(word,homeData.title)"></div>
        <div class="preview" v-html="light(word,homeData.preview)"></div>
        <!-- 查看、点赞、评论 -->
        <div class="feedback">
          <ul>
            <li>
              <img src="@/static/assets/view.png" style="height:16px;width:16px"/>
              <span>{{ homeData.viewCount }}</span>
            </li>
            <li>
              <img src="@/static/assets/like.png" style="height:16px;width:16px"/>
              <span>{{ homeData.collectCount }}</span>
            </li>
            <li>
              <img src="@/static/assets/comments.png" style="height:16px;width:16px"/>
              <span>{{ homeData.commentCount }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 可能存在的快照 -->
      <img v-if="homeData.snapshot" :src="homeData.snapshot" class="snapshot" />
    </div>
  </div>
  <hr style="opacity:0" size="1"/>
</div>
</template>

<script>
export default {
  name: 'Essay',
  
  props: {
    // 文章
    homeData: {
        type:Object,
        author: String,
        preview: String,
        title: String,
          // 点赞，查看，评论
          // 图片快照
        snapshot: String,
        required:false,
        default(){return {}}
    },
    index: {
      type:Number,
      required:false,
      default:1
      },
    word:{
      type: String,
      required: false,
      default() {
        return ''
      },
    }
  },
  data() {
    return {}
  },
  computed: {
  },
  mounted(){
  },
}
</script>

<style scoped lang="less">
// 导入主题样式
@import '~/static/css/theme/theme.less';
.setTheme();
.theme(@bg-color, @font-color, @tip-background-color, @tip-font-color, @theme-gray, @hover-color){
// 最外部容器，控制位置
.e-container {
  // 网格布局
  display: grid;
  // 三行：24px 自动 20px
  grid-template-rows: 24px 80px 20px;
  // 两列：480px 20px
  grid-template-columns: 1fr 120px;
  // 先行后列排布
  grid-auto-flow: row;
  // 整体网格在水平方向平均分布
  justify-content: start;
  // // 网格内的内容水平方向从头开始
  // justify-items: start;
  padding-left:10px;
  padding-top:10px;
  max-width: 700px;
  content-visibility: auto;
  contain-intrinsic-size: 124px;
  background-color: @bg-color;
  &:hover {
    background-color: @hover-color;
    cursor: pointer;
  }

  // 信息区
  .info {
    grid-column-start: span 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 13px;
    color: @theme-gray;
    white-space: nowrap;
    // border-right: 1px solid hsla(0,0%,59.2%,.2);
    & > div:first-child {
      color: @theme-gray;
    }

    div {
      margin: 7px 0;
      padding: 0 7px;
      border-right: 1px solid hsla(0,0%,59.2%,.2);
      span:hover {
        color: #1e80ff;
      }
      & > span:last-child {
        &::after {
          content: '';
          padding: 0;
        }
      }
    }
    & > div:nth-child(3) {
      border-right: none;
    }

    // border: 1px solid royalblue;
  }
  // 文章内容区
  .content {
    grid-column-start: span 2;
    grid-row-start: span 1;

    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 10px;
    .text {
      .title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: bold;
        color: @font-color;
      }
      .preview {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        margin: 10px 0;
        overflow: hidden;
        color: @theme-gray;
        font-size: 13px;
      }
      // 用户反馈区
      .feedback {
        grid-row-start: 3;
        grid-column-start: 1;

        // padding: 0 10px;
        height: 100%;
        width: 100%;

        ul {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          list-style: none;
          li {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: #4e5969;
            img {
              width: 20px;
              height: 20px;
            }
            span {
              padding-left: 5px;
              padding-right: 10px;
              height: 16px;
              line-height: 16px;
            }
          }
        }

        // border: 1px solid #55efc4;
      }
    }
    // 缩略图区
    .snapshot {
      grid-column-start: 2;
      grid-row-start: 2;
      grid-row-end: 4;

      width: 120px;
      height: 80px;
      margin-left: 10px;
      object-fit: cover;

      // background-size: contain;

      // border: 1px solid green;
    }
  }
}
@media screen and (max-width: 1000px) {
  .e-container {
    width: 100%;
    max-width: 1000px;
    grid-template-columns: 1fr;
  }
}
}
</style>
