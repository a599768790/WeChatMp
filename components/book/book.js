// components/book/book.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click:function(){
      this.triggerEvent('click', {}, {})
    }
  }
})
