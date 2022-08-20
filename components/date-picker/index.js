// components/date-picker/index.js
import {
  formatDate,
  getWeekday,
  addDays,
  subDays,
  getYearRange
} from '../../utils/handleDates'

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    date: null,
    miniDate: null,
    maxDate: null,
    datetime: '',
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 组件内部事件
    _subDate() {
      this.setData({
        date: subDays(this.data.date)
      })
    },
    _addDate() {
      this.setData({
        date: addDays(this.data.date)
      })
    },
    _open() {
      this.setData({
        show: true
      })
    },
    _onConfirm(e) {
      this.setData({
        show: false,
        date: formatDate(e.detail)
      });
    },
    _onClose() {
      this.setData({
        show: false
      })
    },
    _setDatetime(date) {
      const day = formatDate(date, 'MM月DD日')
      const weekday = getWeekday(date)
      this.setData({
        datetime: `${day} ${weekday}`
      })
    }
  },

// watch
  observers: {
    'date': function(date) {
      this._setDatetime(date)
      // $emit
      this.triggerEvent('change', formatDate(date))
    }
  },

  // 生命周期
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      const { minDate,  maxDate} = getYearRange()
      // 初始化时间
      this.setData({
        date: new Date(),
        minDate,
        maxDate
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
