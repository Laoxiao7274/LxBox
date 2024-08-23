export class ErrorConstant{
    //已经拥有队伍
    static HAVE_TEAM = `HAVE_TEAM`
    //不在队伍内
    static NOT_IN_THIS_TEAM = `NOT_IN_THIS_TEAM`
    //没有队伍
    static DONT_HAVE_TEAM = `DONT_HAVE_TEAM`
    //不能转让自己
    static CANT_TRANSFER_SELF = `CANT_TRANSFER_SELF`
    //是其他队长
    static IS_OTHER_CAPTAIN = `IS_OTHER_CAPTAIN`
    //队伍不存在
    static TEAM_DONT_EXIST = `TEAM_DONT_EXIST`
    //玩家不存在
    static PLAYER_NOT_EXIST = `PLAYER_NOT_EXIST`
    //未知错误
    static UNKNOWN_ERROR = `UNKNOWN_ERROR`
    //结构模板加载失败
    static STRUCTURE_TEMPLATE_LOAD_FAILED = `STRUCTURE_TEMPLATE_LOAD_FAILED`
    //结构模板已存在
    static STRUCTURE_TEMPLATE_EXIST = `STRUCTURE_TEMPLATE_EXIST`
    //结构模板不存在
    static STRUCTURE_TEMPLATE_NOT_EXIST = `STRUCTURE_TEMPLATE_NOT_EXIST`
    //dimid不相同
    static POS_DIMID_NOT_SAME = `POS_DIMID_NOT_SAME`
    //超出区块限制
    static BLOCK_SUM_TOO_LARGE = `BLOCK_SUM_TOO_LARGE`
    //假人创建失败
    static CREATE_PLAYER_FAILED = `CREATE_PLAYER_FAILED`
}