// components/leader-board/index.js
import { TEAM_NAME } from '../../common/constants'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '联盟'
    },
    teams: {
      type: Array,
      value: () => []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    TEAM_NAME,
    columns: [
      { label: '球队代码', prop: 'triCode'},
      { label: '胜', prop: 'win' },
      { label: '负', prop: 'loss' },
      { label: '胜率', prop: 'winPctV2' },
      { label: '胜差', prop: 'winDiff' },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
