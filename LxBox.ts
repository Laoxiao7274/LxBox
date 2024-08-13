// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 

import { LxCommand } from "./modules/service/Command";
import { PluginCheck } from "./modules/PluginCheck/PluginCheck";
import { Team } from "./modules/pojo/entity/Team";

ll.registerPlugin(
/* name */ "LxBox", 
/* introduction */ "一款基于LSE的空岛核心", 
/* version */ [0, 0, 1], 
/* otherInformation */ { "作者": "xiaoziyi", "版本": "测试版本" });

const Conf = new JsonConfigFile("./plugins/LxBox/config.json")
const teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json")

teamListFile.init("teamList",[])

mc.listen("onServerStarted",()=>{
    logger.info("LxBox加载中...")
    //可选依赖
    PluginCheck.check()
    //指令注册
    LxCommand.create()
    //API导出
    exportAPI()
    logger.info("LxBox加载成功!")
})

function exportAPI(){
    Team.export()
}
