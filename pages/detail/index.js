// pages/detail/index.js
import { getGameDetails } from '../../api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scoreBoard: null,
    hTeam: null,
    vTeam: null,
  },
  async getGameDetail(gameDate, gameId) {
    const { data } = await getGameDetails(gameDate, gameId)
    const { hTeam, vTeam } = data.basicGameData
    this.setData({
      scoreBoard: data.basicGameData,
      hTeam,
      vTeam
    })
    // gameSummary = [genTeamScore(visitor), genTeamScore(home)]
  
    // const { activePlayers, hTeam: { leaders: hLeaders, totals: hTotals}, vTeam: { leaders: vLeaders, totals: vTotals} } = data.stats
    // allTeamBest.value = [pickBest(vLeaders), pickBest(hLeaders)]
  
    // const v = activePlayers.filter(i => i.teamId === visitor.teamId)
    // const h = activePlayers.filter(i => i.teamId === home.teamId)
    // allPlayerStats.value = [genPlayerStats(v), genPlayerStats(h)]
    // allTeamStats.value = genTeamStats(vTotals, hTotals)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad({ gameDate, gameId }) {
    await this.getGameDetail(gameDate, gameId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})