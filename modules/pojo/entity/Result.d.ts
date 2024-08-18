export declare class Result<T = null> {
    result: boolean;
    msg: string;
    data: any;
    constructor(result: boolean, msg: string, data: any);
    static success(T?: any): Result<null>;
    static error(msg: string): Result<null>;
}
