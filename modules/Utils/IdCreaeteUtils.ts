import { Team } from "../pojo/entity/Team"


export class IdCreateUtils {

    /** 队伍列表文件 */
    // static teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json")

    /**
     * 获取新的TeamId
     * @returns 最新的TeamId
     */
    static TeamId(): number {
        const teamListFile = new JsonConfigFile("./plugins/LxBox/data/teamList.json")
        const teamList:Array<Team> = teamListFile.get("teamList")
        //初始状态
        if(teamList.length == 0) return 0
        for (let i = 0; i < 100000; i++) {
            let result = false
            for(const team of teamList){
                if(team.id == i){
                    //存在此id
                    result = true
                    break
                }
            }
            //存在此ID继续循环
            if(result) continue
            //不存在此ID
            else return i
        }
        return -1
    }
}