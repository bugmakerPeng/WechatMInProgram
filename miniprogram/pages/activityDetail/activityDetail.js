// pages/activityDetail/activityDetail.js
const db = wx.cloud.database({
  env: "cloud1-6gwgppm4e940135f"
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : "",
      place : "",
      leader : "",
      introduce : "",
      starttime : Date,
      imageurl : "",
      detail : "",
      hours : 0,
      volunteer_time : 0,
      total_volunteer_num :0,
      current_volunteer_num : 0,
      id: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({id:wx.getStorageSync('activityId')});
 
    
    db.collection('activity').where({
      _id :this.data.id
    }).get({
      success : res=>{
        console.log(res.data);
        this.setData({
          name : res.data[0].name,
          place : res.data[0].place,
          leader : res.data[0].leader,
          introduce : res.data[0].introduce,
          starttime : res.data[0].work_time,
          imageurl : res.data[0].imageurl,
          hours : res.data[0].total_time,
          volunteer_time : res.data[0].volunteer_time,
          total_volunteer_num : res.data[0].total_volunteer_num ,
          current_volunteer_num : res.data[0].current_volunteer_num
        })
      }
    },error =>{
      console.log("查询失败")
    }
    )
    console.log(this.data);
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