---
title: 关于网站的建设
date: 2023-10-9
updated: 2023-10-9
categories: 关于网站建设
tags:
  - valaxy
  - 网站
# top: 1
---

**参考的网站：**
[从零开始创建一个网站](https://www.yunyoujun.cn/posts/how-to-build-your-site)、
[云主题](https://yun.yunyoujun.cn/guide/)、[valaxy](https://valaxy.site/) 

作为小白，对于网站的一系列操作完全不懂，只能说是边摸索踩坑了……
所幸，阶段性成功。☆*: .｡. o(≧▽≦)o .｡.:*☆



## 关于网站的建设的碎碎念
目前算是误打误撞的可以用valaxy来进行网站的基本编辑了。
但是离自己完全控制还差的远……

##### 暗夜无光
在某一次线上更改后，网站出现了问题，就这样404了……
在接下来的时间我应该是会花好多时间来学习网站的相关知识，争取早日使他重新上线。

##### 后续
之后，版本返回到了刚上传的前一天……

分析之前的问题，可能是由于在主分支修改，导致不稳定而出现的意外现象，处理方法是备份，而且版本备份是很重要的一件事。

**在线编辑很容易丢失数据，目前的网速不足以支持在线编辑……~~以后解决吧……~~**


# 一些基础
- 网页是怎么工作的？
  
  网页是有静态资源（HTML、CSS、JavaScript、图片等）和动态资源（服务器端脚本）组成。
  ![一个网页的组成](./picture/compose_of_web.png)

  网页的生成过程如下：
  1. 用户在浏览器中输入URL，并请求服务器。
  2. 服务器接收到请求，并使用静态资源（HTML、CSS、JavaScript、图片等）和动态资源（服务器端脚本）生成网页。
  3. 网页生成完毕，浏览器将网页发送给用户。
  4. 用户接收到网页，并显示在浏览器中。

   在这个小项目中，使用valaxy来搭建网站。 valaxy是一个基于Vue.js和Vite的静态网站生成器。 [Vue.js](https://v2.cn.vuejs.org/v2/guide/)是构建用户界面的JavaScript框架，而[Vite](https://vitejs.dev/guide/why.html)是一个构建工具，可以快速构建现代Web应用程序，可以看成是JavaScript框架的界面生成加速器。

## 参考文档
- [github托管的官方文档](https://docs.github.com/zh/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)

- [超可爱！使用 Valaxy 搭建自己的博客](https://yuumi0221.github.io/posts/valaxy#%E7%BC%96%E8%BE%91%E9%85%8D%E7%BD%AE)



