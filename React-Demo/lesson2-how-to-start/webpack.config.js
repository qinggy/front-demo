

var webpack = require('webpack');//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错

//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = { //注意这里是exports不是export
    devtool: "eval-source-map", //生成Source Maps,这里选择eval-source-map
    entry:[ 'webpack/hot/dev-server', __dirname + "/app/main.js"], //唯一入口文件，就像Java中的main方法
    output: { //输出目录
        path: __dirname + "/build", //打包后的js文件存放的地方
        filename: "bundle.js" //打包后的js文件名
    },

    module: {
        //loaders 加载器
        loaders: [{
            test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
            exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
            loader: 'babel-loader' //loader的名称（必须）
        }]
    },


    // Hot Module Replacement（HMR）是webpack里很有用的一个插件，它允许你在修改组件代码后，自动刷新实时预览修改后的效果。
    // 在webpack中实现HMR也很简单，只需要做两项配置
    
    // 在webpack配置文件中添加HMR插件；
    // 在Webpack Dev Server中添加“hot”参数；
    // 不过配置完这些后，JS模块其实还是不能自动热加载的，还需要在你的JS模块中执行一个Webpack提供的API才能实现热加载，虽然这个API不难使用，但是如果是React模块，使用我们已经熟悉的Babel可以更方便的实现功能热加载。
    
    // 整理下我们的思路，具体实现方法如下
    
    // Babel和webpack是独立的工具
    // 二者可以一起工作
    // 二者都可以通过插件拓展功能
    // HMR是一个webpack插件，它让你能浏览器中实时观察模块修改后的效果，但是如果你想让它工作，需要对模块进行额外的配额；
    // Babel有一个叫做react-transform-hrm的插件，可以在不对React模块进行额外的配置的前提下让HMR正常工作；
  
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],

    //webpack-dev-server配置
    devServer: {
        contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        //colors: true,//在cmd终端中输出彩色日志
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8080,//设置默认监听端口，如果省略，默认为"8080"
        //process: true //显示合并代码进度
    }
};