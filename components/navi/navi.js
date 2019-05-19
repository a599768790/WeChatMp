// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    first:Boolean,
    latest:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: { 
    leftSrc: "images/preblack.png",
    disLeftSrc: "images/prewhite.png",
    rightSrc: "images/nextblack.png",
    disRightSrc: "images/nextwhite.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(event){
      //如果不是最新的，就可以点击←按钮
      if(!this.properties.latest){
        this.triggerEvent('left', {}, {})
      }
    },
    onRight:function(event){
      //如果不是第一期，就可以点击→按钮
      if (!this.properties.first) {
        this.triggerEvent('right',{},{})
      }
    }
  }
})
