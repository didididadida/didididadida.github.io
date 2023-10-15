import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from "valaxy-addon-waline";
// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

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
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
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
  addons: [
    addonComponents(),
    addonWaline({
      serverURL: "https://comment-depu6owp0-didididadidas-projects.vercel.app/",		// Waline服务链接
      locale: {
        placeholder: "填写qq邮箱或点击登录，可以展示个人头像",
      },
      comment: true,
      pageview: true
    }),
  ],
  unocss: { safelist },
})
