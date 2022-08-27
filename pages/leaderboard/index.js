// pages/leaderboard/index.js
import { getStandings } from '../../api/index'
import { EAST_TEAMS, WEST_TEAMS } from '../../common/constants'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eastTeams: [],
    westTeams: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    const { data } = await getStandings()
    const { teams } = data.league.standard
    this.genLeaderboard(teams)
  },
  // 构造数据
  genLeaderboard(teams) {
    const pick = this.sort(teams)
    const eastTeams = this.addWinDiff(pick(EAST_TEAMS))
    const westTeams = this.addWinDiff( pick(WEST_TEAMS))
    this.setData({
      eastTeams,
      westTeams
    })
  },
  // 胜差
  addWinDiff(teams) {
    console.log(teams)
    const beseLine = teams[0].win
    return teams.map(t => {
      return {
        ...t,
        winDiff: beseLine - t.win
      }
    })
  },
  // 排序
  sort(allTeams) {
    return (subTeams) => subTeams.map(tId => {
      const item = allTeams.find(t => t.teamId === tId)
      return {
        triCode: item.teamSitesOnly.teamTricode,
        win: item.win,
        loss: item.loss,
        winPct: item.winPct,
        winPctV2: item.winPctV2+'%'
      }
    }).sort((a, b) => b.winPct - a.winPct)
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