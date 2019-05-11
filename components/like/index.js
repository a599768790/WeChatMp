// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    like:true,
    yesSrc:"images/like.png",
    noSrc:"images/dislike.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickView:function(e){
      console.log(e)
    }
  }
})
