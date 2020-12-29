var config = require("../../config.js");
Page({
  data: {
    title: '',
	images: [
       '/image/2.jpg',
       '/image/1.jpg',
       '/image/3.jpg',
      ],
	 indicatorDots: true,
	 vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: config.telphone,
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

  //事件处理函数
  onLoad: function (options) {
    this.title = options.type || '课程介绍';
	this.setData({courses:config.courses});
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
})
