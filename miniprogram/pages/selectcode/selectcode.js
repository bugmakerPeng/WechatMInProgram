// pages/selectcode/selectcode.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     selectcode:"",

  },
  btnSub(res) {
    this.selectcode=res.detail.value;
    wx.navigateTo({url:'/pages/organization/organization', 
    })
  },

  onclick(){
     if(true){
      btnSub(res);{
       const db = wx.cloud.database()
          const _ = db.command
          db.collection("organization")
          .where({
             _id:"cbddf0af609a3c8207c26fc77dff9418"
          })
          .update({
            data:{
              member:_.push("55")
            }
          })
        }
     }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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