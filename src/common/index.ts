import {formatUnits, parseUnits} from "ethers";

export const RefreshConfig:any = {
    refreshInterval:20 * 1000,
    longRefreshInterval: 1000 * 60 * 10,
    shortRefreshInterval: 1000 * 60 * 1
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export function formatFullNum(num:number){
    if (isNaN(num)) return num
    let str = '' + num
    if(!/e/i.test(str)) return num
    return (num).toFixed(18).replace(/\.?0+$/,"")
}
export function formatBalance(s: string | number, decimals = 4): string {
    const init = 0;
    if (isNaN(Number(s))) {
        return floorFixed(init, decimals).toString()
    }
    return s ? floorFixed(s, decimals).toString() : floorFixed(init, decimals).toString()
}

export function floorFixed(s: string | number, decimals = 4) {
    s = Number(s)
    return Math.floor(s * Math.pow(10, decimals)) / Math.pow(10, decimals)
}
export function formatAccount(account: string | undefined, decimals = 4) {
    if (!account) {
        return ""
    }
    if (account == ZERO_ADDRESS) {
        return ""
    }
    return account.slice(0, decimals) + '****' + account.slice(-decimals);
}
export function bigNumberToBalance(str?:string|bigint,decimals=18){
    if(!str) return 0
    return Number(formatUnits(BigInt(str),decimals))
}
export function balanceToBigNumber(str?:string|number,decimals=18){
    if(!str) return BigInt(0)
    return parseUnits(String(str),decimals)
}
