// pages/show/show.js
const app=getApp
const db = wx.cloud.database({
  env: "cloud1-6gwgppm4e940135f"
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
     activity:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection("activity").get()
     .then(res=>{
      this.setData({
        activity:res.data
      })    
      console.log(this.data.activity)
     }   
     )
  },
  toDetail : function(e){
    id= e.currentTarget.dataset.id
    console.log(id);
    wx.setStorageSync('activityId', id);
    wx.navigateTo({
      url: '../activityDetail/activityDetail',
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