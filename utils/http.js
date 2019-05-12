import {config} from '../config.js'

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
        let code = res.statusCode
        if(code.startsWhit('2')){

        }else{

        }
      },
      fail:(err) => {

      }
    })
  }
}

export {HTTP}