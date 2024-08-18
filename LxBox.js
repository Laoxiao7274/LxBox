"use strict";
// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("./modules/service/Command");
var PluginCheck_1 = require("./modules/PluginCheck/PluginCheck");
var Team_1 = require("./modules/pojo/entity/Team");
var Protect_1 = require("./modules/service/Protect");
ll.registerPlugin(
/* name */ "LxBox", 
/* introduction */ "一款基于LSE的空岛核心", 
/* version */ [0, 0, 1], 
/* otherInformation */ { "作者": "xiaoziyi", "版本": "测试版本" });
var Conf = new JsonConfigFile("./plugins/LxBox/config.json");
var teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json");
teamListFile.init("teamList", []);
Conf.init("teamChatPrefix", "\u00A7e\u00A7l[ \u00A73\u00A7l\u961F\u5185 \u00A7e\u00A7l]\u00A7r\u00A7l");
mc.listen("onServerStarted", function () {
    logger.info("LxBox加载中...");
    //可选依赖
    PluginCheck_1.PluginCheck.check();
    //指令注册
    Command_1.LxCommand.create();
    //队内聊天监听
    Team_1.Team.chatListen();
    //API导出
    exportAPI();
    //Protect权限监听
    Protect_1.Protect.perListen();
    //test
    //Protect.export()
    logger.info("LxBox加载成功!");
});
/**
 * 全部API导出
 */
function exportAPI() {
    Team_1.Team.export();
}
