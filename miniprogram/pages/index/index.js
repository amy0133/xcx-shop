"use strict";
Page({
    data: {
        tabIndex: 0,
        icons: [
            {
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbaR2BLk7Ioig5tUOH14XAOxGpLdDf591oRbrtyLIZ01DHONmBA',
                title: '小程序1',
                id: 1
            },
            {
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Qx5GWpzEnfTx7YQWX4rEjENki6qHoic0uyknmY5W20ph81cYJw',
                title: '小程序2',
                id: 2
            },
            {
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwI94rffULFyk_e8kWpkYoQpleguQlM14Ngt4HFIuzaJhIcr5',
                title: '小程序3',
                id: 3
            },
            {
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT01wMSlpO1wnTD6AyWjgAC7dyf_bbGEEqmLYV1G8ZbhbV2nRdo',
                title: '小程序4',
                id: 4
            },
            {
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFs2v7xXGDOcA5WHmiKT93QBaijGchUSE_moNFRojMKo0VTZpliQ',
                title: '小程序5',
                id: 5
            },
            {
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrLRUc7fYs-8cdXqLPaHsTfB20WqKeI9ISkUjfGcA-15pJyR26A',
                title: '小程序6',
                id: 6
            },
            {
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2qVoEurRPrAxDWeiYA7lpQHrpdVZTi1dpMu2fCLP74EwUJf0',
                title: '小程序7',
                id: 7
            },
            {
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00O5VISy9pDqnd0Pgzj7MvAOqQwjknXJWAPnYRsL7odlh3mGz',
                title: '小程序8',
                id: 8
            },
            {
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8c9nlAj_JIpTgxsE4Mp3vy0lYxzsq2XY-4-Vrydf3ecmovNT',
                title: '小程序9',
                id: 9
            },
        ],
    },
    onLoad: function () {
    },
    switchTab: function (e) {
        console.log(e);
        var index = e.currentTarget.dataset.index;
        this.setData({
            tabIndex: index
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLENBQUM7UUFDWCxLQUFLLEVBQUM7WUFDSjtnQkFDRSxJQUFJLEVBQUUsNEdBQTRHO2dCQUNsSCxLQUFLLEVBQUUsTUFBTTtnQkFDYixFQUFFLEVBQUUsQ0FBQzthQUNOO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDRHQUE0RztnQkFDbEgsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsRUFBRSxFQUFFLENBQUM7YUFDTjtZQUNEO2dCQUNFLElBQUksRUFBRSwwR0FBMEc7Z0JBQ2hILEtBQUssRUFBRSxNQUFNO2dCQUNiLEVBQUUsRUFBRSxDQUFDO2FBQ047WUFDRDtnQkFDRSxJQUFJLEVBQUUsMEdBQTBHO2dCQUNoSCxLQUFLLEVBQUUsTUFBTTtnQkFDYixFQUFFLEVBQUUsQ0FBQzthQUNOO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDRHQUE0RztnQkFDbEgsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsRUFBRSxFQUFFLENBQUM7YUFDTjtZQUNEO2dCQUNFLElBQUksRUFBRSw0R0FBNEc7Z0JBQ2xILEtBQUssRUFBRSxNQUFNO2dCQUNiLEVBQUUsRUFBRSxDQUFDO2FBQ047WUFDRDtnQkFDRSxJQUFJLEVBQUUsMEdBQTBHO2dCQUNoSCxLQUFLLEVBQUUsTUFBTTtnQkFDYixFQUFFLEVBQUUsQ0FBQzthQUNOO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDBHQUEwRztnQkFDaEgsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsRUFBRSxFQUFFLENBQUM7YUFDTjtZQUNEO2dCQUNFLElBQUksRUFBRSwwR0FBMEc7Z0JBQ2hILEtBQUssRUFBRSxNQUFNO2dCQUNiLEVBQUUsRUFBRSxDQUFDO2FBQ047U0FDRjtLQUNGO0lBQ0QsTUFBTTtJQUVOLENBQUM7SUFHRCxTQUFTLFlBQUMsQ0FBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuLy8gaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xuLy8gY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHRhYkluZGV4OiAwLCAgICAgICAgLy8gaGVhZC10YWLpu5jorqTpgInkuK3kuIvmoIcw55qE6aG5XG4gICAgaWNvbnM6WyAgICAgICAgICAgICAvLyDlm77moIfpm4blkIhcbiAgICAgIHtcbiAgICAgICAgaWNvbjogJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1FYYmFSMkJMazdJb2lnNXRVT0gxNFhBT3hHcExkRGY1OTFvUmJydHlMSVowMURIT05tQkEnLFxuICAgICAgICB0aXRsZTogJ+Wwj+eoi+W6jzEnLFxuICAgICAgICBpZDogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1IzUXg1R1dwekVuZlR4N1lRV1g0ckVqRU5raTZxSG9pYzB1eWtubVk1VzIwcGg4MWNZSncnLFxuICAgICAgICB0aXRsZTogJ+Wwj+eoi+W6jzInLFxuICAgICAgICBpZDogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1Rsd0k5NHJmZlVMRnlrX2U4a1dwa1lvUXBsZWd1UWxNMTROZ3Q0SEZJdXphSmhJY3I1JyxcbiAgICAgICAgdGl0bGU6ICflsI/nqIvluo8zJyxcbiAgICAgICAgaWQ6IDNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246ICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUMDF3TVNscE8xd25URDZBeVdqZ0FDN2R5Zl9iYkdFRXFtTFlWMUc4WmJoYlYyblJkbycsXG4gICAgICAgIHRpdGxlOiAn5bCP56iL5bqPNCcsXG4gICAgICAgIGlkOiA0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUUZzMnY3eFhHRE9jQTVXSG1pS1Q5M1FCYWlqR2NoVVNFX21vTkZSb2pNS28wVlRacGxpUScsXG4gICAgICAgIHRpdGxlOiAn5bCP56iL5bqPNScsXG4gICAgICAgIGlkOiA1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVGxyTFJVYzdmWXMtOGNkWHFMUGFIc1RmQjIwV3FLZUk5SVNrVWpmR2NBLTE1cEp5UjI2QScsXG4gICAgICAgIHRpdGxlOiAn5bCP56iL5bqPNicsXG4gICAgICAgIGlkOiA2XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVGIycVZvRXVyUlByQXhEV2VpWUE3bHBRSHJwZFZaVGkxZHBNdTJmQ0xQNzRFd1VKZjAnLFxuICAgICAgICB0aXRsZTogJ+Wwj+eoi+W6jzcnLFxuICAgICAgICBpZDogN1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1QwME81VklTeTlwRHFuZDBQZ3pqN012QU9xUXdqa25YSldBUG5ZUnNMN29kbGgzbUd6JyxcbiAgICAgICAgdGl0bGU6ICflsI/nqIvluo84JyxcbiAgICAgICAgaWQ6IDhcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246ICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUaThjOW5sQWpfSklwVGd4c0U0TXAzdnkwbFl4enNxMlhZLTQtVnJ5ZGYzZWNtb3ZOVCcsXG4gICAgICAgIHRpdGxlOiAn5bCP56iL5bqPOScsXG4gICAgICAgIGlkOiA5XG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICBcbiAgfSxcblxuICAvLyDliIfmjaJoZWFkIHRhYlxuICBzd2l0Y2hUYWIoZTogYW55KXtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIC8vIOW9k+WJjeS4i+agh1xuICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgdGFiSW5kZXg6IGluZGV4XG4gICAgfSk7XG4gIH1cbn0pXG4iXX0=