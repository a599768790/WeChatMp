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
      }
    })
    // wx.request({
    //   url:'http://bl.7yue.pro/v1/classic/latest',
    //   header:{
    //     appkey:'AbhC31IG7ruCDp57'
    //   },
    //   success:(res) => { 
    //     console.log(this.data.test)//success:function(){}es5写法无法读取this这个值//es6箭头函数才可读取
    //   }
    // })
  }
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
