"use strict";
Page({
    data: {
        tabIndex: 0,
        icons: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLENBQUM7UUFDWCxLQUFLLEVBQUM7WUFDSjtnQkFDRSxJQUFJLEVBQUUsNEdBQTRHO2dCQUNsSCxLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDRHQUE0RztnQkFDbEgsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBRSwwR0FBMEc7Z0JBQ2hILEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsMEdBQTBHO2dCQUNoSCxLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDRHQUE0RztnQkFDbEgsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBRSw0R0FBNEc7Z0JBQ2xILEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsMEdBQTBHO2dCQUNoSCxLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDBHQUEwRztnQkFDaEgsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBRSwwR0FBMEc7Z0JBQ2hILEtBQUssRUFBRSxNQUFNO2FBQ2Q7U0FDRjtLQUNGO0lBQ0QsTUFBTTtJQUVOLENBQUM7SUFHRCxTQUFTLFlBQUMsQ0FBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuLy8gaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xuLy8gY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHRhYkluZGV4OiAwLCAgICAgICAgLy8gaGVhZC10YWLpu5jorqTpgInkuK3kuIvmoIcw55qE6aG5XG4gICAgaWNvbnM6WyAgICAgICAgICAgICAvLyDlm77moIfpm4blkIhcbiAgICAgIHtcbiAgICAgICAgaWNvbjogJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1FYYmFSMkJMazdJb2lnNXRVT0gxNFhBT3hHcExkRGY1OTFvUmJydHlMSVowMURIT05tQkEnLFxuICAgICAgICB0aXRsZTogJ+Wwj+eoi+W6jzEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUjNReDVHV3B6RW5mVHg3WVFXWDRyRWpFTmtpNnFIb2ljMHV5a25tWTVXMjBwaDgxY1lKdycsXG4gICAgICAgIHRpdGxlOiAn5bCP56iL5bqPMidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246ICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUbHdJOTRyZmZVTEZ5a19lOGtXcGtZb1FwbGVndVFsTTE0Tmd0NEhGSXV6YUpoSWNyNScsXG4gICAgICAgIHRpdGxlOiAn5bCP56iL5bqPMydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246ICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUMDF3TVNscE8xd25URDZBeVdqZ0FDN2R5Zl9iYkdFRXFtTFlWMUc4WmJoYlYyblJkbycsXG4gICAgICAgIHRpdGxlOiAn5bCP56iL5bqPNCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246ICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NRRnMydjd4WEdET2NBNVdIbWlLVDkzUUJhaWpHY2hVU0VfbW9ORlJvak1LbzBWVFpwbGlRJyxcbiAgICAgICAgdGl0bGU6ICflsI/nqIvluo81J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1RsckxSVWM3ZllzLThjZFhxTFBhSHNUZkIyMFdxS2VJOUlTa1VqZkdjQS0xNXBKeVIyNkEnLFxuICAgICAgICB0aXRsZTogJ+Wwj+eoi+W6jzYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVGIycVZvRXVyUlByQXhEV2VpWUE3bHBRSHJwZFZaVGkxZHBNdTJmQ0xQNzRFd1VKZjAnLFxuICAgICAgICB0aXRsZTogJ+Wwj+eoi+W6jzcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVDAwTzVWSVN5OXBEcW5kMFBnemo3TXZBT3FRd2prblhKV0FQbllSc0w3b2RsaDNtR3onLFxuICAgICAgICB0aXRsZTogJ+Wwj+eoi+W6jzgnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVGk4YzlubEFqX0pJcFRneHNFNE1wM3Z5MGxZeHpzcTJYWS00LVZyeWRmM2VjbW92TlQnLFxuICAgICAgICB0aXRsZTogJ+Wwj+eoi+W6jzknXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICBcbiAgfSxcblxuICAvLyDliIfmjaJoZWFkIHRhYlxuICBzd2l0Y2hUYWIoZTogYW55KXtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIC8vIOW9k+WJjeS4i+agh1xuICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgdGFiSW5kZXg6IGluZGV4XG4gICAgfSk7XG4gIH1cbn0pXG4iXX0=