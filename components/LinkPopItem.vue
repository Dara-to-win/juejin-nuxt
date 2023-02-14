<!-- 副导航栏中的每一项（可以有弹出卡片） -->
<template>
  <div>
    <li @mouseenter="actived()" @mouseleave="deActived()">
      <span class="tag">{{labelList.text}}</span>
      <!-- 弹出卡片 --> 
      <transition name="fade">
        <!-- 如果没有副标题 sublist，则 sublist 为 undefined -->
        <div v-show="isShow" class="card" >
          <!-- 弹出卡片里的子项目，数据来自父组件 -->
          <ul>
            <li v-for="(item, index) in labelList.sublist" :key="index">{{item.text}}</li>
          </ul>
        </div>
      </transition>
    </li>
  </div>
</template>

<script>
export default {
  name: "LinkPopItem",
  props: {
    labelList: {
       type:Object,
       required:false,
       default(){return {}},
    }
    // 包含本项目的名字 text 和 子项目 sublist（如果有子项的话）
  },
   data() {
    return {
      isShow: false,
    };
  },
  methods: {
    actived(){
      if(typeof this.labelList.sublist[0]!=="undefined"){
     this.time= setTimeout(() => {
      if(this.isShow===false){
        this.isShow=true
        }},500)}
    },
    deActived(){
      clearTimeout(this.time)
      this.isShow=false
    }
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
  :hover {
    color: #1e80ff !important;
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
.fade-leave-active{
  transition:0.2s;
}
.fade-enter-active  {
  transition:0.5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>