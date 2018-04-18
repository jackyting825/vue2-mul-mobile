# vue-mul-cli

> 基于vue-cli的多页配置实例

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 概述

- 修改了`entries` 和 `HtmlWebpackPlugin`,实现了多页配置.
- 配置`alias`,实现快速访问
- 增加`scss`语法支持
- 增加`postcss` `autoprefix`支持,打包的样式文件会自动补全css
- 增加页面`titile`的配置,参考`page.conf.js`
- 支持 `hot-reload`,编辑器保存后浏览器自动刷新
- 将必需的第三方基础类库挂载到template中
- 支持build时过滤`.svn`文件夹
- build后生成与项目名称同名的文件夹,以替换`dist`目录

其他内容后续补充

### 一些tips
~~在引入第三方库的时候,比如`UI组件库`等,个人觉得应该放在static中,避免重复编译,拖慢编译速度.~~

~~实际上,如果将库文件放在`static`中,因为没有经过webpack处理,而是直接copy,可能会导致在dev环境中,无法使用库文件中的内容,比如,`jQuery`的代码无效(能解决)~~


在vue-cli中引入图片不能正常显示?
url-loader无法解析js动态生成的路径。
如果引用了本地图片,且是变量的话,应当把图片放在static下.
如果不是变量,直接书写 `<img src="../../assets/logo.png">`是没有问题的


#### 引入第三方js库的方式
<strong>使用类似vendor的方式</strong>

```js
// webpack.base.conf.js 配置 entry
entry: {
   vendor: ['vue'],
   mui: path.resolve(__dirname, libs+'/mui/mui.js')
}
```

```js
new HtmlWebpackPlugin({
    chunks: ['vendor','mui',entry],
    filename: entry + '.html',
    template: 'src/template/index.html',
    ```
})
```

2. 使用 `CommonsChunkPlugin` 实现
可以配置实现: 当文件被公共引用 N 次,则抽离打包成公用文件

3. 方式三
在 template.html 中直接写静态地址,也可以用于加载CDN中的文件
```html
<script src="./static/libs/mui.min.js"></script>
```
在`webpack.conf.base.js`中设置 `externals`,
其中后面的value值对应第三方js库的外部变量,比如window.Zepto
```js
  externals: {
    //添加外部文件的引用
    'zepto': 'Zepto',
    'mui': 'mui'
  },
```

在需要使用的时候正常引入
```js
//比如
import mui from 'mui'
import zepto from 'zepto'
```
### 自定义组件命名
在`vue`中的自定义组件匹配策略的优先顺序从高到低为：原标签名、camelCase化的标签名、PascalCase化的标签名。

例如 <my-component> 会依次匹配 my-component、myComponent、MyComponent。

假设一个组件名为`<header-top>`,那么引入这个自定义组件的命名可以为:
```js
// 1.PascalCase风格
import HeaderTop from '@components/Header'
// 2.camelCase 风格
import headerTop from '@components/Header'
// 3. 原标签名风格
import header-top from '@components/Header'
```

> 虽然三种都可以,但还是推荐统一一种风格

### 引入MUI组件库的问题
因为项目中需要使用到`mui.css`,结果在尝试引入`mui.css`时,`prod`环境编译异常,最终折中选择将其挂载到`template/index.html`

> 引入其他同类组件库并没有发现类似问题,正常导入即可.

目录结构:
本项目是多页面结构,
modules下存放各个页面,每个页面类似一个单页面应用.有自己的组件路由,需要按照文件夹的方式独立拜访

>/modules/alloyimgae ->alloyimgae图像库的使用Demo http://localhost:8081/alloyimage.html

>/modules/i18n ->国际化demo http://localhost:8081/i18n.html

>/modules/index ->默认的首页,使用了mint-ui按需加载组件,vue-router,(以及多页面超链接跳转,移动端通常用不着),包含通过dcloud和APP原生部分交互使用demo http://localhost:8081

>/modules/login ->vue-router使用Demo http://localhost:8081/login.html

>/modules/test ->axios网络请求数据使用Demo http://localhost:8081/test.html

>/modules/vuex ->vuex,vue-router,dcloud,路由转场动画综合使用Demo http://localhost:8081/vuex.html

>图片资源存放到static文件夹下面对应的目录

>JavaScript工具类存放在src/utils下

>src/template这个目录不要做任何修改

>src/api下面的index.js存放index模块的远程ajax的url,其他模块类似

>src/components目录存放整个多页面项目公用的组件

>src/assets/css/common.js定义了路由转场动画和禁用手机长按出现复制选项

>手机多模块开放建议在static文件夹下建自己模块名字的文件夹,下面存放该模块的图片,这样集成到原生的时候方便删除不需要的模块资源,例子中新建了index和test这2个模块文件夹
