// components/best-show/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    allTeamBest: {
      type: Array,
      value: () => []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    KEYS: ['points' , 'rebounds' , 'assists']
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
