import { MessageConstant } from "../../Constant/MessageConstant"
import { IdCreateUtils } from "../../Utils/IdCreaeteUtils"

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
     * 添加队伍成员
     * @param teamId 队伍ID
     * @param memberXuid 成员xuid
     * @returns 提示信息(成功或失败-用来告知执行者)
     */
    static addTeamMember(teamId:number,memberXuid:string):string{
        if(this.haveTeam(memberXuid)){
            //拥有队伍
            return `${MessageConstant.PREFIX}你已经拥有队伍了`
        }
        let teamList = this.teamListFile.get("teamList")
        teamList = teamList.map((team:Team)=>{
            if(team.id == teamId){
                team.member.push(memberXuid)
            }
        })
        this.teamListFile.set("teamList",teamList)
        return `${MessageConstant.PREFIX}添加成功!`
    }

    /**
     * 根据玩家xuid获取teamid
     * @param xuid 玩家xuid
     * @returns 对象信息:
     *          - identity 身份信息 ["master","member","不存在为null"] 
     *          - teamId 队伍Id ["队伍ID","不存在为-1"]
     */
    static getTeamIdByPlayerXuid(xuid:string){
        const teamList:Array<Team> = this.teamListFile.get("teamList")
        for(const team of teamList){
            //队长
            if(team.masterXuid == xuid) return {identity:"master",teamId:team.id}
            //成员
            for(const memberXuid of team.member){
                if(memberXuid == xuid) return {identity:"member",teamId:team.id}
            }
        }
        return {identity:null,teamId:-1}
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
            //队员判断
            for(const memberXuid of team.member){
                if(memberXuid == xuid) return true
            }
        }
        return false
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

