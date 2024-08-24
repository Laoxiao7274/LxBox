// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 

import { ErrorConstant } from "../Constant/ErrorConstant"
import { Result } from "../pojo/entity/Result"

/**
 * 创世神api
 */

export class Unit {

    static promiseArr:Promise<any>[] = []

    static promiseStatus : boolean = false

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
        const a = 30
        //获取左下右上顶点坐标
        const { leftDownPos, rightUpPos } = Unit.getLeftDownAndRightUpPos(pos1, pos2)
        log(leftDownPos+"|"+rightUpPos)
        //起始坐标
        let startPos = new IntPos(leftDownPos.x, leftDownPos.y, leftDownPos.z, leftDownPos.dimid)

        let targetPos = new IntPos(startPos.x, startPos.y, startPos.z, startPos.dimid)
        //z轴
        while (startPos.z < rightUpPos.z) {
            log(`开始删除第${sum}个区块`)

            if (startPos.z + a > rightUpPos.z) {
                targetPos.z = rightUpPos.z
            }
            else { targetPos.z += a }
            //x轴
            while (startPos.x < rightUpPos.x) {
                if (startPos.x + a > rightUpPos.x) {
                    targetPos.x = rightUpPos.x
                }
                else { targetPos.x += a }
                //y轴
                while (startPos.y < rightUpPos.y) {
                    if (startPos.y + a > rightUpPos.y) {
                        targetPos.y = rightUpPos.y
                    }
                    else { targetPos.y += a }
                    if(startPos.x == leftDownPos.x && startPos.y == leftDownPos.y && startPos.z == rightUpPos.z){
                        log(`删除123了${sum}个区块`)
                        Unit.promiseArr = []
                        Unit.promiseStatus = false
                        //返回结果
                        return Result.success()
                    }
                    mc.runcmdEx(`tickingarea add ${startPos.x} ${startPos.y} ${startPos.z} ${targetPos.x} ${targetPos.y} ${targetPos.z}`)
                    //开始删除
                    await Unit.deleteOneBlock(startPos, targetPos)
                    log(`成功删除了${startPos}`)
                    mc.runcmdEx(`tickingarea remove_all`)
                    sum++
                    //更新y
                    startPos.y = targetPos.y
                }
                //y轴结束(重置x)
                startPos.y = leftDownPos.y
                targetPos.y = leftDownPos.y
                //更新x
                startPos.x = targetPos.x
            }
            //x轴结束(重置x)
            startPos.x = leftDownPos.x
            targetPos.x = leftDownPos.x
            //更新z
            startPos.z = targetPos.z
        }
        log(`删除了${sum}个区块`)
        //返回结果
        return Result.success()
    }

    /**
     * 批量删除方块(一个区块)
     * @param pos1 对角坐标1
     * @param pos2 对角坐标2
     */
    static async deleteOneBlock(pos1: IntPos, pos2: IntPos): Promise<Result> {
        const blockSum = (pos1.x - pos2.x) * (pos1.y - pos2.y) * (pos1.z - pos2.z)
        //超出区块限制
        if (blockSum > 32768) return Result.error(ErrorConstant.BLOCK_SUM_TOO_LARGE)
        //维度不同
        if (pos1.dimid != pos2.dimid) return Result.error(ErrorConstant.POS_DIMID_NOT_SAME)
        
        return new Promise(resolve => {
            let sum = 0
            const uid = setInterval(()=>{
                sum++
                if(sum >= 1){
                    Unit.promiseArr.push(new Promise(resolve => {
                        mc.spawnSimulatedPlayer("LB_TEST_PLAYER",new IntPos(pos1.x,0,pos1.z,pos1.dimid))
                        const ud = setInterval(()=>{
                            const result = mc.runcmdEx(`fill ${pos1.x} ${pos1.y} ${pos1.z} ${pos2.x} ${pos2.y} ${pos2.z} air`)
                            log(`正在删除p1:${pos1},p2:${pos2}`)
                            log("rere"+(pos1.x == pos2.x && pos1.y == pos2.y && pos1.z == pos2.z))
                            if(pos1.x == pos2.x && pos1.y == pos2.y && pos1.z == pos2.z){
                                log(ud)
                                if(ud != null) clearInterval(ud)
                            } 
                            log(result.output+`\n${result.success}`)
                            if(result.success || result.output.includes("0 blocks filled")) {
                                if(ud != null) clearInterval(ud)
                                //假人删除
                                mc.getPlayer("LB_TEST_PLAYER") == null?1:mc.getPlayer("LB_TEST_PLAYER").simulateDisconnect()
                                resolve(Result.success())
                            }
                        },0.5)
                    }))
                    if(!Unit.promiseStatus && Unit.promiseArr.length == 0) Unit.excutePromise()
                    resolve(Result.success())
                }
                const result = mc.runcmdEx(`fill ${pos1.x} ${pos1.y} ${pos1.z} ${pos2.x} ${pos2.y} ${pos2.z} air`)
                log(`正在删除${pos1}`)
                log(pos1.x == pos2.x && pos1.y == pos2.y && pos1.z == pos2.z)
                log(result.output+`\n${result.success}`)
                if(result.success || result.output.includes("0 blocks filled")) {
                    if(uid != null) clearInterval(uid)
                    //假人删除
                    mc.getPlayer("LB_TEST_PLAYER") == null?1:mc.getPlayer("LB_TEST_PLAYER").simulateDisconnect()
                    resolve(Result.success())
                }
            },0.5)
            
        
        })
    }

    static async excutePromise(){
        if(Unit.promiseArr.length == 0){
            Unit.promiseStatus = false
            return
        }
        else{
            Unit.promiseStatus = true
            if(Unit.promiseArr.length >= 100){
                const newArr = []
                for(let i = 0;i<100;i++){
                    newArr.push(Unit.promiseArr.shift())
                }
                await Promise.all(newArr)
            }else{
                await Promise.all(Unit.promiseArr)
                Unit.promiseArr = []
            }
            Unit.excutePromise()
        }
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