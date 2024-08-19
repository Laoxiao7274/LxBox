"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorConstant = void 0;
var ErrorConstant = /** @class */ (function () {
    function ErrorConstant() {
    }
    //已经拥有队伍
    ErrorConstant.HAVE_TEAM = "HAVE_TEAM";
    //不在队伍内
    ErrorConstant.NOT_IN_THIS_TEAM = "NOT_IN_THIS_TEAM";
    //没有队伍
    ErrorConstant.DONT_HAVE_TEAM = "DONT_HAVE_TEAM";
    //不能转让自己
    ErrorConstant.CANT_TRANSFER_SELF = "CANT_TRANSFER_SELF";
    //是其他队长
    ErrorConstant.IS_OTHER_CAPTAIN = "IS_OTHER_CAPTAIN";
    //队伍不存在
    ErrorConstant.TEAM_DONT_EXIST = "TEAM_DONT_EXIST";
    //玩家不存在
    ErrorConstant.PLAYER_NOT_EXIST = "PLAYER_NOT_EXIST";
    //未知错误
    ErrorConstant.UNKNOWN_ERROR = "UNKNOWN_ERROR";
    return ErrorConstant;
}());
exports.ErrorConstant = ErrorConstant;
