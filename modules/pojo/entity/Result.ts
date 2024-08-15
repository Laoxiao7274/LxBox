export class Result{
    result:boolean
    msg:string
    data:any

    constructor(result:boolean,msg:string,data:any){
        this.result = result
        this.msg = msg
        this.data = data
    }

    static success(data:any = null){
        return new Result(true,"",data)
    }

    static error(msg:string){
        return new Result(false,msg,null)
    }
}