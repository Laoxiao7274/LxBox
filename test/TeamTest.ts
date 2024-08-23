// LiteLoader-AIDS automatic generated
/// <reference path="d:\BDS_api/dts/helperlib/src/index.d.ts"/> 

const createTeam = ll.imports("LB_TEAM","createTeam")
const removeTeam = ll.imports("LB_TEAM", "removeTeam")
const transferTeam =  ll.imports("LB_TEAM", "transferTeam")
const updateTeam = ll.imports("LB_TEAM", "updateTeam")
const addTeamMember = ll.imports("LB_TEAM", "addTeamMember")
const removeTeamMember = ll.imports("LB_TEAM", "removeTeamMember")
const getAllTeam = ll.imports("LB_TEAM", "getAllTeam")
const getTeamById = ll.imports("LB_TEAM", "getTeamById")
const haveTeam = ll.imports("LB_TEAM", "haveTeam")
const getTeamIdByPlayerXuid = ll.imports("LB_TEAM", "getTeamIdByPlayerXuid")
const openTeanChat = ll.imports("LB_TEAM", "openTeamChat")
const closeTeamChat = ll.imports("LB_TEAM", "closeTeamChat")

ll.registerPlugin(
    /* name */ "test",
    /* introduction */ "test",
    /* version */ [0,0,1],
    /* otherInformation */ {}
);

mc.listen("onJoin",(player)=>{
    haveTeam(player)
})




const test = ll.imports("LB_UNIT","test")
const pos1 = new IntPos(-30,-40,-30,0)
const pos2 = new IntPos(0,256,0,0)
unitDelete(pos1,pos2)