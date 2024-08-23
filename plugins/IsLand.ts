// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 

import { MessageConstant } from "../modules/Constant/MessageConstant";

/**
 * 空岛子插件
 */

/**
 * 计划
 * 1.实现岛屿添加机制
 */

/**
 * 岛屿添加机制
 * 将每一个功能拆分出来在进行统一整理
 * 1.创建岛屿
 * 2.删除岛屿
 * 3.转让岛屿(权限写完后)
 * 
 * 接下来整合
 */

const Conf = new JsonConfigFile("./plugins/LxBox/config.json")
const dataFile = new JsonConfigFile("./plugins/LxBox/data/landData.json")

export class IsLand{

    /**
     * 实体属性
     */

    //岛屿id
    id:number
    //队伍ID
    teamId:number
    //岛屿名称
    name:string
    //岛屿中心坐标
    pos:IntPos
    //岛屿半径
    range:number

    constructor(id:number,teamId:number,name:string,pos:IntPos,range:number){
        this.id = id
        this.teamId = teamId
        this.name = name
        this.pos = pos
        this.range = range
    }

    static main(){


        //配置文件初始化
        IsLand.initConf()
        //命令注册
        IsLand.regCmd()
        //函数导出
        IsLand.export()
        log(MessageConstant.PREFIX+"空岛插件加载成功!")
    }

    /**
     * 配置文件初始化
     */
    static initConf(){
        const dataFile1 = new JsonConfigFile("./plugins/LxBox/data/landData.json")
        Conf.set("island",{
            //岛屿间距
            "Land_Range": 1000,
            //岛屿大小
            "Init_Land_Range": 200
        })

        dataFile.init("lands",[])
    }

    /**
     * 命令注册
     */
    static regCmd(){
        const cmd = mc.newCommand("island","空岛插件",PermType.Any)
        cmd.setAlias("is")
        cmd.overload([])
        cmd.setCallback((_cmd,ori,out,res)=>{
            switch(res.action){
                default:
                    break
            }
        })
        cmd.setup()
    }




    /**
     * 函数导出
     */
    static export(){

    }
}