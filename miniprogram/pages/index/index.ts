//index.js
//获取应用实例
// import { IMyApp } from '../../app'
// const app = getApp<IMyApp>()

Page({
  data: {
    tabIndex: 0,        // head-tab默认选中下标0的项
    icons:[             // 图标集合
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbaR2BLk7Ioig5tUOH14XAOxGpLdDf591oRbrtyLIZ01DHONmBA',
        title: '小程序1'
      },
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Qx5GWpzEnfTx7YQWX4rEjENki6qHoic0uyknmY5W20ph81cYJw',
        title: '小程序2'
      },
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwI94rffULFyk_e8kWpkYoQpleguQlM14Ngt4HFIuzaJhIcr5',
        title: '小程序3'
      },
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT01wMSlpO1wnTD6AyWjgAC7dyf_bbGEEqmLYV1G8ZbhbV2nRdo',
        title: '小程序4'
      },
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFs2v7xXGDOcA5WHmiKT93QBaijGchUSE_moNFRojMKo0VTZpliQ',
        title: '小程序5'
      },
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrLRUc7fYs-8cdXqLPaHsTfB20WqKeI9ISkUjfGcA-15pJyR26A',
        title: '小程序6'
      },
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2qVoEurRPrAxDWeiYA7lpQHrpdVZTi1dpMu2fCLP74EwUJf0',
        title: '小程序7'
      },
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00O5VISy9pDqnd0Pgzj7MvAOqQwjknXJWAPnYRsL7odlh3mGz',
        title: '小程序8'
      },
      {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8c9nlAj_JIpTgxsE4Mp3vy0lYxzsq2XY-4-Vrydf3ecmovNT',
        title: '小程序9'
      },
    ],
  },
  onLoad() {
    
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
