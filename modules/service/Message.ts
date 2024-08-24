// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 

import { ErrorConstant } from "../Constant/ErrorConstant"
import { Result } from "../pojo/entity/Result"

// const MsgFile = new JsonConfigFile("./plugins/LxBox/data/msg.json")

export class Message {

    playerXuid: string
    msg: string

    constructor(playerXuid: string, msg: string) {
        this.playerXuid = playerXuid
        this.msg = msg
    }

    /**
     * 发送消息
     * @param PlayerName 玩家名称
     * @param msg 消息
     */
    static msgSendTo(PlayerName: string, msg: string): Result {
        //判断玩家状态(是否在线)
        const player = mc.getPlayer(PlayerName)
        if (player != null) {
            //发送消息
            player.tell(msg)
        } else {
            const xuid = data.name2xuid(PlayerName)
            if (xuid == null) return Result.error(ErrorConstant.PLAYER_NOT_EXIST)
            //玩家不在线-转存离线消息
            const newMsg = new Message(xuid, msg)
            Message.addOffMessage(newMsg)
        }
        return Result.success()
    }

    /**
     * 推送离线消息
     * @param PlayerXuid 玩家XUID
     */
    static sendOffMessage(PlayerXuid: string): Result<number> {
        const MsgFile = new JsonConfigFile("./plugins/LxBox/data/msg.json")
        let msgCount = 0
        const player = mc.getPlayer(PlayerXuid)
        if (player == null) return Result.error(ErrorConstant.PLAYER_NOT_EXIST)
        //在线-推送离线消息
        const msgs: Array<Message> = MsgFile.get("msgs")
        msgs.forEach(msg => {
            if(msg.playerXuid == PlayerXuid){
                msgCount++
                player.tell(msg.msg)
            }
        });
        return Result.success(msgCount)
    }

    /**
     * 添加离线消息
     * @param Message 消息对象
     */
    static addOffMessage(Message: Message) {
        const MsgFile = new JsonConfigFile("./plugins/LxBox/data/msg.json")
        let msgs: Array<Message> = MsgFile.get("msgs")
        msgs.push(Message)
        MsgFile.set("msgs", msgs)
    }

    /**
     * API导出
     */
    static export() {
        ll.exports(Message.addOffMessage, "LB_MESSAGE", "addOffMessage")?1:logger.error(`addOffMessage函数导出失败`)
        ll.exports(Message.sendOffMessage, "LB_MESSAGE", "sendOffMessage")?1:logger.error(`sendOffMessage函数导出失败`)
        ll.exports(Message.msgSendTo, "LB_MESSAGE", "msgSendTo")?1:logger.error(`msgSendTo函数导出失败`)
     }

}