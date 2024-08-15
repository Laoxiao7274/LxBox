## 组队API
### 创建队伍
~~~js
    ll.imports("LB_TEAM", "createTeam")
~~~
- 返回函数: 
~~~ts
    createTeam(player: Player, teamName: string)
~~~
- 参数：
- player：`Player`
创建队伍的玩家对象
- teamName: `string`
创建的队伍名称

### 添加队伍成员
~~~js
    ll.imports("LB_TEAM", "addTeamMember")
~~~
- 返回函数: 
~~~ts
    addTeamMember(teamId:number,memberXuid:string):string
~~~
- 参数：
- teamId：`number`
队伍ID
- memberXuid: `string`
添加成员的XUID
- 返回值: `string`
提示信息(成功或失败 用来告知执行者)