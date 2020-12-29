//index.js
//获取应用实例
var app = getApp();
var config = require("../../config.js");
Page( {
  data: {
    //向模板传入数据
    // 轮播
      images: [
       '/image/2.jpg',
       '/image/1.jpg',
       '/image/3.jpg',
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200,
      navs: [
        {
		  url:'/pages/list/index',
          image: '/image/i1.png',
          text: '课程介绍'
        }, {
	      url:'/pages/strength/index',
          image: '/image/i2.png',
          text: '师资力量'
        }, {
		  url:'/pages/mien/index',
          image: '/image/i3.png',
          text: '学员风采'
        }, {
		  url:'/pages/contact/index',
          image: '/image/i4.png',
          text: '联系我们'
        }
      ]
  },
  gotopage:function(event){
	 wx.reLaunch({url:event.currentTarget.dataset.hi}); 
  },
  moreurl:function(){
	 wx.reLaunch({url:"/pages/list/index"}); 
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
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    var that = this;
	console.log(config.courses);
	that.setData({courses:config.courses});
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },

  onShareAppMessage: function () {
    return {
      title: 'XXXXX企业',
      desc: '企业的领军者!',
      path: '/page/index/index'
    }
  },

  go: function(event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  }
})
