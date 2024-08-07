import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({

  url: 'https://didididadida.github.io/',
  lang: 'zh-CN',
  title: '关于这个站点',
  author: {
    name: '户村',
    avatar: 'https://wallhaven.cc/wallpapers/tmp/temp_66b3a635cda43.png',
  },
  /**
   * 站点图标
   */
  favicon: 'https://didididadida.github.io/img/zhuti/favicon.svg',
  /**
   * 副标题
   */
  description: 'please believe yourself',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    // {
    //   name: 'QQ 群 1050458482',
    //   link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
    //   icon: 'i-ri-qq-line',
    //   color: '#12B7F5',
    // },
    // {
    //   name: 'GitHub',
    //   link: 'https://github.com/YunYouJun',
    //   icon: 'i-ri-github-line',
    //   color: '#6e5494',
    // },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    // {
    //   name: '网易云音乐',
    //   link: 'https://music.163.com/#/user/home?id=247102977',
    //   icon: 'i-ri-netease-cloud-music-line',
    //   color: '#C20C0C',
    // },
    // {
    //   name: '知乎',
    //   link: 'https://www.zhihu.com/people/yunyoujun/',
    //   icon: 'i-ri-zhihu-line',
    //   color: '#0084FF',
    // },
    // {
    //   name: '哔哩哔哩',
    //   link: 'https://space.bilibili.com/1579790',
    //   icon: 'i-ri-bilibili-line',
    //   color: '#FF8EB3',
    // },
    // {
    //   name: '微信公众号',
    //   link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
    //   icon: 'i-ri-wechat-2-line',
    //   color: '#1AAD19',
    // },
    // {
    //   name: 'Twitter',
    //   link: 'https://twitter.com/YunYouJun',
    //   icon: 'i-ri-twitter-line',
    //   color: '#1da1f2',
    // },
    // {
    //   name: 'Telegram Channel',
    //   link: 'https://t.me/elpsycn',
    //   icon: 'i-ri-telegram-line',
    //   color: '#0088CC',
    // },
    {
      name: 'E-Mail',
      link: 'mailto:didididadida@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: true,//false,
  },

  sponsor: {
    enable: true,
    description:"没钱吃饭了…… ",
    methods: [
      {
        name: '支付宝',
        url: 'https://wallhaven.cc/wallpapers/tmp/temp_66b3a3c4edf89.png',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: '微信支付',
        url: 'https://wallhaven.cc/wallpapers/tmp/temp_66b3a3a66042e.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },

    /**
   * 默认 Frontmatter
   */
    Frontmatter: {
      time_warning: false,

    },


  /**
   * 开启阅读统计
   */
  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  /**
   * 文章中所有代码块高度都不会超过 300px，并自动折叠
   */
  codeHeightLimit: 300,

    /**
   * 文章中开启加密
   */
  encrypt: {
    enable: true,
  },

   /**
   * 客户端开启重定向
   */
  redirects: {
    useVueRouter: true,
    rules: [
      {
        from: ['/foo', '/bar'],
        to: '/about',
      },
      {
        from: '/v1/about',
        to: '/about',
      },
    ]
  },


   /**
   * 开启图片预览功能
   */
  mediumZoom: { enable: true },

  /**
   * 开启搜索功能
   */
  search: {
    enable: true,
    // 设置类型为 Fuse
    type: 'fuse',
  },
})




