import { MessageConstant } from "../../Constant/MessageConstant"
import { IdCreateUtils } from "../../Utils/IdCreaeteUtils"
import { Result } from "./Result"

export class Team {
    /** 队伍ID */
    id: number
    /** 队伍名称 */
    name: string
    /** 队长XUID */
    masterXuid: string
    /**队员列表 */
    member: Array<string>   //存xuid

    constructor(name: string, masterXuid: string) {
        this.id = IdCreateUtils.TeamId()
        this.name = name
        this.masterXuid = masterXuid
        this.member = []
    }

    /** 队伍列表文件 */
    static teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json")

    /**
     * 创建队伍
     * @param playerXuid 创建队伍的玩家
     * @param teamName 队伍名称
     * @returns Result对象
     */
    static createTeam(playerXuid: string, teamName: string):Result {
        if (this.haveTeam(playerXuid).data) {
            //拥有队伍
            return Result.error(`${MessageConstant.PREFIX}你已经拥有队伍了`)
        }
        const team = new Team(teamName, playerXuid)
        const teamList = this.teamListFile.get(`teamList`)
        teamList.push(team)
        this.teamListFile.set("teamList", teamList)
        return Result.success()
    }

    /**
     * 删除队伍
     * @param teamId 队伍ID
     * @returns Result对象
     */
    static removeTeam(teamId:number):Result{
        let teamList = this.teamListFile.get(`teamList`)
        const teamLen = teamList.length;
        teamList = teamList.filter((team:Team)=>{
            if(team.id == teamId) return false
            return true
        })
        if(teamList.length == teamLen) return Result.error(`${MessageConstant.PREFIX}该队伍不存在`)
        this.teamListFile.set("teamLisst",teamList)
        return Result.success()
    }

    /**
     * 添加队伍成员
     * @param teamId 队伍ID
     * @param memberXuid 成员xuid
     * @returns Result对象
     */
    static addTeamMember(teamId:number,memberXuid:string):Result{
        if(this.haveTeam(memberXuid).data){
            //拥有队伍
            return Result.error(`${MessageConstant.PREFIX}你已经拥有队伍了`)
        }
        let teamList = this.teamListFile.get("teamList")
        teamList = teamList.map((team:Team)=>{
            if(team.id == teamId){
                team.member.push(memberXuid)
            }
        })
        this.teamListFile.set("teamList",teamList)
        return Result.success()
    }

    /**
     * 删除成员
     * @param teamId 队伍ID
     * @param memberXuid 成员XUID
     * @returns Result对象
     */
    static removeTeamMember(teamId:number,memberXuid:string):Result{
        //判断是否在队伍内
        const memberTeamId = this.getTeamIdByPlayerXuid(memberXuid).data.teamId
        if(memberTeamId == -1 || memberTeamId != teamId) return Result.error(`${MessageConstant.PREFIX}该玩家不在这个队伍中`)
        //删除操作
        let teamList = this.teamListFile.get("teamList")
        teamList = teamList.map((team:Team)=>{
            if(team.id == teamId){
                //执行删除操作
                team.member = team.member.filter(mXuid => mXuid !== memberXuid)
            }
            return team
        })
        this.teamListFile.set("teamList",teamList)
        return Result.success()
    }

    /**
     * 
     * @param teamId 
     * @param transferPlayerXuid 
     * @returns 
     */
    static transferTeam(teamId:number,transferPlayerXuid:string):Result{
        return Result.success()
    }

    /**
     * 根据玩家xuid获取teamid
     * @param xuid 玩家xuid
     * @returns 对象信息:
     *          - identity 身份信息 ["master","member","不存在为null"] 
     *          - teamId 队伍Id ["队伍ID","不存在为-1"]
     */
    static getTeamIdByPlayerXuid(xuid:string):Result{
        const teamList:Array<Team> = this.teamListFile.get("teamList")
        for(const team of teamList){
            //队长
            if(team.masterXuid == xuid) return Result.success({identity:"master",teamId:team.id})
            //成员
            for(const memberXuid of team.member){
                if(memberXuid == xuid) return Result.success({identity:"member",teamId:team.id})
            }
        }
        return Result.error(`${MessageConstant.PREFIX}该玩家没有队伍`)
    }

    /**
     * 查询是否拥有队伍
     * @param xuid 玩家xuid
     * @returns 是否拥有队伍(true-是,false-否)
     */
    static haveTeam(xuid: string):Result{
        const teamList = this.teamListFile.get(`teamList`)
        for (const team of teamList) {
            //队长判断
            if (team.masterXuid == xuid) {
                return Result.success()
            }
            //队员判断
            for(const memberXuid of team.member){
                if(memberXuid == xuid) Result.success()
            }
        }
        return Result.error(`${MessageConstant.PREFIX}该玩家不存在队伍`)
    }

    /**
     * API导出
     */
    static export(){
        let result:boolean
        //函数导出
        ll.exports(Team.createTeam, "LB_TEAM", "createTeam")?1:logger.warn(`createTeam函数导出失败`)
        ll.exports(Team.addTeamMember, "LB_TEAM", "addTeamMember")?1:logger.warn(`addTeamMember函数导出失败`)
        ll.exports(Team.haveTeam, "LB_TEAM", "haveTeam")?1:logger.warn(`havaTeam函数导出失败`)
        ll.exports(Team.getTeamIdByPlayerXuid, "LB_TEAM", "getTeamIdByPlayerXuid")?1:logger.warn(`getTeamIdByPlayerXuid函数导出失败`)
    }

}

