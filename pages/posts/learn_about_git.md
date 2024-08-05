---
title: git学习笔记
date: 2024-7-21
updated: 2024-7-21
categories: 计算机网络
tags:
  - 
  - 
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
# 取消暂存 ：$ git reset HEAD YOUR-FILE

$ git commit -m "First commit" 
# 提交跟踪的更改，并准备将其推送到远程存储库,要删除此提交并修改文件，请使用 'git reset --soft HEAD~1' 并再次提交和添加文件。

$ git push
#第一次提交时` git push -u origin main`
```
## 如何恢复到原先版本？
要将您的Git仓库恢复到先前的版本，您可以使用以下步骤：

1. **查看Git提交历史：** 首先，您需要查看您的Git提交历史，以找到要恢复的特定版本的提交哈希（commit hash）。使用以下命令来查看提交历史：

   ```bash
   git log
   ```

   这将列出您的仓库的所有提交，包括它们的哈希、作者、日期和提交消息。

2. **切换到目标版本：** 一旦您找到要恢复的版本的提交哈希，您可以使用以下命令将仓库切换到该版本：

   ```bash
   git reset --hard <commit-hash>
   ```

   请将 `<commit-hash>` 替换为您想要恢复的版本的提交哈希。例如：

   ```bash
   git reset --hard abc12345
   ```

   这将把仓库重置到指定版本，删除所有后续的提交。

3. **强制推送到远程仓库（可选）：** 如果您已经推送了更改到远程仓库，并且希望将远程仓库的内容恢复到与本地仓库相匹配的版本，您可以使用以下命令进行强制推送：

   ```bash
   git push -f origin <branch-name>
   ```

   其中 `<branch-name>` 是您的分支名称，通常是 `main` 或 `master`。请注意，强制推送可能会覆盖远程仓库的内容，所以谨慎使用。

请注意，上述操作将永久删除提交历史中的较新提交。在执行这些命令之前，请确保已备份您的数据，以免丢失重要的更改。
