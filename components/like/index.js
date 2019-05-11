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
      let like = this.properties.like
      let count = this.properties.count

      //count = like ? count-1 : count+1 //like是true实心的点击-1,false空心的点击+1
      this.setData({
        count: count,
        like: !like //取反
      })

      
    }
  }
})
