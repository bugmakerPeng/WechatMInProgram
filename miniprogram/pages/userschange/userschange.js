// pages/users/users.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"28ee4e3e609a787317d280c86b78b4b3",
    name: '',
    introduction:"",
    phone:'',
    major:'',
},
btnSub(res) {
  console.log(2)
  var {name,major,phone,introduction}=res.detail.value;
  db.collection("user")
 .doc("28ee4e3e609a787317")
  .update({
    data:{
      name:name,
      major:major,
      phone:phone,
      introduction:introduction,
    }
  }).then(res=>{
    console.log(res)
  })
  
  
},
gotopage1(res){
  wx.switchTab({url:'/pages/users/users', 
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