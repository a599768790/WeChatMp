//index.js
//获取应用实例
const app = getApp()

import {HTTP} from '../../utils/http.js'
import {likeModel} from '../../models/likeHttp.js'

let likeFn = new likeModel()
let http = new HTTP()//实例化一个类
Page({
  data: {
    classic:null,
    test:1,
    content:'aaa'
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
    // likeFn.getLatest((res) => {
    //   this.setData({
    //     classic:res
    //   })
    // })
  },
  pageEvent:function(event){
    console.log(event)
    console.log(111);
    let behavior = event.detail.behavior
    likeFn.like(behavior, this.data.classic.id, this.data.classic.type)

  },
  onPrevious:function(event){
    let index = this.data.classic.index
    likeFn.getPrevious(index,(res) =>{
      //console.log(res)
      this.setData({
        classic:res,
        first:likeFn.isFirst(res.index),
        latest:likeFn.isLatest(res.index)
      })
    });
  }
})
