INTO 帮助开发者接入 MATCH生态 示例代码

## 介绍
我们在实例代码中提供了连接钱包、查询余额、发送交易、签名等常见方法。

封装了 useSendTransactionSimple 方法用来发送合约交易。

封装了 useTokenContract 方法用获取 ERC20代币实例。

封装了 bigNumberToBalance balanceToBigNumber 代币数量的常用转换。

## 开发部署
克隆
```
git clone https://github.com/intoverse/into-dapp-demo.git
```

安装
```
yarn
```

运行项目
```
yarn dev 
```

打包项目
```
yarn build
```

## 技术栈
Umi + React + antd + Web3Modal + wagmi + ethers.js

- Umi<a href="https://umijs.org/"> 企业级前端开发框架</a>

- React <a href="https://react.dev/"> web3最受欢迎的前端库</a>

- Web3Modal <a href="https://web3modal.com/"> WalletConnect提供的钱包连接解决方案</a>

- wagmi <a href="https://wagmi.sh/">设计上类型安全、可扩展且模块化。构建高性能区块链前端。</a>

- ethers <a href="https://docs.ethers.org/v6/">ethers.js 库旨在成为一个完整且紧凑的库，用于与以太坊区块链及其生态系统进行交互。</a>

- antd <a href="https://ant.design/">助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～</a>

## 参数
公开rpc: https://rpc.matchscan.io/

TOX Token: 0x96397347Ea2beE29713Bc48749eB277D6A36A407

