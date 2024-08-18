// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 


import { Result } from "./Result";


declare module 'LB_TEAM'{
    /**
     * 创建队伍
     * @param playerXuid 创建队伍的玩家
     * @param teamName 队伍名称
     * @returns Result对象
     */
    export function createTeam(playerXuid: string, teamName: string): Result;

    export function ll.imports("LB_TEAM","createTeam"):createTeam
}

export declare class Team {
    /** 队伍ID */
    id: number;
    /** 队伍名称 */
    name: string;
    /** 队长XUID */
    masterXuid: string;
    /**队员列表 */
    member: Array<string>;
    constructor(name: string, masterXuid: string);
    /**
     * 创建队伍
     * @param playerXuid 创建队伍的玩家
     * @param teamName 队伍名称
     * @returns Result对象
     */
    static createTeam(playerXuid: string, teamName: string): Result;
    /**
     * 删除队伍
     * @param teamId 队伍ID
     * @returns Result对象
     */
    static removeTeam(teamId: number): Result;
    /**
     * 添加队伍成员
     * @param teamId 队伍ID
     * @param memberXuid 成员xuid
     * @returns Result对象
     */
    static addTeamMember(teamId: number, memberXuid: string): Result;
    /**
     * 删除成员
     * @param teamId 队伍ID
     * @param memberXuid 成员XUID
     * @returns Result对象
     */
    static removeTeamMember(teamId: number, memberXuid: string): Result;
    /**
     * 转让队伍
     * @param teamId
     * @param transferPlayerXuid
     * @returns Result对象
     */
    static transferTeam(teamId: number, transferPlayerXuid: string): Result;
    /**
     * 根据玩家xuid获取teamid
     * @param xuid 玩家xuid
     * @returns 对象信息:
     *          - identity 身份信息 ["master","member","不存在为null"]
     *          - teamId 队伍Id ["队伍ID","不存在为-1"]
     */
    static getTeamIdByPlayerXuid(xuid: string): Result;
    /**
     * 根据队伍ID获取队伍信息
     * @param teamId 队伍ID
     * @returns Result<Team>对象
     */
    static getTeamById(teamId: number): Result<Team>;
    /**
     * 获取全部队伍信息
     * @returns Team数组
     */
    static getAllTeam(): Array<Team>;
    /**
     * 更新Team数据
     * @param team Team对象
     * @returns Result对象
     */
    static updateTeam(team: Team): Result;
    /**
     * 查询玩家是否拥有队伍
     * @param xuid 玩家xuid
     * @returns 是否拥有队伍(true-是,false-否)
     */
    static haveTeam(xuid: string): Result;
    /**
     * 聊天监听
     */
    static chatListen(): void;
    /**
     * 开启队内聊天
     * @param player 玩家对象
     */
    static openTeamChat(player: Player): void;
    /**
     * 关闭对内聊天
     * @param player 玩家对象
     */
    static closeTeamChat(player: Player): void;
    /**
     * API导出
     */
    static export(): void;
}
