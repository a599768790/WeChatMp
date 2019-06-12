// pages/book-detail/bookDetail.js

import { HTTP } from '../../utils/http.js'
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
    comments:[],
    book:null,
    likeStatus:false,
    likeCount:0
  },
  onLoad:function(options){
    const bid = options.bid
    console.log(bid);
    //获取书籍详情
    likeFn.getDetail(bid,(res) => {
      console.log(res)
      this.setData({
        books: res
      })
    })
  //获取喜欢状态
    likeFn.getLikeStatus(bid,(res) => {
      console.log(res)
      this.setData({
        likeStatus: res.like_status,
        likeConut:res.fav_nums

      })
    })
    //获取评论
    likeFn.getComments(bid,(res) => {
      console.log(res)
      this.setData({
        comments: res
      })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
