
declare module "elliptic"{

    type HexString = string;
    type NAF = Array<number>;
    type JSF = Array<Array<number>>;
    interface BN{};
    interface Hash{};

    interface CurveOptions{};
    interface Short {}
    interface Edwards{}
    interface Mongomery{};

    type CurveType = Short | Edwards | Mongomery

    export interface utils{
        assert(val:any,msg:string);        
        toArray(msg:string|Array<number>,enc:string):Array<number>;
        zero2(word:string):string;
        toHex(msg:Array<number>):string;
        encode(msg:Array<number>):string|Array<number>;

        getNAF(num:BN, w:number):NAF;
        getJSF(k1:BN,K2:BN):JSF;
        cachedProperty(obj:any,name:any,computer:any):any;
        parseBytes(bytes:HexString):Array<number>;
        intFromLE(bytes:HexString):BN
    }
    interface Curve{
        curve: CurveType;
        g: BN;
        n: BN;
        hash: Hash;
    }
    interface curves{
        PresetCurve(options:CurveOptions):Curve
    }

}