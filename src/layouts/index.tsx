import { Link, Outlet } from 'umi';
import Web3Provider from '@/provider/web3Provider'
import QueryProvider from "@/provider/queryProvider";
import LoadingProvider from "@/provider/loadingProvider";
import './index.scss'
export default function Layout() {
  return (
      <QueryProvider>
          <Web3Provider>
             <LoadingProvider>
                 <Outlet />
             </LoadingProvider>
          </Web3Provider>
      </QueryProvider>
  );
}
