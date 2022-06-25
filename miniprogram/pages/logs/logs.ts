// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
  data: {
    logs: [],
  },
  onShow(){
    console.log("lifecycle: log onShow")
  },
  onHide(){
    console.log("lifecycle: log onHide")
  },
  onReady(){
    console.log("lifecycle: log onReady")
  },
  onUnload(){
    console.log("lifecycle: log onUnload")
  },
  onLoad: function(opt) {
    console.log("lifecycle: log onLaunch")
    console.log(opt)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log
        }
      }),
      logColor: opt.color,
    })
  },
})
