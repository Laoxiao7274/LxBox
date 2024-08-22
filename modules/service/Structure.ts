// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 

import { ErrorConstant } from "../Constant/ErrorConstant"
import { MessageConstant } from "../Constant/MessageConstant"
import { Result } from "../pojo/entity/Result"
import { SkewPos } from "../pojo/entity/SkewPos"

//结构模板数据文件
const StructureFile = new JsonConfigFile("./plugins/LxBox/data/structure.json")


export class Structure {


    StructureName: string
    SkewPos: SkewPos

    constructor(StructureName: string, SkewPos: SkewPos) {
        this.StructureName = StructureName
        this.SkewPos = SkewPos
    }

    /**
     * 结构模板表单
     * @param player 玩家对象
     */
    static Form(player:Player){
        const form = mc.newSimpleForm()
        form.setTitle("LxBox结构模板")
        form.addButton("创建结构模板")
        form.addButton("删除结构模板")
        player.sendForm(form,(player,data)=>{
            if(data == undefined) return
            switch(data){
                case 0:
                    Structure.initForm(player)
                    break;
                case 1:
                    Structure.deleteForm(player)
                    break;
            }
        })
    }

    /**
     * 初始化表单
     * @param player 玩家对象
     */
    static initForm(player:Player){
        const DisableStructure:Array<string> = Structure.getDisableStructure()
        if(DisableStructure.length == 0) return player.tell(MessageConstant.PREFIX+"没有未初始化的结构模板")
        const form = mc.newCustomForm()
        form.setTitle("结构模板初始化")
        form.addDropdown("请选择要初始化的结构模板",DisableStructure,0)
        player.sendForm(form,(player,data)=>{
            if(data == undefined) return
            const result = Structure.initModule(DisableStructure[data[0]],player)
            result.result? player.tell(`${MessageConstant.PREFIX}请输入/lb structure init 来确认脚下位置为模板中心`):logger.error(result.msg)
        })
    }

    /**
     * 删除结构模板表单
     * @param player 玩家对象
     */
    static deleteForm(player:Player){
        const Structures:Array<Structure> = StructureFile.get("structures")
        if(Structures.length == 0) return player.tell(MessageConstant.PREFIX+"没有结构模板")
        const structuresName = Structures.map(ele => {return ele.StructureName})
        const form = mc.newCustomForm()
        form.setTitle("删除结构模板")
        form.addDropdown("请选择要删除的结构模板",structuresName,0)
        player.sendForm(form,(player,data)=>{
            if(data == undefined) return
            Structure.deleteModule(structuresName[data[0]])
            player.tell(`${MessageConstant.PREFIX}已删除结构模板${structuresName[data[0]]}`)
        })
    }


    /**
     * 定时检测结构文件
     */
    static checkStructureFile() {
        //创建结构文件夹
        if (!File.exists("./plugins/LxBox/Structure/")) File.createDir("./plugins/LxBox/Structure/")
        //定时检测
        setInterval(() => {
            //获取结构文件夹下的所有文件
            const files: Array<string> = File.getFilesList("./plugins/LxBox/Structure/")
            //遍历文件
            files.forEach((file: string) => {
                //检测服务器原本结构文件夹是否存在
                if (!File.exists(`./behavior_packs/vanilla/structures/${file}`)) {
                    File.copy(`./plugins/LxBox/Structure/${file}`, `./behavior_packs/vanilla/structures/${file}`)
                    logger.info(`检测到结构文件${file}，已复制到服务器结构文件夹`)
                }
            })
        }, 1000 * 60)
    }

    /**
     * 获取所有结构模板名称
     * @returns 结构模板名称数组
     */
    static getAllStructureName(): Array<string> {
        let structuresName: Array<string> = []
        const files: Array<string> = File.getFilesList("./plugins/LxBox/Structure/")
        files.forEach((file: string) => {
            if (structuresName.includes(".mcstructure"))
                structuresName.push(file)
        })
        return structuresName
    }

    /**
     * 根据模板名称获取结构模板
     * @param StructureName 结构模板名称
     */
    static getStructureByName(StructureName:string):Result<Structure>{
        const structures: Array<Structure> = StructureFile.get("structures")
        for(const structure of structures){
            if(structure.StructureName == StructureName) return Result.success(structure)
        }
        return Result.error(ErrorConstant.UNKNOWN_ERROR)
    }

