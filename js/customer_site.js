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
        adult: true,
    },
    yingshigongchang: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '影视工厂',
    },
    fantuanyingshi: {
        api: 'https://www.fantuan.tv/api.php/provide/vod/',
        name: '饭团影视',
    },
    dyttjh: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com',
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
        detail: 'https://tyyszy.com/api.php/provide/vod',
    },
    tryzy: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: 'TV-如意资源',
    },
    qryzy: {
        api: 'http://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
        detail: 'http://cj.rycjapi.com/api.php/provide/vod',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
        detail: 'https://bfzyapi.com/api.php/provide/vod',
    },
    yvsmy: {
        api: 'https://api.1080zyku.com/inc/apijson.php/',
        name: 'TV-神马云',
        detail: 'https://api.1080zyku.com',
    },
    tvmtzy: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: 'TV-茅台资源',
        detail: 'https://caiji.maotaizy.cc',
    },
    heimuer02: {
        api: 'https://json02.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳点播',
        detail: 'https://json02.heimuer.xyz',
    },
    ffzy: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod',
        name: '非凡资源',
        detail: 'https://cj.ffzyapi.com',
    },
    ffys: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv',
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
        detail: 'https://dbzy.tv/api.php/provide/vod',
    },
    mzzy: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
        detail: 'https://mozhuazy.com/api.php/provide/vod',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
        detail: 'https://www.mdzyapi.com/api.php/provide/vod',
    },
    zdzy: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源',
        detail: 'https://api.zuidapi.com/api.php/provide/vod',
    },
    yhzy: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源',
        detail: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
    },
    wjzy: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源',
        detail: 'https://api.wujinapi.me/api.php/provide/vod',
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧',
        detail: 'https://wwzy.tv/api.php/provide/vod',
    },
    ikzy: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源',
        detail: 'https://ikunzyapi.com/api.php/provide/vod',
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
        detail: 'https://360zy.com/api.php/provide/vod',
    },
    mtzy: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源',
        detail: 'https://caiji.maotaizy.cc/api.php/provide/vod',
    },
    caijidb: {
        api: 'https://caiji.dbzy.tv/api.php/provide/vod',
        name: 'cj-豆瓣资源',
        detail: 'https://caiji.dbzy.tv',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com',
    },
    zyku1080: {
        api: 'https://api.1080zyku.com/inc/api_mac10.php',
        name: '1080资源库',
        detail: 'https://api.1080zyku.com',
    },
    ukuapi88: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: 'U酷88资源',
        detail: 'https://api.ukuapi88.com',
    },
    wldbzy: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod',
        name: 'TV-卧龙点播',
        detail: 'https://collect.wolongzyw.com',
    },
    twlzyw: {
        api: 'https://collect.wolongzy.cc/api.php/provide/vod',
        name: 'TV-卧龙资源',
    },
    tvwlzy: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
        detail: 'https://wolongzyw.com/api.php/provide/vod',
    },
    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪点播',
        detail: 'https://api.xinlangapi.com',
    },
    ckzy: {
        api: 'https://www.ckzy1.com/api.php/provide/vod',
        name: 'CK资源',
        adult: true,
    },
    jkun: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: 'jkun资源',
        adult: true,
    },
    bwzy: {
        api: 'https://api.bwzym3u8.com/api.php/provide/vod',
        name: '百万资源',
        adult: true,
    },
    souav: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: 'souav资源',
        adult: true,
    },
    r155: {
        api: 'https://155api.com/api.php/provide/vod',
        name: '155资源',
        adult: true,
    },
    lsp: {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: 'lsb资源',
        adult: true,
    },
    hsckzy: {
        api: 'https://hsckzy.vip/api.php/provide/vod',
        name: '黄色仓库',
        detail: 'https://hsckzy.vip',
        adult: true,
    },
    nnhzy: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '牛牛资源',
        adult: true,
    },
    ywwhzy: {
        api: 'https://155api.com/api.php/provide/vod',
        name: '155黄色资源',
        adult: true,
    },
    fcpkzy: {
        api: 'https://api.fczy888.me/api.php/provide/vod',
        name: '蜂巢片库',
        adult: true,
    },
    ddwlzy: {
        api: 'https://dadiapi.com/api.php/provide/vod',
        name: '大地资源网络',
        adult: true,
    },
    hsazy: {
        api: 'https://hsckzy888.com/api.php/provide/vod',
        name: '黄色资源啊啊',
        adult: true
    },
    xjjzy: {
        api: 'https://api.xiaojizy.live/provide/vod',
        name: '小鸡资源',
        adult: true,
    },
    ljzzy: {
        api: 'https://apilj.com/api.php/provide',
        name: '辣椒资源黄黄',
        adult: true,
    },
    shszy: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: '搜av黄色资源',
        adult: true,
    },
    yzyzy: {
        api: 'https://api.yzzy-api.com/inc/ldg_api_all.php/provide/vod',
        name: '优质资源库1080zyk6.com高清',
        adult: true,
    },
    xmmzy: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
        adult: true,
    },
    jymdzy: {
        api: 'https://www.caoliuzyw.com/api.php/prodao/vod',
        name: 'AV-草榴资源',
        detail: 'https://www.caoliuzyw.com',
        adult: true,
    },
    jymdzy: {
        api: 'https://91md.me/api.php/provide/vod',
        name: 'AV-91麻豆',
        detail: 'https://91md.me',
        adult: true,
    },
    avaizy: {
        api: 'http://lbapiby.com/api.php/provide/vod',
        name: 'AV-AIvin',
        adult: true,
    },
    jkazy: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: 'AV-JKUN资源',
        detail: 'https://jkunzyapi.com',
        adult: true,
    },
    savzy: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: 'AV-souav资源',
        detail: 'https://api.souavzy.vip',
        adult: true,
    },
    lbzy: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: 'AV-乐播资源',
        adult: true,
    },
    oskzy: {
        api: 'https://aosikazy.com/api.php/provide/vod',
        name: 'AV-奥斯卡资源',
        detail: 'https://aosikazy.com',
        adult: true,
    },
    nxxzy: {
        api: 'https://Naixxzy.com/api.php/provide/vod',
        name: 'AV-奶香香',
        detail: 'https://Naixxzy.com',
        adult: true,
    },
    slzy: {
        api: 'https://slapibf.com/api.php/provide/vod',
        name: 'AV-森林资源',
        detail: 'https://slapibf.com',
        adult: true,
    },
    ysjzy: {
        api: 'https://www.xrbsp.com/api/json.php',
        name: 'AV-淫水机资源',
        detail: 'https://www.xrbsp.com',
        adult: true,
    },
    ytzy: {
        api: 'https://apiyutu.com/api.php/provide/vod',
        name: 'AV-玉兔资源',
        detail: 'https://apiyutu.com',
        adult: true,
    },
    fhzy: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: 'AV-番号资源',
        adult: true,
    },
    bpzy: {
        api: 'https://www.kxgav.com/api/json.php',
        name: 'AV-白嫖资源',
        detail: 'htts://www.kxgav.com',
        adult: true,
    },
    jpzy: {
        api: 'https://www.jingpinx.com/api.php/provide/vod',
        name: 'AV-精品资源',
        detail: 'https://www.jingpinx.com',
        adult: true,
    },
    msnzy: {
        api: 'https://www.msnii.com/api/json.php',
        name: 'AV-美少女资源',
        detail: 'https://www.msnii.com',
        adult: true,
    },
    lsbzy: {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: 'AV-老色逼资源',
        detail: 'https://apilsbzy1.com',
        adult: true,
    },
    sngzy: {
        api: 'https://api.sexnguon.com/api.php/provide/vod',
        name: 'AV-色南国',
        detail: 'https://api.sexnguon.com',
        adult: true,
    },
    smzy: {
        api: 'https://api.maozyapi.com/inc/apijson_vod.php',
        name: 'AV-色猫资源',
        detail: 'https://api.maozyapi.com',
        adult: true,
    },
    ljzy: {
        api: 'https://apilj.com/api.php/provide/vod',
        name: 'AV-辣椒资源',
        detail: 'https://apilj.com',
        adult: true,
    },
    xnezy: {
        api: 'https://www.gdlsp.com/api/json.php',
        name: 'AV-香奶儿资源',
        detail: 'https://www.gdlsp.com',
        adult: true,
    },
    hav: {
        api: 'https://www.pgxdy.com/api/json.php',
        name: 'AV-黄AV资源',
        detail: 'https://www.pgxdy.com',
        adult: true,
    },
    avsy: {
       api: 'https://shayuapi.com/api.php/provide/vod',
        name: 'AV-鲨鱼资源',
        detail: 'https://shayuapi.com',
        adult: true,
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
