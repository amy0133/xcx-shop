//index.js
//获取应用实例
// import { IMyApp } from '../../app'
// const app = getApp<IMyApp>()

Page({
  data: {
    tabIndex: 0,        // head-tab默认选中下标0的项
  },
  onLoad() {
    
  },

  // 切换head tab
  switchTab(e: any){
    console.log(e)
    // 当前下标
    let index: string = e.currentTarget.dataset.index;
    this.setData!({
      tabIndex: index
    });
  }
})
