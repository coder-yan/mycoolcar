// app.ts
App<IAppOption>({
  globalData: {},
  onShow: function(){
    console.log("lifecycle: app onShow")
  },
  onHide: function(){
    console.log("lifecycle: app onHide")
  },
  onLaunch: function() {
    console.log("lifecycle: app onLaunch")
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})