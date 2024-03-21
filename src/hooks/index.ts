
import {formatUnits} from "ethers";
import {
    useDynamicContract,
    useTokenContract
} from "@/hooks/useContract";
import {useAccount} from "wagmi";
import {ERC20} from "@/abi/typechain";
import {AddressMap, USDT_ADDRESSSES, TOX_ADDRESSSES} from "@/contract/addresses";
import {useMutation, useQuery} from "@tanstack/react-query";
import {REFRESH_CONFIG} from "@/constant";

export function useWalletBalance(){
    const {address,chain = { id : 9001 }} = useAccount()
    const toxContract = useTokenContract<ERC20>(TOX_ADDRESSSES)
    const usdtContract = useTokenContract<ERC20>(USDT_ADDRESSSES)
    async function fetchData(){
        if (!address || !toxContract ||!usdtContract){
            return {
                tox:0,
                usdt:0,
                address:address
            }
        }
        const tox_balance:bigint = await toxContract.balanceOf(address)
        const usdt_balance:bigint = await usdtContract.balanceOf(address)
        return {
            tox:Number(formatUnits(tox_balance,18)),
            usdt:Number(formatUnits(usdt_balance,18)),
            address:address
        }
    }
    return useQuery({
        queryKey: ['useWalletBalance'],
        queryFn: fetchData,
        enabled: !!address&& !!usdtContract && !!toxContract,
        refetchInterval: REFRESH_CONFIG.refreshInterval,
    })

}
export function useFindWalletBalance(){
    const toxContract = useTokenContract<ERC20>(TOX_ADDRESSSES)
    const usdtContract = useTokenContract<ERC20>(USDT_ADDRESSSES)
    async function fetchData(params:any){
        const {address} = params
        if (!address || !toxContract ||!usdtContract){
            return {
                tox:0,
                usdt:0,
                address:address
            }
        }
        const tox_balance:bigint = await toxContract.balanceOf(address)
        const usdt_balance:bigint = await usdtContract.balanceOf(address)
        return {
            tox:Number(formatUnits(tox_balance,18)),
            usdt:Number(formatUnits(usdt_balance,18)),
            address:address
        }
    }
    return useMutation({mutationFn:(params: any) => fetchData(params)})

}
