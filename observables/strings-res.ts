import { makeAutoObservable } from "mobx"

const STRINGS_ZH_CN = {
    ERROR_MSGS: {
        GOT_NOT_POSITIVE: "接收到了非正值",
        SQRT: "sqrt()接收到了负值",
        TAN: "tan()接收到了π/2的奇数倍",
        ASINACOS: "arcsin()或arccos()接收到了[-1,1]以外的值",
        FACT: "阶乘操作数不是非负整数",
        COMBINE_NOT_NNINT: "排列组合操作数不是非负整数",
        COMBINE_X_LT_Y: "排列组合操作数n<m",
        POW:"求负数的幂时指数不是整数",
        ROOT_X_ZERO: "不能求0次根",
        ROOT_Y_NEG_X_NOT_ODD_INT: "被开根数为负时,只能求其奇数次根",
        DIV: "不能除以0",
        REC:"Rec()转换的第一个参数不能为负"
    }
}

const STRINGS_EN = {
    ERROR_MSGS: {
        GOT_NOT_POSITIVE: "接收到了非正值",
        SQRT: "sqrt()接收到了负值",
        TAN: "tan()接收到了π/2的奇数倍",
        ASINACOS: "arcsin()或arccos()接收到了[-1,1]以外的值",
        FACT: "阶乘操作数不是非负整数"

    }
}

class StringsRes{
    constructor() {
        makeAutoObservable(this);
    }

    strings = STRINGS_ZH_CN;

    switchLanguage(lang: "ZH_CN" | "EN") {
        switch (lang) {
            case "ZH_CN":
                this.strings = STRINGS_ZH_CN;
                break;
            case "EN":
                //this.strings = STRINGS_EN;
                break;
        }
    }
}

export default new StringsRes();