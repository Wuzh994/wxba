// index.js
// 获取应用实例
const app = getApp()
import { getGamesByDate } from '../../api/index'
Page({
  data: {
    games: [],
  },
  onLoad() {
    
  },
  async onChange(e) {
    const { data } = await getGamesByDate(e.detail)
    this.setData({
      games: data.games
    })
  }
})
