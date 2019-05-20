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
  getLatest(index,fnCallback){
    this.request({
      url:'classic/latest',
      success:(res) => {
        fnCallback(res)
        //传递latestindex进入
        //this._setLatestIndex(res.index)
      }
    })
  }


  getPrevious(index, fnCallback) {
    this.request({
      url: 'classic/' + index + '/previous',
      success: (res) => {
        fnCallback(res)
        
      }
    });
  }
  //判断是否是第一期
  isFirst(index){
    return index == 1 ? true : false
  }

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
}
export {likeModel}