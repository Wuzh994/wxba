import { API_URL } from '../common/constants'

function fetch(url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: API_URL.base + url,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

export default fetch