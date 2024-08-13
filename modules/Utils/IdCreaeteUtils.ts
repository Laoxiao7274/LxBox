export class IdCreateUtils{
    /** 队伍列表文件 */
    static teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json")

    /**
     * 获取新的TeamId
     * @returns 最新的TeamId
     */
    static TeamId(): number{
        const teamList = this.teamListFile.get("teamList")
        for(let i = 0;i < 100000;i++){
            if(teamList[i].id == i) continue
            return i
        }
        return -1
    }
}