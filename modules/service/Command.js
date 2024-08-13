"use strict";
// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 
Object.defineProperty(exports, "__esModule", { value: true });
exports.LxCommand = void 0;
var MessageConstant_1 = require("../Constant/MessageConstant");
var LxCommand = /** @class */ (function () {
    function LxCommand() {
    }
    /**
     * 指令注册
     */
    LxCommand.create = function () {
        var cmd = mc.newCommand("lxbox", "空岛核心指令", PermType.Any);
        cmd.setAlias("lb");
        cmd.setEnum("team", ["team"]);
        cmd.mandatory("action", ParamType.Enum, "team");
        cmd.overload([]);
        cmd.overload(["team"]);
        cmd.setCallback(function (cmd, ori, out, res) {
            if (ori.player == undefined) {
                log(MessageConstant_1.MessageConstant.PREFIX + "\u975E\u73A9\u5BB6\u6743\u9650\u6267\u884C\u6B64\u547D\u4EE4");
                return;
            }
            var player = ori.player;
            switch (res.action) {
                case "team":
                    break;
                default:
                    player.tell(MessageConstant_1.MessageConstant.PREFIX + "请输入正确的命令!");
                    break;
            }
        });
        cmd.setup();
    };
    return LxCommand;
}());
exports.LxCommand = LxCommand;
