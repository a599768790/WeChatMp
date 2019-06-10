// pages/books/book.js

import { likeModel } from '../../models/likeHttp.js'

let likeFn = new likeModel()
Page({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    books:[]
  },
  // 监听页面加载
onLoad: function (options){
  likeFn.getBookList((res) => {
    console.log(res)
    this.setData({
      books:res
    })
  })
},
onShow: function (options) {
  console.log(111);
},
onReady:function(){
  console.log(111);
},
  /**
   * 组件的方法列表
   */
  methods: {
    
    
  }
})
