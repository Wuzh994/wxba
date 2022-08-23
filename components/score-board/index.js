// components/score-board/index.js
import { GAME_STATUS } from '../../common/constants'
import { formatDate } from '../../utils/handleDates'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scoreBoard: {
      type: Object,
      value: () => {}
    },
    hTeam: {
      type: Object,
      value: () => {}
    },
    vTeam: {
      type: Object,
      value: () => {}
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    GAME_STATUS,
    date: '',
    time: ''
  },
  
  /**
   * 组件的方法列表
   */
  methods: {

  },
  // watch
  observers: {
    'scoreBoard': function(val) {
      if(!val) return
      const { startTimeUTC } = val
      this.setData({
        date: formatDate(startTimeUTC, 'MM月DD日'),
        time: formatDate(startTimeUTC, 'hh:mm')
      })
    }
  }
})
