export class Result<T = null>{
    result:boolean
    msg:string
    data:any

    constructor(result:boolean,msg:string,data:any){
        this.result = result
        this.msg = msg
        this.data = data
    }

    static success(T:any = null){
        return new Result(true,"",T)
    }

    static error(msg:string){
        return new Result(false,msg,null)
    }
}