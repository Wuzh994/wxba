// index.js
// 获取应用实例
const app = getApp()
import { getGamesByDate } from '../../api/index'
Page({
  data: {
    motto: 'Hello World',
  },
  onLoad() {
    getGamesByDate('20220608')
  },
})
