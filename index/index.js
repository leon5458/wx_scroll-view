const app = getApp()
const order = ['test', 'test1', 'test2', 'test3', 'test4','test5']
Page({
  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 50,
    toView:'test'
  },

  click:function(){
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },

  upper(e) {
    console.log(e)
    wx.showToast({
      title: '滑动到顶部',

    })
  },
  lower(e) {
    console.log(e)
    wx.showToast({
      title: '滑动到底部',
    })
  },
  // scroll(e) {
  //   console.log(e)
  // },

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