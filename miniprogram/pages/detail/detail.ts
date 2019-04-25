Page({
    data: {
        pid:0,          // 小程序详情id
    },
    onLoad(options: any){
        this.data.pid = options.id;
    },
});