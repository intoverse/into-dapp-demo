import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// 0. Setup queryClient
const queryClient = new QueryClient()
export default function QueryProvider({ children }:any){
    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools></ReactQueryDevtools>
        </QueryClientProvider>
    )
}
