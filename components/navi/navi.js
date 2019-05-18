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

  }
})