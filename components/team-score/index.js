// components/team-score/index.js
import { TEAM_NAME } from '../../common/constants'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    teamScore: {
      type: Object,
      default: () => {}
    },
    reverse: {
      type: Boolean,
      default: false
    },
    winner: {
      type: Boolean,
      default: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    TEAM_NAME
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
