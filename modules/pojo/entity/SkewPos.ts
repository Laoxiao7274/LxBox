/**
 * 偏移位置
 */
export class SkewPos {
    /*
        比如生成位置原本为0，0，0
        偏移为10，2，-1
        那么偏移后的位置为-10，-2，1
        原生成位置-偏移位置 = 最后生成位置
    */
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
    }
}