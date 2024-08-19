## 经济API
### 获取玩家金币数
~~~js
    ll.imports("LB_MONEY", "getMoney")
~~~
- 返回函数: 
~~~ts
    getMoney(MoneyType: "LLMoney" | "ScoreMoney", ScoreName: string, PlayerXuid: string): Result<number>
~~~
- 参数说明:

| 参数 | 类型 | 说明 |
| ---- | ---- | ---- |
| MoneyType | string | 获取经济类型，LLMoney为LSE经济，ScoreMoney为计分板经济 |
| ScoreName | string | 获取计分板名称 |
| PlayerXuid | string | 获取经济玩家Xuid |

- 返回值: 
~~~yml
{
    //0为失败1为成功
    result: 1
    //提示消息
    msg: ''
    //返回数据(金币数:number)
    data: money
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(玩家不存在)
    msg: 'PLAYER_NOT_EXIST'
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(未知错误)
    msg: 'UNKNOWN_ERROR'
    //返回数据(空)
    data: {}
}
~~~

### 设置玩家金币数
~~~js
    ll.imports("LB_MONEY", "setMoney")
~~~
- 返回函数: 
~~~ts
    setMoney(MoneyType: "LLMoney" | "ScoreMoney", ScoreName: string, PlayerXuid: string, MoneyCount:number): Result<number>
~~~
- 参数说明:

| 参数 | 类型 | 说明 |
| ---- | ---- | ---- |
| MoneyType | string | 经济类型，LLMoney为LL经济，ScoreMoney为计分板经济 |
| ScoreName | string | 计分板名称 |
| PlayerXuid | string | 经济玩家Xuid |
| MoneyCount | number | 经济数量 |

- 返回值: 
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
    //提示消息(玩家不存在)
    msg: 'PLAYER_NOT_EXIST'
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(未知错误)
    msg: 'UNKNOWN_ERROR'
    //返回数据(空)
    data: {}
}
~~~

### 增加玩家金币数
~~~js
    ll.imports("LB_MONEY", "addMoney")
~~~
- 返回函数: 
~~~ts
    addMoney(MoneyType: "LLMoney" | "ScoreMoney", ScoreName: string, PlayerXuid: string, MoneyCount:number): Result<number>
~~~
- 参数说明:

| 参数 | 类型 | 说明 |
| ---- | ---- | ---- |
| MoneyType | string | 经济类型，LLMoney为LL经济，ScoreMoney为计分板经济 |
| ScoreName | string | 计分板名称 |
| PlayerXuid | string | 经济玩家Xuid |
| MoneyCount | number | 经济数量 |

- 返回值: 
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
    //提示消息(玩家不存在)
    msg: 'PLAYER_NOT_EXIST'
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(未知错误)
    msg: 'UNKNOWN_ERROR'
    //返回数据(空)
    data: {}
}
~~~

### 减少玩家金币数
~~~js
    ll.imports("LB_MONEY", "reduceMoney")
~~~
- 返回函数: 
~~~ts
    reduceMoney(MoneyType: "LLMoney" | "ScoreMoney", ScoreName: string, PlayerXuid: string, MoneyCount:number): Result<number>
~~~
- 参数说明:

| 参数 | 类型 | 说明 |
| ---- | ---- | ---- |
| MoneyType | string | 经济类型，LLMoney为LL经济，ScoreMoney为计分板经济 |
| ScoreName | string | 计分板名称 |
| PlayerXuid | string | 经济玩家Xuid |
| MoneyCount | number | 经济数量 |

- 返回值: 
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
    //提示消息(玩家不存在)
    msg: 'PLAYER_NOT_EXIST'
    //返回数据(空)
    data: {}
}
~~~
~~~yml
{
    //0为失败1为成功
    result: 0
    //提示消息(未知错误)
    msg: 'UNKNOWN_ERROR'
    //返回数据(空)
    data: {}
}
~~~


