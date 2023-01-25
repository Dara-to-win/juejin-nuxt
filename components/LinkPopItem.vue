<!-- 副导航栏中的每一项（可以有弹出卡片） -->
<template>
  <div>
    <li @mouseenter="isShow = !isShow" @mouseleave="isShow = !isShow">
      <span>{{info.main}}</span>
      <!-- 弹出卡片 -->
      <template v-if="info.sub && isShow">
        <!-- 如果没有副标题 sub，则 sub 为 undefined -->
        <div class="card">
          <!-- 弹出卡片里的子项目，数据来自父组件 -->
          <ul>
            <li v-for="(item, index) in info.sub" :key="index">{{item}}</li>
          </ul>
        </div>
      </template>
    </li>
  </div>
</template>

<script>
export default {
  name: "LinkPopItem",
 
  props: {
    info: {
       type:Object,
       required:false,
       default(){return {}},
    }
    // 包含本项目的名字 main 和 子项目 sub（如果有子项的话）
  },
   data() {
    return {
      isShow: false
    };
  },
  methods: {
    // showCard(){
    //   this.isShow = true
    // },
    // hideCard(){
    //   this.isShow = false
    // }
  }
};
</script>

<style scoped lang="less">
// 每个按钮
li {
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 6;
  height: 100%;
  padding: 0 10px;  
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: #1e80ff;
  }
  // 按钮弹出卡片
  .card {
    flex-wrap: wrap;
    position: absolute;
    top: 42px;
    left: 10px;
    width: 300px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 2%;
    // border: 1px solid pink;
    z-index: 2;
    &::before {
      content: "BBBBBB";
      position: absolute;
      top: -20px;
      width: 28px;
      opacity: 0;
    }
    // 弹出卡片里的子项目
    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      list-style: none;
      padding: 10px;
      li {
        height: 28px;
        line-height: 28px;
        margin-left: 8px;
        margin-top: 6px;
        margin-bottom: 6px;
        font-size: 13px;
        color: #71777c;
        background-color: #f4f5f5;
        border-radius: 14px;
        
        &:hover {
          color: #1e80ff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>