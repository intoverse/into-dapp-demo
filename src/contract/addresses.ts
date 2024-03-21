import { ChainID } from './chains';

export interface AddressMap {
  [cid:number]:`0x${string}`
}
export const TOX_ADDRESSSES:AddressMap = {
  [ChainID.BSC]: "0x837656c3f5858692cCdce13BA66e09d2685073df",
  [ChainID.MATCH]: "0x96397347Ea2beE29713Bc48749eB277D6A36A407",
};
export const USDT_ADDRESSSES:AddressMap = {
  [ChainID.MATCH]: "0x67Dc36C19835Fa65Bf4B100FAC9a80A9E9280fB9",
};

export const MULTICALL_ADDRESSSES = {
  [ChainID.MATCH]: '0x2418F7F0486deBc9270E16126F36526925EDAAE4',
};
