// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 

import { LxCommand } from "./modules/service/Command";
import { PluginCheck } from "./modules/PluginCheck/PluginCheck";
import { Team } from "./modules/pojo/entity/Team";
import { Protect } from "./modules/service/Protect";
import { Money } from "./modules/service/Money";
import { Message } from "./modules/service/Message";

ll.registerPlugin(
/* name */ "LxBox", 
/* introduction */ "一款基于LSE的空岛核心", 
/* version */ [0, 0, 1], 
/* otherInformation */ { "作者": "xiaoziyi", "版本": "测试版本" });

const Conf = new JsonConfigFile("./plugins/LxBox/config.json")
const TeamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json")
const MsgFile = new JsonConfigFile("./plugins/LxBox/data/msg.json")

TeamListFile.init("teamList",[])
MsgFile.init("msgs",[])
Conf.init("teamChatPrefix",`§e§l[ §3§l队内 §e§l]§r§l`)

mc.listen("onServerStarted",()=>{
    logger.info("LxBox加载中...")
    //可选依赖
    PluginCheck.check()
    //指令注册
    LxCommand.create()
    //队内聊天监听
    Team.chatListen()
    //API导出
    exportAPI()
    //Protect权限监听
    Protect.perListen()
    //test
    //Protect.export()
    logger.info("LxBox加载成功!")
})

/**
 * 全部API导出
 */
function exportAPI(){
    Team.export()
    Money.export()
    Message.export()
}


