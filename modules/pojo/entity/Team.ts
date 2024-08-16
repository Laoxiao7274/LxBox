import { ErrorConstant } from "../../Constant/ErrorConstant"
import { MessageConstant } from "../../Constant/MessageConstant"
import { TagConstant } from "../../Constant/TagConstent"
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
    /** 主配置文件 */
    static Conf = new JsonConfigFile("./plugins/LxBox/config.json")
    /** 对内聊天前缀 */
    static CHAT_PREFIX = this.Conf.get("teamChatPrefix")

    /**
     * 创建队伍
     * @param playerXuid 创建队伍的玩家
     * @param teamName 队伍名称
     * @returns Result对象
     */
    static createTeam(playerXuid: string, teamName: string):Result {
        if (this.haveTeam(playerXuid).result) {
            //拥有队伍
            return Result.error(MessageConstant.PREFIX+ErrorConstant.HAVE_TEAM)
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
        if(teamList.length == teamLen) return Result.error(MessageConstant.PREFIX+ErrorConstant.TEAM_DONT_EXIST)
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
        if(this.haveTeam(memberXuid).result){
            //拥有队伍
            return Result.error(MessageConstant.PREFIX+ErrorConstant.HAVE_TEAM)
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
        if(memberTeamId == -1 || memberTeamId != teamId) return Result.error(MessageConstant.PREFIX+ErrorConstant.NOT_IN_THIS_TEAM)
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
     * 转让队伍
     * @param teamId 
     * @param transferPlayerXuid 
     * @returns Result对象
     */
    static transferTeam(teamId:number,transferPlayerXuid:string):Result{
        //获取被转让玩家队伍部分信息
        const teamInfo = this.getTeamIdByPlayerXuid(transferPlayerXuid).data
        //获取队伍信息
        const team:Team = this.getTeamById(teamInfo.teamId).data
        //转让给没有队伍的玩家
        if(teamInfo.teamId == -1){
            team.masterXuid = transferPlayerXuid
            //更新team信息
            this.updateTeam(team)
            return Result.success() 
        }

        //禁止转让自己
        if(teamInfo.teamId == teamId && transferPlayerXuid == team.masterXuid) return Result.error(MessageConstant.PREFIX+ErrorConstant.CANT_TRANSFER_SELF)
        //禁止转让其他队伍
        if(teamInfo.teamId != -1 && teamInfo.teamId != teamId) return Result.error(MessageConstant.PREFIX+ErrorConstant.IS_OTHER_CAPTAIN)

       //转让给队员
        team.masterXuid = transferPlayerXuid
        team.member = team.member.filter(memberXuid => memberXuid !== transferPlayerXuid)
        this.updateTeam(team)

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
        return Result.success({identity:"",teamId:-1})
    }

    /**
     * 根据队伍ID获取队伍信息
     * @param teamId 队伍ID
     * @returns Result<Team>对象
     */
    static getTeamById(teamId:number):Result<Team>{
        const teamList = this.getAllTeam()
        for(const team of teamList){
            if(team.id == teamId) return Result.success(team)
        }
        return Result.error(MessageConstant.PREFIX+ErrorConstant.TEAM_DONT_EXIST)
    }

    /**
     * 获取全部队伍信息
     * @returns Team数组
     */
    static getAllTeam():Array<Team>{
        return this.teamListFile.get("teamList")
    }

    /**
     * 更新Team数据
     * @param team Team对象
     * @returns Result对象
     */
    static updateTeam(team:Team):Result{
        let teamList = this.getAllTeam()
        teamList = teamList.map((t:Team)=>{
            if(t.id == team.id) return team
            return t
        })
        this.teamListFile.set("teamList",teamList)
        return Result.success()
    }

    /**
     * 查询玩家是否拥有队伍
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
        return Result.error(MessageConstant.PREFIX+ErrorConstant.DONT_HAVE_TEAM)
    }

    /**
     * 聊天监听
     */
    static chatListen(){
        mc.listen("onChat",(player:Player,msg:string)=>{
            //获取玩家队伍ID
            const teamId = this.getTeamIdByPlayerXuid(player.xuid).data.teamId
            if(player.hasTag(TagConstant.TeamChatTag) && teamId != -1){
                //发送的消息 this.CHAT_PREFIX+player.name+": "+msg
                //转发在线队伍成员
                for(const otherPlayer of mc.getOnlinePlayers()){
                    //判断队伍成员
                    const otherPlayerTeamId = this.getTeamIdByPlayerXuid(otherPlayer.xuid).data.teamId
                    if(teamId == otherPlayerTeamId) otherPlayer.tell(this.CHAT_PREFIX+player.name+": "+msg)
                }
                return false;
            }
        })
    }

    /**
     * 开启队内聊天
     * @param player 玩家对象
     */
    static openTeamChat(player:Player){
        player.addTag(TagConstant.TeamChatTag)
    }

    /**
     * 关闭对内聊天
     * @param player 玩家对象
     */
    static closeTeamChat(player:Player){
        player.removeTag(TagConstant.TeamChatTag)
    }

    /**
     * API导出
     */
    static export(){
        let result:boolean
        //函数导出
        ll.exports(Team.createTeam, "LB_TEAM", "createTeam")?1:logger.warn(`createTeam函数导出失败`)
        ll.exports(Team.removeTeam,"LB_TEAM","removeTeam")?1:logger.warn(`removeTeam函数导出失败`)
        ll.exports(Team.addTeamMember, "LB_TEAM", "addTeamMember")?1:logger.warn(`addTeamMember函数导出失败`)
        ll.exports(Team.removeTeamMember,"LB_TEAM","removeTeamMember")?1:logger.warn(`removeTeamMember函数导出失败`)
        ll.exports(Team.getAllTeam, "LB_TEAM","getAllTeam")?1:logger.warn(`getAllTeam函数导出失败`)
        ll.exports(Team.getTeamById, "LB_TEAM","getTeamById")?1:logger.warn(`getTeamById函数导出失败`)
        ll.exports(Team.transferTeam, "LB_TEAM","transferTeam")?1:logger.warn(`transferTeam函数导出失败`)
        ll.exports(Team.updateTeam,"LB_TEAM","updateTeam")?1:logger.warn(`updateTeam函数导出失败`)
        ll.exports(Team.haveTeam, "LB_TEAM", "haveTeam")?1:logger.warn(`havaTeam函数导出失败`)
        ll.exports(Team.getTeamIdByPlayerXuid, "LB_TEAM", "getTeamIdByPlayerXuid")?1:logger.warn(`getTeamIdByPlayerXuid函数导出失败`)
        ll.exports(Team.openTeamChat, "LB_TEAM", "openTeamChat")?1:logger.warn(`openTeamChat函数导出失败`)
        ll.exports(Team.closeTeamChat, "LB_TEAM", "closeTeamChat")?1:logger.warn(`closeTeamChat函数导出失败`)
    }

}

