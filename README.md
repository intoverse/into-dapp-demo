INTO helps developers integrate MATCH ecosystem example code

<a href="https://github.com/intoverse/into-dapp-demo/blob/main/README_ZH.md">中文文档</a>

## Introduce
We provide common methods such as connecting wallets, checking balances, sending transactions, and signing in the instance code.

Encapsulated the useSendTransactionSimple method for sending contract transactions.

Encapsulated the useTokenContract method to obtain an ERC20 token instance.

Encapsulated commonly used conversions for the number of bigNumberToBalance balanceToBigNumber tokens.

## Development deployment
clone 
```
git clone https://github.com/intoverse/into-dapp-demo.git
```

install
```
yarn
```

run
```
yarn dev 
```

build
```
yarn build
```

## Technology stack
Umi + React + antd + Web3Modal + wagmi + ethers.js
- Umi <a href="https://umijs.org/">Enterprise level front-end development framework</a>

- React <a href="https://react.dev/">The most popular front-end library for web3</a>

- Web3Modal <a href="https://web3modal.com/">WalletConnect provides a wallet connection solution</a>

- wagmi <a href="https://wagmi.sh/">Designed to be type safe, scalable, and modular. Build a high-performance blockchain front-end.</a>

- ethers <a href="https://docs.ethers.org/v6/">The ethers.js library aims to become a complete and compact library for interacting with the Ethereum blockchain and its ecosystem.</a>

- antd <a href="https://ant.design/">Assist design developers in building more flexible and beautiful products, allowing users to work happily</a>

## Params
Public rpc: https://rpc.matchscan.io/

TOX Token: 0x96397347Ea2beE29713Bc48749eB277D6A36A407

