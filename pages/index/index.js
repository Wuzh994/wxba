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
    const { data } = await getGamesByDate('20220616')
    this.setData({
      games: data.games
    })
  },
  toDetail(e) {
    const { id: gameId, date: gameDate } = e.target.dataset
    wx.navigateTo({
      url: `../detail/index?gameId=${gameId}&gameDate=${gameDate}`,
    })
  }
})
