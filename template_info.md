# 源码自动生成模板 android

### 概述

* 模板: android
* 模板使用时间: 2017-10-19 16:04:37

### Docker
* Image: registry.cn-beijing.aliyuncs.com/rdc-template/android
* Tag: 1.0
* SHA256: 1de2dffb73e35bb3679287234a7212518100a8409376a523e0da5f0c6d10b13a

### 用户输入参数
* repoUrl: "git@code.aliyun.com:5442-szlng/szlng-h5plus.git" 
* appName: "szlng-h5plus" 
* operator: "aliyun_362228" 
* appReleaseContent: "# 
* 请参考: 请参考 
* https://help.aliyun.com/document_detail/59293.html: https://help.aliyun.com/document_detail/59293.html 
* 了解更多关于release文件的编写方式: 了解更多关于release文件的编写方式 
* [NEWLINE][NEWLINE]#: [NEWLINE][NEWLINE]# 
* 构建源码语言类型[NEWLINE]code.language: java" 

### 上下文参数
* appName: szlng-h5plus
* operator: aliyun_362228
* gitUrl: git@code.aliyun.com:5442-szlng/szlng-h5plus.git
* branch: master


### 命令行
	sudo docker run --rm -v `pwd`:/workspace -e repoUrl="git@code.aliyun.com:5442-szlng/szlng-h5plus.git" -e appName="szlng-h5plus" -e operator="aliyun_362228" -e appReleaseContent="# 请参考 https://help.aliyun.com/document_detail/59293.html 了解更多关于release文件的编写方式 [NEWLINE][NEWLINE]# 构建源码语言类型[NEWLINE]code.language=java"  registry.cn-beijing.aliyuncs.com/rdc-template/android:1.0

