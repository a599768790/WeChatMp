import {config} from '../config.js'

const tips = {
  1:'出现一个错误!',
  1005:'appkey错误',
  3000:'期刊不存在'
}
class HTTP {
  request(parms){
    if (!parms.method) {
      parms.method = "GET"
    }
    wx.request({
      url: config.api_base_url + parms.url,
      method:parms.method,
      data:parms.data,
      header:{
        'contnet-type':'application/json',
        'appkey':config.appkey
      },
      success:(res) => {
        let code = res.statusCode.toString()
        if(code.startsWith('2')){
           parms.success && parms.success(res.data)//需要调用，才能执行这个函数
        }else{
          //console.log(res)
          let error_code = res.data.error_code
          this._show_error(error_code)//
        }
      },
      fail:(err) => {
        
      }
    })
  }

  _show_error(error_code){
    if(!error_code){
      error_code = 1
    }
    //出现客户端错误
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000,//显示时间
    })
  }
}

export {HTTP}