//index.js


Page({
  data: {
    num:2,
    title:"asd",
    organization:[],
  },
  getData(){
    wx.cloud.callFunction({
       name:"organization"
    }).then(res=>{
      console.log(1)
       console.log(res)
    })
    },
  onLoad: function() {
    wx.cloud.callFunction({
      name:"organization"
   }).then(res=>{
      this.setData({
        title:"gdfdgdfh",
        organization:res.result.data
      })
      
   })
    
  },

})
