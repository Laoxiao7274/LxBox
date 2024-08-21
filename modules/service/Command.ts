// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 

import { MessageConstant } from "../Constant/MessageConstant";

export class LxCommand{
    /**
     * 指令注册
     */
    static create(){
        const cmd : Command = mc.newCommand("lxbox","空岛核心指令",PermType.Any)
        cmd.setAlias("lb")
        cmd.setEnum("team",["team"]);
        cmd.setEnum("structure",["structure"])
        cmd.setEnum("init",["init"])
        cmd.mandatory("action",ParamType.Enum,"team")
        cmd.mandatory("action",ParamType.Enum,"structure")
        cmd.mandatory("structure",ParamType.Enum,"init")
        cmd.overload([])
        cmd.overload(["team"])
        cmd.overload(["structure","init"])
        cmd.setCallback((cmd:Command,ori:CommandOrigin,out:CommandOutput,res:any)=>{
            if(ori.player == undefined){
                log(MessageConstant.PREFIX+`非玩家权限执行此命令`)
                return
            }
            const player:Player = ori.player
            switch(res.action){
                case "team":
                    break;
                case "structure":
                    
                    break;
                default:
                    player.tell(MessageConstant.PREFIX+"请输入正确的命令!")
                    break;
            }
        })
        cmd.setup()
    }
}