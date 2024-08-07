---
title: git学习笔记
date: 2024-7-21
updated: 2024-7-21
categories: 学习笔记
tags:
  - 网站
  - git
# top: 2
---



## 如何git远程提交？
* 在根目录右键： `git bash here`
```bash

$ git init -b main #初始化为git仓库
# 其中使用 -b 设置默认分支的名称，目的是让该根目录置于git管理。

$ git remote add origin xxxxxxxx（xxxxxxxx是你的远程仓库的访问路径）
# 和远程仓库建立联系

$ git add . # 暂存
# 取消暂存 ：$ git reset HEAD <文件名>

$ git commit -m "First commit" 
# 提交跟踪的更改，并准备将其推送到远程存储库,要删除此提交并修改文件，请使用 'git reset --soft HEAD~1' 并再次提交和添加文件。

$ git push
#第一次提交时` git push -u origin main`
```
## 如何恢复到原先版本？
要将您的Git仓库恢复到先前的版本，您可以使用以下步骤：

1. **查看Git提交历史：** 首先，您需要查看您的Git提交历史，以找到要恢复的特定版本的提交哈希（commit hash）。使用以下命令来查看提交历史：

   ```bash
   $ git log
   # 寻找想要恢复的版本所对应的哈希值（<commit-hash>）。

   $ git reset --hard <commit-hash>
   # 将仓库切换到该版本，如：
   # git reset --hard abc12345。

   $ git push -f origin <branch-name>
   # 进行强制推送，其中 <branch-name> 是分支名称，通常是 'main' 或 'master'。
   ```



