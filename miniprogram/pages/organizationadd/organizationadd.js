// pages/organization/organization.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
      name: '',
      introduction:"",
      place:'',
      supplies:'',
      QQ_group:'',
     
    
  },
  

  btnSub(res) {
  
    var {name,place,supplies,QQ_group,introduction}=res.detail.value;
    var _id=""
    db.collection("organization").add({
      data:{
        name:name,
        place:place,
        supplies:supplies,
        QQ_group:QQ_group,
        introduction:introduction,
        imageurl:[]
      }
    }).then(res=>{
      console.log(res)
      this.setData({
        _id:res._id
     })

    })
    
   
 
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