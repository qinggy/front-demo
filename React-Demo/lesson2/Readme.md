## webpack 打包-创建项目步骤(React项目)

> 参考博文地址 http://www.jianshu.com/p/4df92c335617

    - [webpack 打包-创建项目步骤（中间部分过程没有先后）]
    - 1. 创建项目文件结构, 默认可使用app, build等文件夹
    - 2. 使用命令[npm init]来初始化 package.json文件
    - 3. 安装webpack [npm install --save-dev webpack]
    - 4. 创建webpack的配置文件webpack.config.js
    - 5. 为了使用webpack打包，可以在package.json的scripts对象属性下，新增start节点，当然名称可以任意
    - 6. 安装React [npm install --save-dev react react-dom]
    - 7. 安装配置Babel [npm install --save-dev babel-core babel-loader  babel-preset-es2015 babel-preset-react]
    - 8. 书写React代码
    - 9. 启用并安装webpack-dev-server, 实现热更新 [npm install --save-dev webpack-dev-server]
    - 10. 安装配置Hot Module Replacement(hmr)

> webpack-dev-server： 
让你的浏览器监测你代码的修改，并自动刷新修改后的结果，其实Webpack提供一个可选的本地开发服务器，这个本地服务器基于node.js构建，可以实现你想要的这些功能，不过它是一个单独的组件，在webpack中进行配置之前需要单独安装它作为项目依赖

> Hot Module Replacement(hmr)
Hot Module Replacement（HMR）是webpack里很有用的一个插件，它允许你在修改组件代码后，自动刷新实时预览修改后的效果。在webpack中实现HMR也很简单，只需要做两项配置: 1.在webpack配置文件中添加HMR插件；2.在Webpack Dev server中添加“hot”参数；不过配置完这些后，JS模块其实还是不能自动热加载的，还需要在你的JS模块中执行一个Webpack提供的API才能实现热加载，虽然这个API不难使用，但是如果是React模块，使用我们已经熟悉的Babel可以更方便的实现功能热加载。整理下我们的思路，具体实现方法如下Babel和webpack是独立的工具二者可以一起工作二者都可以通过插件拓展功能HMR是一个webpack插件，它让你能浏览器中实时观察模块修改后的效果，但是如果你想让它工作，需要对模块进行额外的配额；Babel有一个叫做react-transform-hrm的插件，可以在不对React模块进行额外的配置的前提下让HMR正常工作；
