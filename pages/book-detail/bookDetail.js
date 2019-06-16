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
    likeCount:0,
    isPosting:false
  },
  onLoad:function(options){
    const bid = options.bid
    console.log(bid);
    //获取书籍详情
    likeFn.getDetail(bid,(res) => {
      console.log(res)
      this.setData({
        book: res
      })
    })
  //获取喜欢状态
    likeFn.getLikeStatus(bid,(res) => {
      console.log(res)
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums

      })
    })
    //获取评论
    likeFn.getComments(bid,(res) => {
      console.log(res)
      this.setData({
        comments: res.comments
      })
    })
    
  },

  onLike: function (event) {
    const like_or_cancel = event.detail.behavior
    likeFn.like(like_or_cancel, this.data.book.id, 400)
  },
  //提交短评
  onFakePost:function(){
    this.setData({
      isPosting:true
    })
  },
  //取消按钮
  onCancel: function () {
    this.setData({
      isPosting: false
    })
  },
  onPost: function (event) {
    
    const comment = event.detail.text || event.detail.value
    if (!comment) {
      return
    }
    if(comment.length > 12){
      wx.showToast({
        title: '短评最多12个字',
        icon:''
      })
      return
    }
    likeFn.postComment(this.data.book.id,comment,(res)=>{
      wx.showToast({
        title: '+1',
        icon: 'none'
      })
      this.data.comments.unshift({
        content:comment,
        nums:1
      })
      this.setData({
        comments:this.data.comments,
        isPosting:false
      })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
