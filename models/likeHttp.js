import {HTTP} from '../utils/http.js'


class likeModel extends HTTP {
  like(behavior,artID,category){
    let url = behavior == 'like' ? 'like' : 'like/cancel'
    this.request({
      url: url,
      method:'POST',
      data:{
        art_id: artID,
        type: category
      }
    })
  }
  //期刊id号、
  getClassicLikeStatus(artID, category,fnCallback){
    this.request({
      url: 'class/' + category + '/' + artID + '/favor',
      success: fnCallback
    })
  }

  //获取最近一期
  getLatest(fnCallback){
    this.request({
      url:'classic/latest',
      success:(res) => {
        fnCallback(res)
        //把最新的index写入缓存
        this._setLatestIndex(res.index)
        //最新一期写入
        // let key = this._getkey(res.index)
        // wx.setStorageSync(key, res)
      }
    })
  }
  // getNext(index, fnCallback) {
  //   this.request({
  //     url: 'classic/' + index + '/next',
  //     success: (res) => {
  //       fnCallback(res)
  //     }
  //   });
  // }

  // getPrevious(index, fnCallback) {
  //   this.request({
  //     url: 'classic/' + index + '/previous',
  //     success: (res) => {
  //       fnCallback(res)
  //     }
  //   });
  // }
  //获取上一期或者下一期
   getClassic(index,nextOrPre,fnCallback) {
    // let key = nextOrPre == 'next' ? this._getkey(index+1):this._getkey(index-1)
    // let classic = wx.getStorageSync(key)
    // if (!classic){
      this.request({
        url: 'classic/' + index + '/' + nextOrPre,
        success: (res) => {
          wx.setStorageSync(
            this._getkey(res.index),res)
          fnCallback(res)
        }
      });
    // }else{
    //   //缓存有classic，返回classic
    //   fnCallback(classic)
    // }
  }



  //判断是否是第一期
  isFirst(index){
    return index == 1 ? true : false
  }
  //判断是否最新一期
  isLatest(index){
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true :false
  }

  _setLatestIndex(index){
    wx.setStorageSync('latest',index)
  }
  _getLatestIndex(){
    let index = wx.getStorageSync('latest')
    return index
  }
  //获取Key
  _getkey(index){
    let key = 'classic-'+index
    return key
  }

  

}
export {likeModel}