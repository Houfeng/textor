/**
 * 应用启动模块
 */
define(function (require, exports, module) {
    "use strict";

    var app = require('mokit/app');
    var $ = require('mokit/jquery');
    var lang = require('mokit/language');

    /**
     * 加载配置
     */
    var config = app.config = require('mokit/ems-json!package.json');

    /**
     * 样式配置
     */
    app.style.addStyle({
        'default': './styles/default/main.css'
    }, module);

    /**
     * 语言配置
     */
    app.language.addLanguage({
        'zh-cn': './languages/zh-cn'
    }, module);

    /**
     * 路由配置
     */
    app.route.addRoute([{
        pattern: '/main',
        target: './controllers/main',
        effect: [0, 0]
    }], module);

    /**
     * 初始化应用程序
     */
    app.init({
        language: config.language,
        style: config.style,
        index: config.index
    });

});