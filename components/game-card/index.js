// components/game-card/index.js
import { GAME_STATUS } from '../../common/constants'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status: {
      type: Number,
      value: 1
    },
    tags: {
      type: Array,
      value: () => []
    },
    hTeam: {
      type: Object,
      value: () => {}
    },
    vTeam: {
      type: Object,
      value: () => {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    GAME_STATUS
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
