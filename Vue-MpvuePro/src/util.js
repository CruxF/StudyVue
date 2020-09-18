// 工具函数库
import config from './config'
// 封装了一个Promise
export function get (url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}
// 封装一个登录成功后出现的模态框
export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
