// components/a-table/index.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多 slot 支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    columns: {
      type: Array,
      value: () => []
    },
    data: {
      type: Array,
      value: () => []
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    distance: {}
  },
  // 生命周期
  lifetimes: {
    attached() {
      
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
  }
})
