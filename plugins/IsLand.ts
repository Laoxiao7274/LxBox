// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 

import { ErrorConstant } from "../modules/Constant/ErrorConstant";
import { MessageConstant } from "../modules/Constant/MessageConstant";
import { Result } from "../modules/pojo/entity/Result";
import { Team } from "../modules/pojo/entity/Team";
import { Structure } from "../modules/service/Structure";
import { Unit } from "../modules/service/Unit";

/**
 * 空岛子插件
 */

/**
 * 计划
 * 1.实现岛屿添加机制
 */

/**
 * 岛屿添加机制
 * 将每一个功能拆分出来在进行统一整理
 * 1.创建岛屿
 * 2.删除岛屿
 * 3.转让岛屿(权限写完后)
 * 4.OP表单(可以选择删除岛屿区块)
 * 
 * 接下来整合
 */

const Conf = new JsonConfigFile("./plugins/LxBox/config.json")
const dataFile = new JsonConfigFile("./plugins/LxBox/data/landData.json")
const perFile = new JsonConfigFile("./plugins/LxBox/data/permission.json")

export class IsLand {


    /**
     * 实体属性
     */

    //岛屿id(对应teamId)
    id: number
    //岛屿名称
    name: string
    //岛屿中心坐标
    pos: any
    //默认传送点
    defaultPos: any
    //岛屿半径
    range: number 
    //普通权限
    permission: Permission

    constructor(id: number, name: string, pos: any, defaultPos: any) {
        this.id = id
        this.name = name
        this.pos = pos
        this.defaultPos = defaultPos
        this.range = Conf.get("island")["Init_Land_Range"]
        this.permission  = new Permission()
    }

    static main() {

        //配置文件初始化
        IsLand.initConf()
        //命令注册
        IsLand.regCmd()
        //函数导出
        IsLand.export()
        log(MessageConstant.PREFIX + "空岛插件加载成功!")
    }

    /**
     * 配置文件初始化
     */
    static initConf() {
        const dataFile1 = new JsonConfigFile("./plugins/LxBox/data/landData.json")
        Conf.init("island", {
            //岛屿间距
            "Land_Range": 1000,
            //岛屿大小
            "Init_Land_Range": 200,
            //岛屿高度
            "Land_Height": 64
        })

        dataFile.init("lands", []) 
        perFile.init("permissions", [])
    }

    /**
     * 命令注册
     */
    static regCmd() {
        const cmd = mc.newCommand("island", "空岛插件", PermType.Any)
        cmd.setAlias("is")
        cmd.setEnum("create", ["create"])
        cmd.setEnum("delete", ["delete"])
        cmd.setEnum("invite", ["invite"])
        cmd.mandatory("action", ParamType.Enum, "create")
        cmd.mandatory("action", ParamType.Enum, "delete")
        cmd.mandatory("action", ParamType.Enum, "invite")
        cmd.mandatory("player", ParamType.Player)
        cmd.overload(["create"])
        cmd.overload(["delete"])
        cmd.overload(["invite"])
        cmd.overload([])
        cmd.setCallback((_cmd, ori, out, res) => {
            if (ori.player == undefined) return logger.warn(`${MessageConstant.PREFIX}非玩家执行is命令`)
            const player = ori.player
            switch (res.action) {
                case "create":
                    IsLand.CreateLandForm(player)
                    break
                case "delete":
                    IsLand.deleteForm(player)
                    break
                case "invite":
                    IsLand.inviteForm(player)
                    break
                default:
                    IsLand.LandForm(player)
                    break
            }
        })
        cmd.setup()
    }

    /**
     * 岛屿界面
     * @param player 玩家对象
     */
    static LandForm(player: Player) {
        //检测玩家是否存在岛屿
        if (Team.haveTeam(player.xuid).result) {
            player.tell("你已经拥有岛屿了")
        }
        else {
            IsLand.CreateLandForm(player)
        }
    }

    /**
     * 岛屿创建表单
     * @param player 玩家对象
     */
    static CreateLandForm(player: Player) {
        if (Team.haveTeam(player.xuid).result) return player.tell(`${MessageConstant.PREFIX}你已经拥有岛屿了`)
        const structures = Structure.getEnableStructure()
        if (structures.length == 0) return player.tell(`${MessageConstant.PREFIX}没有可用的模板`)
        const form = mc.newCustomForm()
        form.setTitle("创建岛屿")
        form.addDropdown("请选择模板", structures, 0)
        form.addInput("岛屿名称", "请输入岛屿名称", `${player.name}的岛屿`)
        player.sendForm(form, (player, data) => {
            if (data == undefined) return
            IsLand.create(Structure.getStructureNameByName(structures[data[0]]),/*TODO: 之后进行多维度空岛 */0, player, data[1])
        })
    }

