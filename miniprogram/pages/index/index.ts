//index.js
//获取应用实例
// import { IMyApp } from '../../app'
// const app = getApp<IMyApp>()
import {baseUrl} from '../../utils/baseUrl'
Page({
  data: {
    tabIndex: 0,        // head-tab默认选中下标0的项
    icons: [],
  },
  onLoad() {
    let that = this;
    // 获取列表数据
    wx.request({
      url: baseUrl + '/product/findAll',
      data: {},
      success(res) {
        let result: any = res.data || {};
        that.setData!({
          icons: result.data
        })
      },
      fail(res) {
        console.log('error:', res)
      }
    })
  },

  // 切换head tab
  switchTab(e: any){
    console.log(e)
    // 当前下标
    let index = e.currentTarget.dataset.index;
    this.setData!({
      tabIndex: index
    });
  }
})
