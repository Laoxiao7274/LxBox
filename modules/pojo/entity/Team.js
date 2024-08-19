"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var ErrorConstant_1 = require("../../Constant/ErrorConstant");
var TagConstent_1 = require("../../Constant/TagConstent");
var IdCreaeteUtils_1 = require("../../Utils/IdCreaeteUtils");
var Result_1 = require("./Result");
/** 队伍列表文件 */
var teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json");
/** 主配置文件 */
var Conf = new JsonConfigFile("./plugins/LxBox/config.json");
/** 对内聊天前缀 */
var CHAT_PREFIX = Conf.get("teamChatPrefix");
var Team = /** @class */ (function () {
    function Team(name, masterXuid) {
        this.id = IdCreaeteUtils_1.IdCreateUtils.TeamId();
        this.name = name;
        this.masterXuid = masterXuid;
        this.member = [];
    }
    // /** 队伍列表文件 */
    // static teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json")
    // /** 主配置文件 */
    // static Conf = new JsonConfigFile("./plugins/LxBox/config.json")
    // /** 对内聊天前缀 */
    // static CHAT_PREFIX = Conf.get("teamChatPrefix")
    /**
     * 创建队伍
     * @param playerXuid 创建队伍的玩家
     * @param teamName 队伍名称
     * @returns Result对象
     */
    Team.createTeam = function (playerXuid, teamName) {
        if (Team.haveTeam(playerXuid).result) {
            //拥有队伍
            return Result_1.Result.error(ErrorConstant_1.ErrorConstant.HAVE_TEAM);
        }
        var team = new Team(teamName, playerXuid);
        var teamList = teamListFile.get("teamList");
        teamList.push(team);
        teamListFile.set("teamList", teamList);
        return Result_1.Result.success();
    };
    /**
     * 删除队伍(注：并未判断是否为队伍主人等权限仅判断是否存在队伍)
     * @param teamId 队伍ID
     * @returns Result对象
     */
    Team.removeTeam = function (teamId) {
        var teamList = teamListFile.get("teamList");
        var teamLen = teamList.length;
        teamList = teamList.filter(function (team) {
            if (team.id == teamId)
                return false;
            return true;
        });
        if (teamList.length == teamLen)
            return Result_1.Result.error(ErrorConstant_1.ErrorConstant.TEAM_DONT_EXIST);
        teamListFile.set("teamList", teamList);
        return Result_1.Result.success();
    };
    /**
     * 添加队伍成员
     * @param teamId 队伍ID
     * @param memberXuid 成员xuid
     * @returns Result对象
     */
    Team.addTeamMember = function (teamId, memberXuid) {
        if (Team.getTeamById(teamId).result) {
            //队伍不存在
            return Result_1.Result.error(ErrorConstant_1.ErrorConstant.TEAM_DONT_EXIST);
        }
        if (Team.haveTeam(memberXuid).result) {
            //拥有队伍
            return Result_1.Result.error(ErrorConstant_1.ErrorConstant.HAVE_TEAM);
        }
        var teamList = teamListFile.get("teamList");
        teamList = teamList.map(function (team) {
            if (team.id == teamId) {
                team.member.push(memberXuid);
            }
            return team;
        });
        teamListFile.set("teamList", teamList);
        return Result_1.Result.success();
    };
    /**
     * 删除成员
     * @param teamId 队伍ID
     * @param memberXuid 成员XUID
     * @returns Result对象
     */
    Team.removeTeamMember = function (teamId, memberXuid) {
        //判断是否在队伍内
        var memberTeamId = Team.getTeamIdByPlayerXuid(memberXuid).data.teamId;
        if (memberTeamId == -1 || memberTeamId != teamId)
            return Result_1.Result.error(ErrorConstant_1.ErrorConstant.NOT_IN_THIS_TEAM);
        //删除操作
        var teamList = teamListFile.get("teamList");
        teamList = teamList.map(function (team) {
            if (team.id == teamId) {
                //执行删除操作
                team.member = team.member.filter(function (mXuid) { return mXuid !== memberXuid; });
            }
            return team;
        });
        teamListFile.set("teamList", teamList);
        return Result_1.Result.success();
    };
    /**
     * 转让队伍
     * @param teamId
     * @param transferPlayerXuid
     * @returns Result对象
     */
    Team.transferTeam = function (teamId, transferPlayerXuid) {
        //获取被转让玩家队伍部分信息
        var teamInfo = Team.getTeamIdByPlayerXuid(transferPlayerXuid).data;
        //获取队伍信息
        var team = Team.getTeamById(teamInfo.teamId).data;
        //转让给没有队伍的玩家
        if (teamInfo.teamId == -1) {
            team.masterXuid = transferPlayerXuid;
            //更新team信息
            Team.updateTeam(team);
            return Result_1.Result.success();
        }
        //禁止转让自己
        if (teamInfo.teamId == teamId && transferPlayerXuid == team.masterXuid)
            return Result_1.Result.error(ErrorConstant_1.ErrorConstant.CANT_TRANSFER_SELF);
        //禁止转让其他队伍
        if (teamInfo.teamId != -1 && teamInfo.teamId != teamId)
            return Result_1.Result.error(ErrorConstant_1.ErrorConstant.IS_OTHER_CAPTAIN);
        //转让给队员
        team.masterXuid = transferPlayerXuid;
        team.member = team.member.filter(function (memberXuid) { return memberXuid !== transferPlayerXuid; });
        Team.updateTeam(team);
        return Result_1.Result.success();
    };
    /**
     * 根据玩家xuid获取teamid
     * @param xuid 玩家xuid
     * @returns 对象信息:
     *          - identity 身份信息 ["master","member","不存在为null"]
     *          - teamId 队伍Id ["队伍ID","不存在为-1"]
     */
    Team.getTeamIdByPlayerXuid = function (xuid) {
        var teamList = teamListFile.get("teamList");
        for (var _i = 0, teamList_1 = teamList; _i < teamList_1.length; _i++) {
            var team = teamList_1[_i];
            //队长
            if (team.masterXuid == xuid)
                return Result_1.Result.success({ identity: "master", teamId: team.id });
            //成员
            for (var _a = 0, _b = team.member; _a < _b.length; _a++) {
                var memberXuid = _b[_a];
                if (memberXuid == xuid)
                    return Result_1.Result.success({ identity: "member", teamId: team.id });
            }
        }
        return Result_1.Result.success({ identity: "", teamId: -1 });
    };
    /**
     * 根据队伍ID获取队伍信息
     * @param teamId 队伍ID
     * @returns Result<Team>对象
     */
    Team.getTeamById = function (teamId) {
        var teamList = Team.getAllTeam();
        for (var _i = 0, teamList_2 = teamList; _i < teamList_2.length; _i++) {
            var team = teamList_2[_i];
            if (team.id == teamId)
                return Result_1.Result.success(team);
        }
        return Result_1.Result.error(ErrorConstant_1.ErrorConstant.TEAM_DONT_EXIST);
    };
    /**
     * 获取全部队伍信息
     * @returns Team数组
     */
    Team.getAllTeam = function () {
        return teamListFile.get("teamList");
    };
    /**
     * 更新Team数据
     * @param team Team对象
     * @returns Result对象
     */
    Team.updateTeam = function (team) {
        var teamList = Team.getAllTeam();
        teamList = teamList.map(function (t) {
            if (t.id == team.id)
                return team;
            return t;
        });
        teamListFile.set("teamList", teamList);
        return Result_1.Result.success();
    };
    /**
     * 查询玩家是否拥有队伍
     * @param xuid 玩家xuid
     * @returns 是否拥有队伍(true-是,false-否)
     */
    Team.haveTeam = function (xuid) {
        var teamList = teamListFile.get("teamList");
        for (var _i = 0, teamList_3 = teamList; _i < teamList_3.length; _i++) {
            var team = teamList_3[_i];
            //队长判断
            if (team.masterXuid == xuid) {
                return Result_1.Result.success();
            }
            //队员判断
            for (var _a = 0, _b = team.member; _a < _b.length; _a++) {
                var memberXuid = _b[_a];
                if (memberXuid == xuid)
                    Result_1.Result.success();
            }
        }
        return Result_1.Result.error(ErrorConstant_1.ErrorConstant.DONT_HAVE_TEAM);
    };
    /**
     * 聊天监听
     */
    Team.chatListen = function () {
        mc.listen("onChat", function (player, msg) {
            //获取玩家队伍ID
            var teamId = Team.getTeamIdByPlayerXuid(player.xuid).data.teamId;
            if (player.hasTag(TagConstent_1.TagConstant.TeamChatTag) && teamId != -1) {
                //发送的消息 this.CHAT_PREFIX+player.name+": "+msg
                //转发在线队伍成员
                for (var _i = 0, _a = mc.getOnlinePlayers(); _i < _a.length; _i++) {
                    var otherPlayer = _a[_i];
                    //判断队伍成员
                    var otherPlayerTeamId = Team.getTeamIdByPlayerXuid(otherPlayer.xuid).data.teamId;
                    if (teamId == otherPlayerTeamId)
                        otherPlayer.tell(CHAT_PREFIX + player.name + ": " + msg);
                }
                return false;
            }
        });
    };
    /**
     * 开启队内聊天
     * @param player 玩家对象
     */
    Team.openTeamChat = function (player) {
        player.addTag(TagConstent_1.TagConstant.TeamChatTag);
    };
    /**
     * 关闭对内聊天
     * @param player 玩家对象
     */
    Team.closeTeamChat = function (player) {
        player.removeTag(TagConstent_1.TagConstant.TeamChatTag);
    };
    /**
     * API导出
     */
    Team.export = function () {
        var result;
        //函数导出
        ll.exports(Team.createTeam, "LB_TEAM", "createTeam") ? 1 : logger.warn("createTeam\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Team.removeTeam, "LB_TEAM", "removeTeam") ? 1 : logger.warn("removeTeam\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Team.addTeamMember, "LB_TEAM", "addTeamMember") ? 1 : logger.warn("addTeamMember\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Team.removeTeamMember, "LB_TEAM", "removeTeamMember") ? 1 : logger.warn("removeTeamMember\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Team.getAllTeam, "LB_TEAM", "getAllTeam") ? 1 : logger.warn("getAllTeam\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Team.getTeamById, "LB_TEAM", "getTeamById") ? 1 : logger.warn("getTeamById\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Team.transferTeam, "LB_TEAM", "transferTeam") ? 1 : logger.warn("transferTeam\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Team.updateTeam, "LB_TEAM", "updateTeam") ? 1 : logger.warn("updateTeam\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Team.haveTeam, "LB_TEAM", "haveTeam") ? 1 : logger.warn("havaTeam\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Team.getTeamIdByPlayerXuid, "LB_TEAM", "getTeamIdByPlayerXuid") ? 1 : logger.warn("getTeamIdByPlayerXuid\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Team.openTeamChat, "LB_TEAM", "openTeamChat") ? 1 : logger.warn("openTeamChat\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Team.closeTeamChat, "LB_TEAM", "closeTeamChat") ? 1 : logger.warn("closeTeamChat\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
    };
    return Team;
}());
exports.Team = Team;
