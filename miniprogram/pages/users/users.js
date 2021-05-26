// pages/users/users.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'name',
    major:"",
    phone:"",
    a:'',
    list:[]
   },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      a:"sfsdsfg"
    })
db.collection("user")
 .where({
   _id:"28ee4e3e609a787317d280c86b78b4b3"
 })
  .get()
  .then(res=>{
    this.setData({
      name:res.data[0].name,
      phone:res.data[0].phone,
      major:res.data[0].major,
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