/* global require, module, window */
var Handler = require('./maker/handle/handle.js')

var Mock = {
}

/*
    * Mock.mock( template )
    根据数据模板生成模拟数据。
*/
Mock.mock = function (template) {
    return Handler.gen(template)
}