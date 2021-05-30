// pages/details/details.js
const db = wx.cloud.database({
  env: "cloud1-6gwgppm4e940135f"
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity_id:"",
    name:"",
    content:"",
    background:"",
    purpose:"",
    img:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      activity_id:options.id
    }),
    db.collection("activity").where({
      _id: this.data.activity_id
    }).get().then(res=>{
      this.setData({
        name:res.data[0].name
      })
    }),
    db.collection("introduction").where({
      activity_id: this.data.activity_id
    }).get().then(res=>{
      console.log(res.data),
      this.setData({
        background:res.data[0].background,
        content:res.data[0].content,
        purpose:res.data[0].purpose,
        img:res.data[0].img
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