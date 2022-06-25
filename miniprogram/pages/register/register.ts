// pages/register/register.ts
Page({
  data: {
    licNO: '',
    name: '',
    genderIndex:0,
    birthDate: '1990-01-01',
    genders: ['未知','男','女','其他'],
    licImageUrl: '',
    state: 'UNSUBMITTED' as 'UNSUBMITTED' | 'PENDING' | 'VERIFIED'
  },

  onUploadLic() {
    wx.chooseImage({
      
      success: res => {
        console.log(res.tempFilePaths[0])
        if (res.tempFilePaths.length > 0) {
          this.setData({
            licImageUrl: res.tempFilePaths[0]
          })
          
          //TODO upload image
          setTimeout(() => {
            this.setData({
              licNO: '123456',
              name:'张三',
              genderIndex: 1,
              birthDate: '1989-02-03'
              
            })
          }, 1000);
          
        }
      }
    })
  },

  // 微信大部分参数是有类型的，但是事件是any
  onGenderChange(e: any) {
    this.setData({
      genderIndex: e.detail.value,
    })
  },

  onBirthDateChange(e: any) {
    this.setData({
      birthDate: e.detail.value,
    })
  },

  onSubmit() {
    this.setData({
      state: 'PENDING'
    })

    setTimeout(() => {
      this.onLicVerified()
    }, 3000);
  },
  onReSubmit() {
    this.setData({
      state: 'UNSUBMITTED',
      licImageUrl: '',
    })
  },
  onLicVerified() {
    this.setData({
      state: 'VERIFIED'
    })

    wx.redirectTo({
      url: '/pages/lock/lock'
    })
  }
})