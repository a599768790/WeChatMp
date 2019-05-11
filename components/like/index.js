// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // like:true,
    yesSrc:"images/like.png",
    noSrc:"images/dislike.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickView:function(e){
      if(true){
        let a = 1
        var b = 2
      }
      //console.log(b)//结果是：2(整个函数块)
      //console.log(a)//结果是：报错(块级定义)
    }
  }
})
