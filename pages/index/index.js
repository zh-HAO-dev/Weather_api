Page({
  data: {
    weather: { 'wea_img': 'qing'},//实况天气
  },
  onLoad: function () {
    this.getapi();
  },
  getapi:function(){
    var _this = this;
    // 获取IP地址, 请更换为自己的appid和appsecret
    wx.request({
      url: 'https://www.tianqiapi.com/ip?appid=87919331&appsecret=q5AHUOYP',
      data: {
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        // 根据IP获取天气数据
        _this.weatherweekday(res.data.ip);
      }
    });
  },
  // 天气api天气获取, 请更换为自己的appid和appsecret
  weatherweekday: function (ip) {
    var _this = this;
    wx.request({
      url: 'https://v0.yiketianqi.com/api?version=v61&appid=87919331&appsecret=q5AHUOYP',
      data: {
        'ip': ip
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        _this.setData({
          weatherweek: res.data,
          
        });
        console.log(_this.data.weatherweek)
      }
    });
  }
})
