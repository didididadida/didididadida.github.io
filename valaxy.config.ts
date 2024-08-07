import { defineValaxyConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-yun'
// import { addonComponents } from 'valaxy-addon-components'
// import { VitePWA } from 'vite-plugin-pwa'
import { presetIcons } from 'unocss'
import { addonWaline } from 'valaxy-addon-waline'



// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<ThemeConfig>({
  // site config see site.config.ts or write in siteConfig
  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },
  // 设置 valaxy-addon-waline 配置项
  addons: [
    addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: 'https://didididadida.vercel.app/',
    }),
  ],




  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '滴滴滴嗒嘀嗒',
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '爱谓何为',
        url: '/links/',
        icon: 'i-ri-heart-line',//'i-ri-genderless-line',
        color: 'red',
      },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
    ],

    footer: {
      since: 2016,
      beian: {
        enable: true,
        icp: '苏ICP备17038157号',
      },
    },
  },
 
 
  // vite: {
  //   // https://vite-pwa-org.netlify.app/
  //   plugins: [VitePWA()],
  // },

  unocss: {
    presets: [
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'height': '1.2em',
          'width': '1.2em',
          'vertical-align': 'text-bottom',
        },
      }),
    ],
  },



  // addons: [
  //   addonComponents()
  // ],



  // vue: {
  //   template: {
  //     compilerOptions: {
  //       isCustomElement: tag => tag.startsWith('my-')
  //     }
  //   }
  // }

  
})



