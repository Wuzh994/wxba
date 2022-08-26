// pages/detail/index.js
import { getGameDetails } from '../../api/index'
import { TEAM_NAME, STATS } from '../../common/constants'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scoreBoard: null,
    hTeam: null,
    vTeam: null,
    allTeamBest: [],
    gameSummary: [],
    allPlayerStats: [],
    allTeamStats: [],
    KEYS: ['points' , 'rebounds' , 'assists'],
    TEAM_NAME,
    active: 0,
    columns: [
      { width: 80, label: '球员', prop: 'lastName', fixed: 'left' },
      { label: '首发', prop: 'pos', fixed: 'left' },
      { label: '时间', prop: 'min' },
      { label: STATS['points'], prop: 'points' },
      { label: '篮板', prop: 'totReb' },
      { label: STATS['assists'], prop: 'assists' },
      { label: STATS['steals'], prop: 'steals' },
      { label: STATS['blocks'], prop: 'blocks' },
      { label: '投篮', prop: 'fgm' },
      { width: 82, label: '投篮命中率', prop: 'fgp' },
      { width: 68, label: STATS['tpm'], prop: 'tpm' },
      { width: 82, label: '三分命中率', prop: 'tpp' },
      { width: 68, label: STATS['ftm'], prop: 'ftm' },
      { width: 82, label: '罚球命中率', prop: 'ftp' },
      { label: STATS['offReb'], prop: 'offReb' },
      { label: STATS['defReb'], prop: 'defReb' },
      { label: STATS['turnovers'], prop: 'turnovers' },
      { label: STATS['pFouls'], prop: 'pFouls' },
      { label: '+/-', prop: 'plusMinus' },
    ],
  },
  async getGameDetail(gameDate, gameId) {
    const { data } = await getGameDetails(gameDate, gameId)
    const { hTeam, vTeam } = data.basicGameData
    const { activePlayers, hTeam: { leaders: hLeaders, totals: hTotals}, vTeam: { leaders: vLeaders, totals: vTotals} } = data.stats
    const v = activePlayers.filter(i => i.teamId === vTeam.teamId)
    const h = activePlayers.filter(i => i.teamId === hTeam.teamId)

    this.setData({
      scoreBoard: data.basicGameData,
      hTeam,
      vTeam,
      gameSummary: [this.genTeamScore(vTeam), this.genTeamScore(hTeam)],
      allTeamBest: [this.pickBest(vLeaders), this.pickBest(hLeaders)],
      allPlayerStats: [this.genPlayerStats(v), this.genPlayerStats(h)],
      allTeamStats: this.genTeamStats(vTotals, hTotals)
    })
  },
  changeTabs(e) {
    const { index } = e.target.dataset
    if(!index) return
    this.setData({
      active: index,
    })
  },
  genTeamScore(teamStats) {
    const { score, triCode, linescore } = teamStats
    return {
      q1: linescore[0].score,
      q2: linescore[1].score,
      q3: linescore[2].score,
      q4: linescore[3].score,
      s: score,
      ta: triCode
    }
  },
  pickBest(leaders) {
    return this.data.KEYS.map((key) => {
      const item = leaders[key]
      const best = item.players[0]
      return {
        pid: best.personId,
        num: best.jersey,
        img: this.getImageUrl(best.personId),
        name: best.lastName,
        [key]: +item.value
      }
    })
  },
  getImageUrl(pid) {
    return `https://cdn.nba.com/headshots/nba/latest/260x190/${pid}.png`
  },
  genPlayerStats(pstsg) {
    return pstsg.map(i => {
      return {
        ...i,
        pos: `${i.pos ? '是' : '否'}`,
        fgm: `${i.fgm}/${i.fga}`,
        fgp: `${i.fgp}%`,
        tpm: `${i.tpm}/${i.tpa}`,
        tpp: `${i.tpp}%`,
        ftm: `${i.ftm}/${i.fta}`,
        ftp: `${i.ftp}%`,
      }
    })
  },
  genTeamStats(vTotals, hTotals) {
    return Object.entries(STATS).map(([key, title]) => ({
      title,
      vScore: +vTotals[key],
      hScore: +hTotals[key],
    }))
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