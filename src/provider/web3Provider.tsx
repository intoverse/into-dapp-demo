import { createWeb3Modal } from '@web3modal/wagmi/react'

import { http, createConfig, WagmiProvider } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors'
import {match} from "@/contract/chains";


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '5bad4b7459c1bdcb4d4972a1227b03c2'

// 2. Create wagmiConfig
const metadata = {
    name: 'matchain dapp demo',
    description: 'matchain dapp demo',
    url: 'https://matchain.io/', // origin must match your domain & subdomain
    icons: ['/images/icon_wallet_into.png']
}

const config = createConfig({
    chains: [match],
    transports: {
        [match.id]: http()
    },
    connectors: [
        walletConnect({ projectId, metadata, showQrModal: false }),
        injected({ shimDisconnect: true })
    ]
})

// 3. Create modal
createWeb3Modal({
    themeMode: 'light',
    wagmiConfig: config,
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    enableOnramp: true // Optional - false as default
})

export default function Web3Provider({ children }:any) {
    return (
        <WagmiProvider config={config}>
            {children}
        </WagmiProvider>
    )
}
