Page({
  isPageShowing: false,

  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    scale: 16,
    markers: [{
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      label: 'T.I.T 创意园1',
      title:'click title',
      iconPath: '/image/car.png',
      width: 50,
      height: 50
    },{
      id: 1,
      latitude: 23.1008,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      iconPath: '/image/car.png',
      width: 50,
      height: 50
    }],
    location: {
      latitude: 23.1008,
      longitude: 113.324520
    },
    showLocation: true,
    showCompass: false,
    setting:{
      skew: 0,
      rotate: 0,
      showLocation: false,
      showScale: true, //显示比例
      subKey: '',
      layerStyle: 1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      showCompass: false,  // 显示指南针
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTraffic: false
    }
  },

  onMyLocationTap() {
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        this.setData({
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
          },
        })
      },
      fail: () => {
        wx.showToast({
          title: "请在设置页中授权....开始你的设置吧",
          icon: 'none',
        })
      }
      
    })
  },

  onHide() {
    this.isPageShowing = false
  },
  onShow() {
    this.isPageShowing = true
  },

  onScanClicked() {
    wx.scanCode({
      success: () => {
        wx.navigateTo({
          url: '/pages/register/register',
        })
      },
      fail: console.error
    })
  },

  moveCars() {
    // 参数map是根据wxml中的map的id来的
    const map = wx.createMapContext("map")
    const dest = {
      latitude: 23.099994,
      longitude: 113.324520,
    }
    const moveCar = () => {
      dest.latitude += 0.001
      dest.longitude += 0.001

      map.translateMarker({
        destination: {
          latitude: dest.latitude,
          longitude: dest.longitude,
        },
        markerId: 0,
        autoRotate: false,
        rotate: 0,
        duration: 5000,
        animationEnd: () => {
          if (this.isPageShowing) {
            moveCar()
          }
        }
      })
    }
    moveCar()
  }

    
})
