import { MessageConstant } from "../../Constant/MessageConstant"
import { IdCreateUtils } from "../../Utils/IdCreaeteUtils"

export class Team {
    /** 队伍ID */
    id: number
    /** 队伍名称 */
    name: string
    /** 队长XUID */
    masterXuid: string

    constructor(name: string, masterXuid: string) {
        this.id = IdCreateUtils.TeamId()
        this.name = name
        this.masterXuid = masterXuid
    }

    /** 队伍列表文件 */
    static teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json")

    /**
     * 创建队伍
     * @param player 创建队伍的玩家
     * @param teamName 队伍名称
     */
    static createTeam(player: Player, teamName: string) {
        if (this.haveTeam(player.xuid)) {
            //拥有队伍
            player.tell(`${MessageConstant.PREFIX}你已经拥有队伍了`)
            return
        }
        const team = new Team(teamName, player.xuid)
        const teamList = this.teamListFile.get(`teamList`)
        teamList.push(team)
        this.teamListFile.set("teamList", teamList)
        player.tell(`${MessageConstant.PREFIX}队伍创建成功!`)
    }

    /**
     * 查询是否拥有队伍
     * @param xuid 玩家xuid
     * @returns 是否拥有队伍(true-是,false-否)
     */
    static haveTeam(xuid: string) {
        const teamList = this.teamListFile.get(`teamList`)
        for (const team of teamList) {
            //队长判断
            if (team.masterXuid == xuid) {
                return true
            }
            //TODO:队员判断
        }
        return false
    }

    /**
     * API导出
     */
    static export(){
        let result:boolean
        //函数导出
        ll.exports(Team.createTeam, "LB_TEAM", "createTeam")?log("createTeam函数导出成功"):logger.warn(`createTeam函数导出失败`)
        ll.exports(Team.haveTeam, "LB_TEAM", "haveTeam")?log("haveTeam函数导出成功"):logger.warn(`havaTeam函数导出失败`)
    }

}

