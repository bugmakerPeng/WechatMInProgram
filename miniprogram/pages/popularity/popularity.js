// pages/popularization/popularization.js
const db = wx.cloud.database({
  env: "cloud1-6gwgppm4e940135f"
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    /*act:[
      {
        name:"南京大学环境协会",
        member:[],
        begin:"2019-04-28",
        time:60,
        location:"南京"
      },
      {
        name:"仙林派出所",
        member:[],
        begin:"2001-03-19",
        time:100,
        location:"南京"
      }
    ],*/
    act:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection("activity").get()
    .then(res=>{
      this.setData({
        act:res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})