    /**
     * 创建岛屿
     * @param moduleName 模板名称
     * @param dimid 维度id
     * @param player 玩家对象
     * @param LandName 岛屿名称
     */
    static create(moduleName: string, dimid: number, player: Player, LandName: string): Result<IsLand> {
        //检测模板是否存在
        if (!Structure.isHaveModule(moduleName)) return Result.error(ErrorConstant.STRUCTURE_TEMPLATE_NOT_EXIST)
        //检测玩家是否存在岛屿
        if (Team.haveTeam(player.xuid).result) return Result.error(ErrorConstant.HAVE_TEAM)

        const LandConf = Conf.get("island")
        let x = 0, z = 0;
        const step = LandConf["Land_Range"]
        let direction = "right";
        let i = 0
        while (i != 5) {
            i++;
            //根据方向添加step
            if (direction == "right") {
                x += step;
            }
            else if (direction == "left") {
                x -= step;
            }
            else if (direction == "up") {
                z += step;
            }
            else if (direction == "down") {
                z -= step;
            }
            //判断目前位置是否存在岛屿
            const height = LandConf["Land_Height"]
            const landPos = new IntPos(x, height, z, dimid)
            if (IsLand.checkLandByPos(landPos) == undefined) {
                //创建岛屿
                // //删除该部分区块
                // const leftDownPos = new IntPos(landPos.x - step,-64,landPos.z - step,dimid)
                // const reightUpPos = new IntPos(landPos.x + step,256,landPos.z + step,dimid)
                // await Unit.delete(leftDownPos,reightUpPos)
                const spawnResult = Structure.spawnModule(moduleName, landPos)
                if (!spawnResult.result) return spawnResult.data
                //数据构建
                //创建岛屿同时创建队伍
                const teamResult = Team.createTeam(player.xuid, LandName)
                if (!teamResult.result) return teamResult.data
                const team: Team = teamResult.data
                //岛屿数据构建
                const posData = {
                    x: landPos.x,
                    y: landPos.y,
                    z: landPos.z,
                    dimid: landPos.dimid
                }
                const NewLandData = new IsLand(team.id, LandName, posData, posData)
                const lands = dataFile.get("lands")
                lands.push(NewLandData)
                dataFile.set("lands", lands)
                player.teleport(landPos)
                player.setTitle(MessageConstant.PREFIX + "岛屿创建成功!")
                return Result.success(NewLandData)
            }


            //根据位置与坐标改变方向
            if (direction == "right") {
                if (x > z) {
                    direction = "down";
                }
                else if (x <= z) {
                    direction = "right";
                }
            }
            else if (direction == "down") {
                if (x == -z) {
                    direction = "left";
                }
                else if (x > z) {
                    direction = "down";
                }
            }
            else if (direction == "left") {
                if (x == z) {
                    direction = "up";
                }
                else if (x < -z) {
                    direction = "left";
                }
            }
            else if (direction == "up") {
                if (-x == z) {
                    direction = "right";
                }
                else if (x < z) {
                    direction = "up";
                }
            }
        }
        return Result.error(ErrorConstant.UNKNOWN_ERROR)
    }

    /**
     * 岛屿删除表单
     * @param player 玩家对象
     */
    static deleteForm(player: Player) {
        //检测是否拥有岛屿
        if (!Team.haveTeam(player.xuid).result) return player.tell(`${MessageConstant.PREFIX}你没有岛屿可以删除`)
        //获取岛屿和队伍信息
        const teamId = Team.getTeamIdByPlayerXuid(player.xuid).data.teamId
        if (teamId == -1) return logger.error(ErrorConstant.UNKNOWN_TEAM)
        const team: Team = Team.getTeamById(teamId).data
        player.sendModalForm("删除岛屿", `是否删除岛屿${team.name}\n将会清除岛屿的全部数据\n删除后无法恢复!`, "确认", "取消", (player: Player, res: boolean | null) => {
            if (!res) return
            //开始删除岛屿

            //队伍删除
            Team.removeTeam(teamId)
            //岛屿删除
            IsLand.deleteLand(teamId)
            player.tell(`${MessageConstant.PREFIX}岛屿删除成功!`)

        })
    }

    /**
     * 删除岛屿数据
     * @param id 岛屿id(队伍id)
     */
    static deleteLand(id: number) {
        let lands = dataFile.get("lands").map((land: IsLand) => {
            if (land.id == id) {
                land.id = -1
            }
            return land
        })
        dataFile.set("lands", lands)
    }

    /**
     * 清空岛屿数据
     * @param player 玩家对象
     */
    static async clearForm(player: Player) {
        if (!player.isOP) return player.tell(`${MessageConstant.PREFIX}你没有权限执行此命令`)
        //获取玩家脚下岛屿
        const land = IsLand.getLandByUnderPos(player)
        if (land == null) return player.tell(`${MessageConstant.PREFIX}该位置不存在岛屿`)
        if (land.id != -1) return player.tell(`${MessageConstant.PREFIX}该岛屿无法删除`)
        player.sendModalForm("清空岛屿数据", "是否确认删除该无人岛屿所有数据(区块以及数据)", "确认", "取消", async (player, res) => {
            if (!res) return
            log(`${MessageConstant.PREFIX}开始清空岛屿数据\n岛屿中心坐标: ${land.pos.x},${land.pos.z},${land.pos.dimid}\n岛屿范围: ${land.range}`)
            const leftDownPos = new IntPos(land.pos.x - land.range, -64, land.pos.z - land.range, land.pos.dimid)
            const reightUpPos = new IntPos(land.pos.x + land.range, 256, land.pos.z + land.range, land.pos.dimid)
            await Unit.delete(leftDownPos, reightUpPos)
            let lands = dataFile.get("lands").filter((ele: IsLand) => {
                if (land.pos.x == ele.pos.x && land.pos.z == ele.pos.z && land.pos.dimid == ele.pos.dimid) return false
                return true
            })
            dataFile.set("lands", lands)
            log(`${MessageConstant.PREFIX}岛屿数据清除成功`)
        })
    }

