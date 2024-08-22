// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 

import { ErrorConstant } from "../Constant/ErrorConstant"
import { MessageConstant } from "../Constant/MessageConstant"
import { Result } from "../pojo/entity/Result"

export class Money {

    /**
     * 获取玩家金币数
     * @param MoneyType 货币类型(LLMoney or ScoreMoney)
     * @param ScoreName 计分板名称
     * @param PlayerXuid 玩家XUID
     */
    static getMoney(MoneyType: "LLMoney" | "ScoreMoney", ScoreName: string, PlayerXuid: string): Result<number> {
        if (MoneyType == "LLMoney") {
            return Result.success(money.get(PlayerXuid))
        }
        else if (MoneyType == "ScoreMoney") {
            const PlayerUUID = data.name2uuid(PlayerXuid)
            if (PlayerUUID == null) return Result.error(ErrorConstant.PLAYER_NOT_EXIST)
            return Result.success(mc.getPlayerScore(PlayerUUID, ScoreName))
        }
        return Result.error(ErrorConstant.UNKNOWN_ERROR)
    }

    /**
     * 设置玩家金币
     * @param MoneyType 货币类型(LLMoney or ScoreMoney)
     * @param ScoreName 计分板名称
     * @param PlayerXuid 玩家XUID
     * @param MoneyCount 金币数量
     * @returns 
     */
    static setMoney(MoneyType: "LLMoney" | "ScoreMoney", ScoreName: string, PlayerXuid: string, MoneyCount: number): Result {
        if (MoneyType == "LLMoney") {
            money.set(PlayerXuid, MoneyCount)
            return Result.success()
        }
        else if (MoneyType == "ScoreMoney") {
            const PlayerUUID = data.name2uuid(PlayerXuid)
            if (PlayerUUID == null) return Result.error(ErrorConstant.PLAYER_NOT_EXIST)
            mc.setPlayerScore(PlayerUUID, ScoreName, MoneyCount)
            return Result.success()
        }
        return Result.error(ErrorConstant.UNKNOWN_ERROR)
    }


    /**
     * 增加玩家金币
     * @param MoneyType 货币类型(LLMoney or ScoreMoney)
     * @param ScoreName 计分板名称
     * @param PlayerXuid 玩家XUID
     * @param MoneyCount 金币数量
     * @returns 
     */
    static addMoney(MoneyType: "LLMoney" | "ScoreMoney", ScoreName: string, PlayerXuid: string, MoneyCount: number): Result {
        if (MoneyType == "LLMoney") {
            money.add(PlayerXuid, MoneyCount)
            return Result.success()
        }
        else if (MoneyType == "ScoreMoney") {
            const PlayerUUID = data.name2uuid(PlayerXuid)
            if (PlayerUUID == null) return Result.error(ErrorConstant.PLAYER_NOT_EXIST)
            mc.addPlayerScore(PlayerUUID, ScoreName, MoneyCount)
            return Result.success()
        }
        return Result.error(ErrorConstant.UNKNOWN_ERROR)
    }

    /**
     * 减少玩家金币
     * @param MoneyType 货币类型(LLMoney or ScoreMoney)
     * @param ScoreName 计分板名称
     * @param PlayerXuid 玩家XUID
     * @param MoneyCount 金币数量
     * @returns 
     */
    static reduceMoney(MoneyType: "LLMoney" | "ScoreMoney", ScoreName: string, PlayerXuid: string, MoneyCount: number): Result {
        if (MoneyType == "LLMoney") {
            money.reduce(PlayerXuid, MoneyCount)
            return Result.success()
        }
        else if (MoneyType == "ScoreMoney") {
            const PlayerUUID = data.name2uuid(PlayerXuid)
            if (PlayerUUID == null) return Result.error(ErrorConstant.PLAYER_NOT_EXIST)
            mc.reducePlayerScore(PlayerUUID, ScoreName, MoneyCount)
            return Result.success()
        }
        return Result.error(ErrorConstant.UNKNOWN_ERROR)
    }

    /**
     * 函数导出
     */
    static export() {
        ll.exports(Money.getMoney, "LB_MONEY", "getMoney")?1:logger.error(`getMoney函数导出失败`)
        ll.exports(Money.addMoney, "LB_MONEY", "addMoney")?1:logger.error(`addMoney函数导出失败`)
        ll.exports(Money.reduceMoney, "LB_MONEY", "reduceMoney")?1:logger.error(`reduceMoney函数导出失败`)
        ll.exports(Money.setMoney, "LB_MONEY", "setMoney")?1:logger.error(`setMoney函数导出失败`)
    }

}