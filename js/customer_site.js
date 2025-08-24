const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    xibaocaiji: {
        api: 'https://www.xxibaozyw.com/api.php/provide/vod',
        name: '细胞采集黄色',
    },
    yingshigongchang: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '影视工厂',
    },
    fantuanyingshi: {
        api: 'https://www.fantuan.tv/api.php/provide/vod/',
        name: '饭团影视',
    },
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: .'电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com',
    },
     heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv',
    },
     heimuer02: {
        name: '黑木耳点播',
        api: 'https://json02.heimuer.xyz/api.php/provide/vod',
        detail: 'https://json02.heimuer.xyz',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
