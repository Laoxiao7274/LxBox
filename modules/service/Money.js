"use strict";
// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
var ErrorConstant_1 = require("../Constant/ErrorConstant");
var Result_1 = require("../pojo/entity/Result");
var Money = /** @class */ (function () {
    function Money() {
    }
    /**
     * 获取玩家金币数
     * @param MoneyType 货币类型(LLMoney or ScoreMoney)
     * @param ScoreName 计分板名称
     * @param PlayerXuid 玩家XUID
     */
    Money.getMoney = function (MoneyType, ScoreName, PlayerXuid) {
        if (MoneyType == "LLMoney") {
            return Result_1.Result.success(money.get(PlayerXuid));
        }
        else if (MoneyType == "ScoreMoney") {
            var PlayerUUID = data.name2uuid(PlayerXuid);
            if (PlayerUUID == null)
                return Result_1.Result.error(ErrorConstant_1.ErrorConstant.PLAYER_NOT_EXIST);
            return Result_1.Result.success(mc.getPlayerScore(PlayerUUID, ScoreName));
        }
        return Result_1.Result.error(ErrorConstant_1.ErrorConstant.UNKNOWN_ERROR);
    };
    /**
     * 设置玩家金币
     * @param MoneyType 货币类型(LLMoney or ScoreMoney)
     * @param ScoreName 计分板名称
     * @param PlayerXuid 玩家XUID
     * @param MoneyCount 金币数量
     * @returns
     */
    Money.setMoney = function (MoneyType, ScoreName, PlayerXuid, MoneyCount) {
        if (MoneyType == "LLMoney") {
            money.set(PlayerXuid, MoneyCount);
            return Result_1.Result.success();
        }
        else if (MoneyType == "ScoreMoney") {
            var PlayerUUID = data.name2uuid(PlayerXuid);
            if (PlayerUUID == null)
                return Result_1.Result.error(ErrorConstant_1.ErrorConstant.PLAYER_NOT_EXIST);
            mc.setPlayerScore(PlayerUUID, ScoreName, MoneyCount);
            return Result_1.Result.success();
        }
        return Result_1.Result.error(ErrorConstant_1.ErrorConstant.UNKNOWN_ERROR);
    };
    /**
     * 增加玩家金币
     * @param MoneyType 货币类型(LLMoney or ScoreMoney)
     * @param ScoreName 计分板名称
     * @param PlayerXuid 玩家XUID
     * @param MoneyCount 金币数量
     * @returns
     */
    Money.addMoney = function (MoneyType, ScoreName, PlayerXuid, MoneyCount) {
        if (MoneyType == "LLMoney") {
            money.add(PlayerXuid, MoneyCount);
            return Result_1.Result.success();
        }
        else if (MoneyType == "ScoreMoney") {
            var PlayerUUID = data.name2uuid(PlayerXuid);
            if (PlayerUUID == null)
                return Result_1.Result.error(ErrorConstant_1.ErrorConstant.PLAYER_NOT_EXIST);
            mc.addPlayerScore(PlayerUUID, ScoreName, MoneyCount);
            return Result_1.Result.success();
        }
        return Result_1.Result.error(ErrorConstant_1.ErrorConstant.UNKNOWN_ERROR);
    };
    /**
     * 减少玩家金币
     * @param MoneyType 货币类型(LLMoney or ScoreMoney)
     * @param ScoreName 计分板名称
     * @param PlayerXuid 玩家XUID
     * @param MoneyCount 金币数量
     * @returns
     */
    Money.reduceMoney = function (MoneyType, ScoreName, PlayerXuid, MoneyCount) {
        if (MoneyType == "LLMoney") {
            money.reduce(PlayerXuid, MoneyCount);
            return Result_1.Result.success();
        }
        else if (MoneyType == "ScoreMoney") {
            var PlayerUUID = data.name2uuid(PlayerXuid);
            if (PlayerUUID == null)
                return Result_1.Result.error(ErrorConstant_1.ErrorConstant.PLAYER_NOT_EXIST);
            mc.reducePlayerScore(PlayerUUID, ScoreName, MoneyCount);
            return Result_1.Result.success();
        }
        return Result_1.Result.error(ErrorConstant_1.ErrorConstant.UNKNOWN_ERROR);
    };
    /**
     * 函数导出
     */
    Money.export = function () {
        ll.exports(Money.getMoney, "LB_MONEY", "getMoney") ? 1 : logger.warn("getMoney\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Money.addMoney, "LB_MONEY", "addMoney") ? 1 : logger.warn("addMoney\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Money.reduceMoney, "LB_MONEY", "reduceMoney") ? 1 : logger.warn("reduceMoney\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Money.setMoney, "LB_MONEY", "setMoney") ? 1 : logger.warn("setMoney\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
    };
    return Money;
}());
exports.Money = Money;
