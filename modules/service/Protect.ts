// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 


export class Protect{

    /**
     * 权限监听
     */
    static perListen(){
        mc.listen("onPlaceBlock",(player:Player,block:Block)=>{
            if(ll.hasExported("LB_API_PER","PLACE_CALLBACK")){
                //判断函数导入
                const PLACE_CALLBACK = ll.imports("LB_API_PER","PLACE_CALLBACK")
                if(!PLACE_CALLBACK(player,block)) return false
            }
            
        })
    }

    static export(){
        function place_callback(player:Player,block:Block){
            if(player.hasTag("test")) return true
            log("没有test标签，拦截")
            return false
        }
        ll.exports(place_callback,"LB_API_PER","PLACE_CALLBACK")
    }

}