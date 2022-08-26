// components/rate-chart/index.js
const H_COLOR = '#1d428a'
const V_COLOR = '#b52532'
const GREY = '#b1b2b3'
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多 slot 支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    hScore: {
      type: Number,
      value: 0
    },
    vScore: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    progressProps: {
      percent: [],
      color: []
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    genData(hScore, vScore) {
      if(hScore === vScore) {
        return {
          percent: [100, 100],
          color: [H_COLOR, V_COLOR]
        }
      }
      const percent = hScore > vScore ? [100, (100/hScore)*vScore] : [(100/vScore)*hScore, 100]
      const color = hScore > vScore ? [H_COLOR, GREY] : [GREY, V_COLOR]
      return {
        percent,
        color
      }
    }
  },
  // watch
  observers: {
    'hScore, vScore': function(hScore, vScore) {
      this.setData({
        progressProps: this.genData(hScore, vScore)
      })
    }
  }
})
