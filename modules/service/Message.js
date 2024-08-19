"use strict";
// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var ErrorConstant_1 = require("../Constant/ErrorConstant");
var Result_1 = require("../pojo/entity/Result");
var MsgFile = new JsonConfigFile("./plugins/LxBox/data/msg.json");
var Message = /** @class */ (function () {
    function Message(playerXuid, msg) {
        this.playerXuid = playerXuid;
        this.msg = msg;
    }
    /**
     * 发送消息
     * @param PlayerName 玩家名称
     * @param msg 消息
     */
    Message.msgSendTo = function (PlayerName, msg) {
        //判断玩家状态(是否在线)
        var player = mc.getPlayer(PlayerName);
        if (player != null) {
            //发送消息
            player.tell(msg);
        }
        else {
            var xuid = data.name2xuid(PlayerName);
            if (xuid == null)
                return Result_1.Result.error(ErrorConstant_1.ErrorConstant.PLAYER_NOT_EXIST);
            //玩家不在线-转存离线消息
            var newMsg = new Message(xuid, msg);
            Message.addOffMessage(newMsg);
        }
        return Result_1.Result.success();
    };
    /**
     * 推送离线消息
     * @param PlayerXuid 玩家XUID
     */
    Message.sendOffMessage = function (PlayerXuid) {
        var msgCount = 0;
        var player = mc.getPlayer(PlayerXuid);
        if (player == null)
            return Result_1.Result.error(ErrorConstant_1.ErrorConstant.PLAYER_NOT_EXIST);
        //在线-推送离线消息
        var msgs = MsgFile.get("msgs");
        msgs.forEach(function (msg) {
            if (msg.playerXuid == PlayerXuid) {
                msgCount++;
                player.tell(msg.msg);
            }
        });
        return Result_1.Result.success(msgCount);
    };
    /**
     * 添加离线消息
     * @param Message 消息对象
     */
    Message.addOffMessage = function (Message) {
        var msgs = MsgFile.get("msgs");
        msgs.push(Message);
        MsgFile.set("msgs", msgs);
    };
    /**
     * API导出
     */
    Message.export = function () {
        ll.exports(Message.addOffMessage, "LB_MESSAGE", "addOffMessage");
        ll.exports(Message.sendOffMessage, "LB_MESSAGE", "sendOffMessage");
        ll.exports(Message.msgSendTo, "LB_MESSAGE", "msgSendTo");
    };
    return Message;
}());
exports.Message = Message;
