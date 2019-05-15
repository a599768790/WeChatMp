//index.js
//获取应用实例
const app = getApp()

import {HTTP} from '../../utils/http.js'
import {likeModel} from '../../models/likeHttp.js'

let like = new likeModel()
let http = new HTTP()//实例化一个类
Page({
  data: {
    classic:null,
    test:1,
    content:'aaa'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function(options) {
    http.request({
      url:'classic/latest',
      success:(res) => {
        console.log(res)
        this.setData({//获取到的值更新给classic，传给组件去渲染页面
          classic:res,
          // test:1
        })
      }
    })
    
  },
  pageEvent:function(event){
    console.log(event)
    console.log(111);
    let behavior = event.detail.behavior
    like.like(behavior, this.data.classic.id, this.data.classic.type)

  }
  
})
