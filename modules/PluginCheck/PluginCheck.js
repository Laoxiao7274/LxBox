"use strict";
// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginCheck = void 0;
var MessageConstant_1 = require("../Constant/MessageConstant");
/**
 * 子插件检测类
 */
var PluginCheck = /** @class */ (function () {
    function PluginCheck() {
    }
    /**
     * 子插件检测
     */
    PluginCheck.check = function () {
        logger.info("".concat(MessageConstant_1.MessageConstant.PREFIX, "\u5B50\u63D2\u4EF6\u68C0\u6D4B\u4E2D..."));
        //空岛插件检测
        this.IsLandCheck();
    };
    /**
     * 空岛插件检测
     */
    PluginCheck.IsLandCheck = function () {
        if (File.exists("./plugins/LxBox/plugins/IsLand.js")) {
            var IsLand = require("../../plugins/IsLand.js").IsLand;
            //调用空岛插件函数
            IsLand.main();
        }
    };
    return PluginCheck;
}());
exports.PluginCheck = PluginCheck;
