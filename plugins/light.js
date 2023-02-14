import Vue from 'vue'

Vue.prototype.light= function (word,str){
    // 添加正则
    const reg = new RegExp(word, 'ig') // ig 是全局匹配
    // 使用replace方法替换元素产生高亮
    return str.replace(reg, function(match) {
      return `<span style="color:red;font-weight: bold;">${match}</span>`
    })
  }