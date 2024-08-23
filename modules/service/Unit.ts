// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 

import { ErrorConstant } from "../Constant/ErrorConstant"
import { Result } from "../pojo/entity/Result"

/**
 * 创世神api
 */

export class Unit {

    /**
     * 批量删除方块
     * 1.创建模拟玩家
     * 2.将模拟玩家作为中心点 删除的单个区域为该模拟玩家中心点生成的30000块区域
     * 3.再根据算法进行批量删除
     */

    /**
     * 批量删除方块(无限制)
     * @param pos1 对角坐标1
     * @param pos2 对角坐标2
     */
    static async delete(pos1: IntPos, pos2: IntPos): Promise<Result> {
        let sum = 0
        let player = mc.spawnSimulatedPlayer("LB_TEST_PLAYER", 0, 0, 0, 0)

        if (player == null) return Result.error(ErrorConstant.CREATE_PLAYER_FAILED)
        player.setPermLevel(1)
        player.setGameMode(1)
        const a = 30
        //获取左下右上顶点坐标
        const { leftDownPos, rightUpPos } = Unit.getLeftDownAndRightUpPos(pos1, pos2)
        //起始坐标
        let startPos = new IntPos(leftDownPos.x, leftDownPos.y, leftDownPos.z, leftDownPos.dimid)

        let targetPos = new IntPos(startPos.x, startPos.y, startPos.z, startPos.dimid)
        //z轴
        while (startPos.z < rightUpPos.z) {

            if (startPos.z + a > rightUpPos.z) {
                targetPos.z = rightUpPos.z
            }
            else { targetPos.z += a }
            //y轴
            while (startPos.y < rightUpPos.y) {
                if (startPos.y + a > rightUpPos.y) {
                    targetPos.y = rightUpPos.y
                }
                else { targetPos.y += a }
                //x轴
                while (startPos.x < rightUpPos.x) {
                    if (startPos.x + a > rightUpPos.x) {
                        targetPos.x = rightUpPos.x
                    }
                    else { targetPos.x += a }
                    //开始删除
                    await Unit.deleteOneBlock(startPos, targetPos, player)
                    sum++
                    //更新x
                    startPos.x = targetPos.x
                }
                //x轴结束(重置x)
                startPos.x = leftDownPos.x
                targetPos.x = leftDownPos.x
                //更新y
                startPos.y = targetPos.y
            }
            //y轴结束(重置y)
            startPos.y = leftDownPos.y
            targetPos.y = leftDownPos.y
            //更新z
            startPos.z = targetPos.z
        }
        log(`删除了${sum}个方块`)
        player.simulateDisconnect()
        //返回结果
        return Result.success()
    }

    /**
     * 批量删除方块(一个区块)
     * @param pos1 对角坐标1
     * @param pos2 对角坐标2
     */
    static async deleteOneBlock(pos1: IntPos, pos2: IntPos, player: Player): Promise<Result> {
        const blockSum = (pos1.x - pos2.x) * (pos1.y - pos2.y) * (pos1.z - pos2.z)
        //超出区块限制
        if (blockSum > 32768) return Result.error(ErrorConstant.BLOCK_SUM_TOO_LARGE)
        //维度不同
        if (pos1.dimid != pos2.dimid) return Result.error(ErrorConstant.POS_DIMID_NOT_SAME)
        const centerPos = new IntPos((pos1.x + pos2.x) / 2, 256, (pos1.z + pos2.z) / 2, pos1.dimid)
        return new Promise(resolve => {
            player.teleport(centerPos)
            const blockPos = player.blockPos
            const uid = setInterval(() => {
                if (player.blockPos.y != blockPos.y) {
                    player.runcmd(`fill ${pos1.x} ${pos1.y} ${pos1.z} ${pos2.x} ${pos2.y} ${pos2.z} air`)
                    if (uid != null) clearInterval(uid)
                    resolve(Result.success())
                }
            }, 50)
        })
    }

    /**
     * 获取左下顶点和右上顶点
     * @param pos1 对角坐标1
     * @param pos2 对角坐标2
     * @returns 
     */
    static getLeftDownAndRightUpPos(pos1: IntPos, pos2: IntPos): { leftDownPos: IntPos, rightUpPos: IntPos } {
        const leftDownPos = new IntPos(Math.min(pos1.x, pos2.x), Math.min(pos1.y, pos2.y), Math.min(pos1.z, pos2.z), pos1.dimid)
        const rightUpPos = new IntPos(Math.max(pos1.x, pos2.x), Math.max(pos1.y, pos2.y), Math.max(pos1.z, pos2.z), pos1.dimid)
        return { leftDownPos, rightUpPos }
    }

    static export() {
        ll.exports(Unit.delete, "LB_UNIT", "delete")
    }
}