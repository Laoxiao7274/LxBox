## 队伍实体
~~~ts
    class Team{
        /** 队伍ID */
        id: number
        /** 队伍名称 */
        name: string
        /** 队长XUID */
        masterXuid: string
        /**队员列表 */
        member: Array<string>   //存xuid
    }
~~~

## 组队API
### 创建队伍
~~~js
    ll.imports("LB_TEAM", "createTeam")
~~~
- 返回函数: 
~~~ts
    createTeam(playerXuid: string, teamName: string):Result
~~~
- 参数：
- playerXuid：`string`
  创建队伍的玩家XUID
- teamName: `string`
  创建的队伍名称
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(已经拥有队伍)
    msg: 'HAVE_TEAM'
    //返回数据(空)
    data: {}
}
~~~

### 删除队伍
> <span style="color:red">注：并未判断是否为队伍主人等权限仅判断是否存在队伍</span>
~~~ts
    ll.imports("LB_TEAM", "removeTeam")
~~~
- 返回函数: 
~~~ts
    removeTeam(teamId:number):Result
~~~
- 参数：
- teamId：`number`
队伍ID
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(该队伍不存在)
    msg: 'TEAM_DONT_EXIST'
    //返回数据(空)
    data: {}
}
~~~


### 转让队伍
~~~ts
    ll.imports("LB_TEAM", "transferTeam")
~~~
- 返回函数: 
~~~ts
    transferTeam(teamId:number,transferPlayerXuid:string):Result
~~~
- 参数：
- teamId：`number`
队伍ID
- transferPlayerXuid: `string`
被转让玩家XUID
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(无法转让自己)
    msg: 'CANT_TRANSFER_SELF'
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(是其他队伍的队长)
    msg: 'IS_OTHER_CAPTAIN'
    //返回数据(空)
    data: {}
}
~~~

### 更新队伍信息
~~~ts
    ll.imports("LB_TEAM", "updateTeam")
~~~
- 返回函数: 
~~~ts
    updateTeam(team:Team):Result
~~~
- 参数：
- team：`Team`
队伍对象
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(空)
    data: {}
}
~~~

### 添加队伍成员
~~~ts
    ll.imports("LB_TEAM", "addTeamMember")
~~~
- 返回函数: 
~~~ts
    addTeamMember(teamId:number,memberXuid:string):Result
~~~
- 参数：
- teamId：`number`
队伍ID
- memberXuid: `string`
添加成员的XUID
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(已经拥有队伍)
    msg: 'HAVE_TEAM'
    //返回数据(空)
    data: {}
}
~~~

### 删除队伍成员
~~~ts
    ll.imports("LB_TEAM", "removeTeamMember")
~~~
- 返回函数: 
~~~ts
    removeTeamMember(teamId:number,memberXuid:string):Result
~~~
- 参数：
- teamId：`number`
队伍ID
- memberXuid: `string`
成员XUID
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(该玩家不在这个队伍中)
    msg: 'NOT_IN_THIS_TEAM'
    //返回数据(空)
    data: {}
}
~~~

### 获取全部队伍信息
~~~ts
    ll.imports("LB_TEAM", "getAllTeam")
~~~
- 返回函数: 
~~~ts
    getAllTeam():Array<Team>
~~~
- 参数：
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(Team对象数组)
    data: Array<Team>
}
~~~

### 根据队伍ID获取队伍信息
~~~ts
    ll.imports("LB_TEAM", "getTeamById")
~~~
- 返回函数: 
~~~ts
    getTeamById(teamId:number):Result<Team>
~~~
- 参数：
- teamId: `number`
队伍ID
- 返回值: `Result<Team>`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(Team对象)
    data: Team
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(该队伍不存在)
    msg: 'TEAM_DONT_EXIST'
    //返回数据(Team对象)
    data: {}
}
~~~

### 查询玩家是否拥有队伍
~~~ts
    ll.imports("LB_TEAM", "haveTeam")
~~~
- 返回函数: 
~~~ts
    haveTeam(xuid: string):Result
~~~
- 参数：
- xuid: `number`
玩家XUID
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(该玩家不存在队伍)
    msg: 'DONT_HAVE_TEAM'
    //返回数据(空)
    data: {}
}
~~~

### 根据玩家xuid获取teamid
~~~ts
    ll.imports("LB_TEAM", "getTeamIdByPlayerXuid")
~~~
- 返回函数: 
~~~ts
    getTeamIdByPlayerXuid(xuid:string):Result
~~~
- 参数：
- xuid: `number`
玩家XUID
- 返回值: `Result`
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据
    data: {
        identity: "master",
        teamId: teamId,
    }
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据
    data: {
        identity: "member",
        teamId: teamId,
    }
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据
    data: {
        identity: "",
        teamId: -1, //不存在队伍
    }
}
~~~

### 开启队内聊天
~~~ts
    ll.imports("LB_TEAM", "openTeamChat")
~~~
- 返回函数: 
~~~ts
    openTeamChat(player:Player)
~~~
- 参数：
- player: `Player`
玩家对象
- 返回值: `无`

### 关闭队内聊天
~~~ts
    ll.imports("LB_TEAM", "closeTeamChat")
~~~
- 返回函数: 
~~~ts
    closeTeamChat(player:Player)
~~~
- 参数：
- player: `Player`
玩家对象
- 返回值: `无`