# war-package-plugin

> 这是一个webpack的插件

## 如何使用

1. 优先机器要有java运行时环境

    jar  // 运行看是否可用

2. 例如在`webpack.prod.conf.js`生产配置文件引入，然后加入到`plugin`，如下代码：

    
    let ShellWarPlugin = require('./index.js')
    
    module.exports = merge(baseConfig, {
        ... // 其他配置
        plugins: [
            ...
            ,
            new ShellWarPlugin({
                onBuildEnd: ['jar -cvfM ./legalAffairFrontEnd.war ./dist/*']
            })
        ]
    })
    

