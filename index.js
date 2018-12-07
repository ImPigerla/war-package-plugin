'use strict'

var exec = require('child_process').exec

function puts (error, stdout, stderr) {
    console.log(stdout, stderr)
}

function ShellWarPlugin (options) {
    var defaultOptions = {
        onBuildEnd: []
    }

    this.options = Object.assign(defaultOptions, options)
}

ShellWarPlugin.prototype.apply = function (compiler) {
    const options = this.options

    compiler.plugin('after-emit', (compilation, callback) => {
        if (options.onBuildEnd.length) {
            console.log('============= Webpack构建结束，开始打War包 =============')
            options.onBuildEnd.forEach(script => exec(script, puts))
        }
        callback()
    })
}

module.exports = ShellWarPlugin