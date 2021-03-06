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
    // latest:true,
    // first:false,
    // likeCount:0,
    // likeStatus:false

  },

  onLoad: function(options) {
    // http.request({
    //   url:'classic/latest',
    //   success:(res) => {
    //     console.log(res)
    //     this.setData({//获取到的值更新给classic，传给组件去渲染页面
    //       classic:res,
    //       // test:1
    //     })
    //   }
    // })
    //初始化的时候调用
    likeFn.getLatest((res) => {
      this.setData({
        classic:res,
        //latest: likeFn.isLatest(res.index)
        //更新喜欢组件
        // likeCount:res.fav_nums,
        // likeStatus:res.like_status
      })
    })
  },
  
  pageEvent:function(event){
    console.log(event)
    console.log(111);
    let behavior = event.detail.behavior
    likeFn.like(behavior, this.data.classic.id, this.data.classic.type)

  },
  
  onPrevious:function(event){
    this._updateClassic('previous')
  },
  onNext:function(){
    this._updateClassic('next')
  },
  _updateClassic: function (nextOrPre) {
    let index = this.data.classic.index
    
    likeFn.getClassic(index, nextOrPre, (res) => {
      // this._getLikeStatus(res.id,res.type)
      //console.log(res)
      this.setData({
        classic: res,
        first: likeFn.isFirst(res.index),
        latest: likeFn.isLatest(res.index)
      })
    });
  },
  // onPrevious:function(event){
  //   let index = this.data.classic.index
  //   likeFn.getPrevious(index,(res) =>{
  //     //console.log(res)
  //     this.setData({
  //       classic:res,
  //       first:likeFn.isFirst(res.index),
  //       latest:likeFn.isLatest(res.index)
  //     })
  //   });
  // },
  // onNext:function(){
  //   let index = this.data.classic.index
  //   likeFn.getNext(index, (res) => {
  //     //console.log(res)
  //     this.setData({
  //       classic: res,
  //       first: likeFn.isFirst(res.index),
  //       latest: likeFn.isLatest(res.index)
  //     })
  //   });
  // }
  
  //获取喜欢状态
  _getLikeStatus: function (artID, category) {
    likeFn.getClassicLikeStatus(artID, category,(res)=>{
      this.setData({
        likeCount:res.fav_nums,
        likeStatus:res.like_status
      })
    })
  }

})
