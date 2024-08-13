"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var MessageConstant_1 = require("../../Constant/MessageConstant");
var IdCreaeteUtils_1 = require("../../Utils/IdCreaeteUtils");
var Team = /** @class */ (function () {
    function Team(name, masterXuid) {
        this.id = IdCreaeteUtils_1.IdCreateUtils.TeamId();
        this.name = name;
        this.masterXuid = masterXuid;
    }
    /**
     * 创建队伍
     * @param player 创建队伍的玩家
     * @param teamName 队伍名称
     */
    Team.createTeam = function (player, teamName) {
        if (this.haveTeam(player.xuid)) {
            //拥有队伍
            player.tell("".concat(MessageConstant_1.MessageConstant.PREFIX, "\u4F60\u5DF2\u7ECF\u62E5\u6709\u961F\u4F0D\u4E86"));
            return;
        }
        var team = new Team(teamName, player.xuid);
        var teamList = this.teamListFile.get("teamList");
        teamList.push(team);
        this.teamListFile.set("teamList", teamList);
        player.tell("".concat(MessageConstant_1.MessageConstant.PREFIX, "\u961F\u4F0D\u521B\u5EFA\u6210\u529F!"));
    };
    /**
     * 查询是否拥有队伍
     * @param xuid 玩家xuid
     * @returns 是否拥有队伍(true-是,false-否)
     */
    Team.haveTeam = function (xuid) {
        var teamList = this.teamListFile.get("teamList");
        for (var _i = 0, teamList_1 = teamList; _i < teamList_1.length; _i++) {
            var team = teamList_1[_i];
            //队长判断
            if (team.masterXuid == xuid) {
                return true;
            }
            //TODO:队员判断
        }
        return false;
    };
    /**
     * API导出
     */
    Team.export = function () {
        var result;
        //函数导出
        ll.exports(Team.createTeam, "LB_TEAM", "createTeam") ? log("createTeam函数导出成功") : logger.warn("createTeam\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
        ll.exports(Team.haveTeam, "LB_TEAM", "haveTeam") ? log("haveTeam函数导出成功") : logger.warn("havaTeam\u51FD\u6570\u5BFC\u51FA\u5931\u8D25");
    };
    /** 队伍列表文件 */
    Team.teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json");
    return Team;
}());
exports.Team = Team;
