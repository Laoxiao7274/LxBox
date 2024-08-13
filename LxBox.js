"use strict";
// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("./modules/service/Command");
var PluginCheck_1 = require("./modules/PluginCheck/PluginCheck");
var Team_1 = require("./modules/pojo/entity/Team");
ll.registerPlugin(
/* name */ "LxBox", 
/* introduction */ "一款基于LSE的空岛核心", 
/* version */ [0, 0, 1], 
/* otherInformation */ { "作者": "xiaoziyi", "版本": "测试版本" });
var Conf = new JsonConfigFile("./plugins/LxBox/config.json");
var teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json");
teamListFile.init("teamList", []);
mc.listen("onServerStarted", function () {
    logger.info("LxBox加载中...");
    //可选依赖
    PluginCheck_1.PluginCheck.check();
    //指令注册
    Command_1.LxCommand.create();
    //API导出
    exportAPI();
    logger.info("LxBox加载成功!");
});
function exportAPI() {
    Team_1.Team.export();
}
