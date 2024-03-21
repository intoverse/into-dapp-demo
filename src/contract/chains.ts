

export enum ChainID {
  MAINNET = 1,
  TESTNET_RINKEBY = 4,
  ARBITRUM = 42161,
  ARBITRUM_TESTNET = 421611,
  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,
  POLYGON = 137,
  POLYGON_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  OPTIMISM = 10,
  OPTIMISM_TESTNET = 69,
  BOBA = 288,
  BOBA_TESTNET = 28,
  ESC = 20,
  HECO = 128,
  BSC = 56,
  BSC_TESTNET=97,
  MATCH = 9001,
  MATCH_TESTNET = 9000,
  CC = 1331
}

interface NetworkFace {
  [cid:number]:string
}

const ETHERSCAN_PREFIXES:NetworkFace = {
  [ChainID.HECO]: 'hecoinfo.com',
  [ChainID.ESC]: 'etherscan.io',
  [ChainID.BSC]: 'bscscan.com',
  [ChainID.MAINNET]: 'etherscan.io',
  [ChainID.POLYGON]: 'polygonscan.com',
  [ChainID.MATCH]: 'lisbon.matchscan.io',

}

export function getScanLink(
    chainId: ChainID,
    data: string,
    type: 'transaction' | 'token' | 'block' | 'address'
): string {
  const prefix = `https://${ETHERSCAN_PREFIXES[chainId]}`

  switch (type) {
    case 'transaction': {
      return `${prefix}/tx/${data}`
    }
    case 'token': {
      return `${prefix}/token/${data}`
    }
    case 'block': {
      return `${prefix}/block/${data}`
    }
    case 'address':
    default: {
      return `${prefix}/address/${data}`
    }
  }
}

const SCAN_NAMES:NetworkFace = {
  [ChainID.HECO]: 'HecoScan',
  [ChainID.ESC]: 'Etherscan',
  [ChainID.BSC]: 'BscScan',
  [ChainID.MAINNET]: 'LocalScan',
  [ChainID.POLYGON]: 'PolygonScan',
  [ChainID.MATCH]: 'MatchScan',

}
export function getScanName(chainId: ChainID): string {
  return SCAN_NAMES[chainId]
}

export const match: any = {
  id: 9001,
  name: 'MATCH',
  network: 'MATCH',
  iconUrl: '',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'MATCH',
    symbol: 'MATCH',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.matchscan.io'],
    },
    public:{
      http: ['https://rpc.matchscan.io'],
    }
  },
  blockExplorers: {
    default: { name: 'matchscan', url: 'https://lisbon.matchscan.io' },
    etherscan: { name: 'matchscan', url: 'https://lisbon.matchscan.io' },
  },
  testnet: false,
};
