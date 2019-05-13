//index.js
//获取应用实例
const app = getApp()

import {HTTP} from '../../utils/http.js'
let http = new HTTP()//实例化一个类
Page({
  data: {
    test:1

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
    
  }
  
})
