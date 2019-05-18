// components/epsiode/epsiode.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:String,
      observer:function(newVal,oldVal){//observer处理字段
        //console.log(newVal)
        //console.log(oldVal)
        let val = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index: val
          //不要在observer中修改更新自己的属性，否则无限递归，内存泄漏,在data里面定义一个_index

        })
      }
    },
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
    year: 0,
    month:'',
    _index:''
    
  },

attached:function(){
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth()

  this.setData({
    year: year,
    month: this.data.months[month]
  })

},

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