    /**
     * 成员邀请表单
     * @param player 玩家对象
     */
    static inviteForm(player: Player) {
        //判断玩家是否存在岛屿
        if (!Team.haveTeam(player.xuid).result) return player.tell(`${MessageConstant.PREFIX}你没有岛屿可以邀请`)
        //判断是否存在可邀请对象
        const onlinePlayers = mc.getOnlinePlayers()
        const availablePlayers = onlinePlayers.filter((onlinePlayer: Player) => {
            return !Team.haveTeam(onlinePlayer.xuid).result && onlinePlayer.xuid != player.xuid
        })
        if (availablePlayers.length == 0) return player.tell(`${MessageConstant.PREFIX}没有可邀请的对象`)
        const avaliableNames = availablePlayers.map((onlinePlayer: Player) => {
            return onlinePlayer.name
        })
        //表单创建
        const form = mc.newCustomForm()
        form.setTitle("成员邀请")
        form.addDropdown("请选择邀请对象", avaliableNames, 0)
        player.sendForm(form, (player, data) => {
            if (data == null) return
            if (data[0] == null) return
            //给玩家发送邀请
            const invitePlayer = mc.getPlayer(avaliableNames[data[0]])
            if (invitePlayer == null) return player.tell(`${MessageConstant.PREFIX}该玩家不在线或不存在`)
            invitePlayer.sendModalForm("岛屿邀请", `你是否同意加入${player.name}的岛屿中`, "同意", "拒绝", (invitePlayer, res) => {
                if (!res) return player.tell(`${MessageConstant.PREFIX}玩家拒绝加入岛屿`)
                else {
                    //判断是否拥有岛屿
                    if (Team.haveTeam(invitePlayer.xuid).result) return player.tell(`${MessageConstant.PREFIX}该玩家已拥有岛屿`)
                    //加入岛屿操作
                    //获取玩家队伍id
                    const teamId = Team.getTeamIdByPlayerXuid(player.xuid).data.teamId
                    const result = Team.addTeamMember(teamId, invitePlayer.xuid)
                    if(!result.result) return logger.error(result.msg),player.tell(`${MessageConstant.PREFIX}${result.msg}`)
                    player.tell(`${MessageConstant.PREFIX}成功邀请玩家${invitePlayer.name}加入岛屿`)
                    invitePlayer.tell(`${MessageConstant.PREFIX}你被邀请加入岛屿${Team.getTeamById(teamId).data.name}`)
                }
            })
        })
    }

    /**
     * 查找该坐标是否存在岛屿
     * @param pos 岛屿中心坐标(只用管x,z,dimid)
     * @returns 
     */
    static checkLandByPos(pos: IntPos): IsLand | undefined {
        return dataFile.get("lands").find((land: IsLand) => {
            return (pos.x == land.pos.x && pos.z == land.pos.z && pos.dimid == land.pos.dimid)
        })
    }

    /**
     * 根据id获取岛屿
     * @param id 岛屿id(队伍id)
     */
    static getById(id: number): Result<IsLand> {
        const lands = dataFile.get("lands")
        for (const land of lands) {
            if (land.id == id) return Result.success(land)
        }
        return Result.error(ErrorConstant.UNKNOWN_LAND)
    }

    /**
     * 获取脚下岛屿
     * @param player 玩家对象
     * @returns IsLand|null
     */
    static getLandByUnderPos(player: Player): IsLand | null {
        const lands: Array<IsLand> = dataFile.get("lands")
        for (const land of lands) {
            //判断范围
            const pos = player.blockPos
            //只用判断x,z,dimid
            if (pos.x <= land.pos.x + land.range && pos.x >= land.pos.x - land.range && pos.z <= land.pos.z + land.range && pos.z >= land.pos.z - land.range && pos.dimid == land.pos.dimid)
                return land
        }
        return null
    }

    /**
     * 函数导出
     */
    static export() {
        ll.exports(IsLand.create, "LB_ISLAND", "create")
    }
}

export class Permission {

    PLACE : boolean = false
    BREAK : boolean = false
    DROP : boolean = false
    TAKE : boolean = false
    INTERACTION : boolean = false
    FRAMBLOCK : boolean = false
    ATTACK : boolean = false


    static PermissionCheck(){

    }

    // static PlaceCheck(player:Player,block:Block):boolean{

    // }

    static export(){
        
    }

}