    /**
     * 初始化结构模板
     * @param StructureName 结构模板名称
     * @param player 初始化模板的玩家
     * @returns Result对象
     */
    static initModule(StructureName: string, player: Player): Result {
        /*
            1.在0，0，0位置生成模板结构
            2.将玩家传送至0，0，0
            3.给予tag用来输入指令初始化结构模板
        */
        if (!mc.runcmdEx(`structure load ${StructureName.split(`.mcstructure`)[0]} 0 0 0`).success) return Result.error(ErrorConstant.STRUCTURE_TEMPLATE_LOAD_FAILED)
        player.teleport(0, 0, 0, 0)
        player.addTag("initModule")
        player.setExtraData("StructureName", StructureName)
        return Result.success()
    }

    /**
     * 获取未初始化的模板名称
     */
    static getDisableStructure(): Array<string> {
        const UsableStructures = StructureFile.get("structures")
        const StructuresName = File.getFilesList("./plugins/LxBox/Structure/")
        return StructuresName.filter((file: string) => {
            for(const structure of UsableStructures){
                if(file == structure.StructureName){
                    return false
                }
            }
            return true
        })
    }

    /**
     * 创建结构模板
     * @param StructureName 结构模板名称
     * @param pos 模板中心点
     * @returns Result对象
     */
    static createModule(StructureName: string,pos:IntPos):Result{
        //判断是否存在
        const structures = StructureFile.get("structures")
        for(const structure of structures){
            if(structure.StructureName == StructureName) return Result.error(ErrorConstant.STRUCTURE_TEMPLATE_EXIST)
        }
        //计算偏移Pos
        const skewpos: SkewPos = new SkewPos(pos.x, pos.y, pos.z)
        //存储数据
        structures.push({
            StructureName: StructureName,
            SkewPos: skewpos
        })
        StructureFile.set("structures", structures)
        return Result.success()
    }

    /**
     * 删除结构模板
     * @param StructureName 模板名称
     */
    static deleteModule(StructureName: string):Result{
        let structures = StructureFile.get("structures")
        const length = structures.length
        structures = structures.filter((structure: Structure) => {
            return structure.StructureName != StructureName
        })
        if(structures.length == length) return Result.error(ErrorConstant.STRUCTURE_TEMPLATE_NOT_EXIST)
        StructureFile.set("structures", structures)
        return Result.success()
    }

    /**
     * 判断是否存在该结构模板
     * @param StructureName 结构模板名
     * @returns 
     */
    static isHaveModule(StructureName:string):boolean{
        const structures = StructureFile.get("structures")
        for(const structure of structures){
            if(structure.StructureName == StructureName) return true
        }
        return false
    }

    /**
     * 生成模板
     * @param StructureName 结构模板名
     * @param pos 生成位置
     */
    static spawnModule(StructureName:string,pos:IntPos):Result{
        //判断模板是否存在
        if(!Structure.isHaveModule(StructureName)) return Result.error(ErrorConstant.STRUCTURE_TEMPLATE_NOT_EXIST)
        const structure = Structure.getStructureByName(StructureName).data
        const spawnPos = new IntPos(pos.x-structure.SkewPos.x,pos.y-structure.SkewPos.y,pos.z-structure.SkewPos.z,pos.dimid)
        const result = mc.runcmdEx(`structure load ${StructureName.split(`.mcstructure`)[0]} ${spawnPos.x} ${spawnPos.y} ${spawnPos.z}`)
        return result.success?Result.success():Result.error(result.output)
    }

    /**
     * 函数导出
     */
    static export() { 
        ll.exports(Structure.getAllStructureName,"LB_STRUCTURE","getAllStructureName")?1:logger.error("getAllStructureName导出失败")
        ll.exports(Structure.createModule,"LB_STRUCTURE","createModule")?1:logger.error("createModule导出失败")
        ll.exports(Structure.deleteModule,"LB_STRUCTURE","deleteModule")?1:logger.error("deleteModule导出失败")
        ll.exports(Structure.getDisableStructure,"LB_STRUCTURE","getDisableStructure")?1:logger.error("getDisableStructure导出失败")
        ll.exports(Structure.getStructureByName,"LB_STRUCTURE","getStructureByName")?1:logger.error("getStructureByName导出失败")
        ll.exports(Structure.isHaveModule,"LB_STRUCTURE","isHaveModule")?1:logger.error("isHaveModule导出失败")
        ll.exports(Structure.spawnModule,"LB_STRUCTURE","spawnModule")?1:logger.error("spawnModule导出失败")
    }
}