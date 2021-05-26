// pages/organizationitem/organizationitem.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"1",
    place:"2",
    intrude:"3",
    picurl:"",
    _id:"cbddf0af609a3c8207c26fc77dff9418"
  },
gotopage1(){
  wx.navigateTo({url:'/pages/selectcode/selectcode', 
})
},
clickbtn(){
  wx.showLoading({
    title: '上传中',
  })
    wx.chooseImage({
      success:res=>{
         var filepath = res.tempFilePaths[0]
         this.cloudFile(filepath)
      }
    })
    wx.hideLoading()
},
update(){
   const _ =db.command
   var that =this
   db.collection("organization")
   .doc(that.data._id)
   .update({
      data:{
        imageurl:_.push(that.data.picurl)
      }
   })
   .then(res=>{
     console.log(1)
     console.log(res)
   })

},
cloudFile(path){
   wx.cloud.uploadFile({
     cloudPath:Date.now()+".jpg",
      filePath:path
   }).then(res=>{
     console.log(res)
     this.setData({
        picurl:res.fileID
     })
     this.update()
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