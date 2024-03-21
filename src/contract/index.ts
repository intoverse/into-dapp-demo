import {TransactionResponse} from 'ethers';
import {useMutation} from '@tanstack/react-query';
import {LoadingType, useLoadingContext} from '@/provider/loadingProvider';

interface ITransaction {
    title: string,
    func: any,
    args: any[],
    gasLimit?: any,
    onSuccess?: Function,
    onError?: Function,
}

export function useSendTransactionSimple() {
    const loading = useLoadingContext()
    function sendTransaction(params: ITransaction) {
        return new Promise(() => {
            loading.show(LoadingType.confirm, params.title)
            params.func(...params.args)
                .then(async (response: TransactionResponse) => {
                    loading.show(LoadingType.pending, response.hash)
                    await response.wait();
                    loading.show(LoadingType.success, response.hash)
                    params.onSuccess && params.onSuccess()
                })
                .catch((err: any) => {
                    console.log(err)
                    loading.show(LoadingType.error, "error")
                    params.onError && params.onError()
                })
        })
    }

    return useMutation({mutationFn:(params: ITransaction) => sendTransaction(params)})
}
