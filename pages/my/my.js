// pages/my/my.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  onLoad:function(){
    likeFn.getBookList((res)=>{
      console.log(res)
    })
  },
  onShow:function(){
    console.log(111);
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
