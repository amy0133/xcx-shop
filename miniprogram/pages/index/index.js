"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseUrl_1 = require("../../utils/baseUrl");
Page({
    data: {
        tabIndex: 0,
        icons: [],
    },
    onLoad: function () {
        var that = this;
        wx.request({
            url: baseUrl_1.baseUrl + '/product/findAll',
            data: {},
            success: function (res) {
                var result = res.data || {};
                that.setData({
                    icons: result.data
                });
            },
            fail: function (res) {
                console.log('error:', res);
            }
        });
    },
    switchTab: function (e) {
        console.log(e);
        var index = e.currentTarget.dataset.index;
        this.setData({
            tabIndex: index
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLCtDQUEyQztBQUMzQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsQ0FBQztRQUNYLEtBQUssRUFBRSxFQUFFO0tBQ1Y7SUFDRCxNQUFNO1FBQ0osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsaUJBQU8sR0FBRyxrQkFBa0I7WUFDakMsSUFBSSxFQUFFLEVBQUU7WUFDUixPQUFPLFlBQUMsR0FBRztnQkFDVCxJQUFJLE1BQU0sR0FBUSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUk7aUJBQ25CLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUM1QixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELFNBQVMsWUFBQyxDQUFNO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcbi8v6I635Y+W5bqU55So5a6e5L6LXG4vLyBpbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5pbXBvcnQge2Jhc2VVcmx9IGZyb20gJy4uLy4uL3V0aWxzL2Jhc2VVcmwnXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHRhYkluZGV4OiAwLCAgICAgICAgLy8gaGVhZC10YWLpu5jorqTpgInkuK3kuIvmoIcw55qE6aG5XG4gICAgaWNvbnM6IFtdLFxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIC8vIOiOt+WPluWIl+ihqOaVsOaNrlxuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBiYXNlVXJsICsgJy9wcm9kdWN0L2ZpbmRBbGwnLFxuICAgICAgZGF0YToge30sXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSByZXMuZGF0YSB8fCB7fTtcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XG4gICAgICAgICAgaWNvbnM6IHJlc3VsdC5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZmFpbChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOicsIHJlcylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIC8vIOWIh+aNomhlYWQgdGFiXG4gIHN3aXRjaFRhYihlOiBhbnkpe1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgLy8g5b2T5YmN5LiL5qCHXG4gICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB0YWJJbmRleDogaW5kZXhcbiAgICB9KTtcbiAgfVxufSlcbiJdfQ==