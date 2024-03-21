import React, {useEffect} from "react";
import {Button, Card, Flex, Form, FormProps, Input, Skeleton, Tabs} from "antd";
import {useAccount, useDisconnect, useSignMessage} from "wagmi";
import {useWeb3Modal} from "@web3modal/wagmi/react";
import {useFindWalletBalance, useWalletBalance} from "@/hooks";
import {balanceToBigNumber, formatAccount, formatBalance} from "@/common";
import {LoadingType, useLoadingContext} from "@/provider/loadingProvider";
import {useSendTransactionSimple} from "@/contract";
import {useTokenContract} from "@/hooks/useContract";
import {ERC20} from "@/abi/typechain";
import {TOX_ADDRESSSES} from "@/contract/addresses";
import styles from './index.module.scss'
const { TabPane } = Tabs;
export default function HomePage() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <img className={styles.logo} src="/images/logo.svg" alt="logo"/>
            <Card>
                <Tabs>
                    <TabPane tab={'Wallet'} key={'wallet'}>
                        <WalletInfo></WalletInfo>
                    </TabPane>
                    <TabPane tab={'Transfer'} key={'transfer'}>
                        <Transfer></Transfer>
                    </TabPane>
                    <TabPane tab={'Find Balance'} key={'find'}>
                        <Find></Find>
                    </TabPane>
                    <TabPane tab={'Sign'} key={'sign'}>
                        <Sign></Sign>
                    </TabPane>
                </Tabs>
            </Card>
        </div>
    </div>
  );
}
function WalletInfo(){
    const {address,isConnected,chain={}} = useAccount()
    const { open } = useWeb3Modal()
    const { disconnect } = useDisconnect()
    if(!isConnected){
        return (
            <div>
                <Button type={"primary"} onClick={open}>Connect Wallet</Button>
            </div>
        )
    }
    return(
        <div>
            <p>Wallet address: {formatAccount(address)}</p>
            <p>Chain id: {chain.id}</p>
            <p>Network: {chain.network}</p>
            <Button type={"primary"} onClick={disconnect}>Disconnect</Button>
        </div>
    )
}



function Transfer(){
    type FieldType = {
        address?: string;
        amount?: string;
    };
    const walletBalance = useWalletBalance()
    const sendTransaction = useSendTransactionSimple()
    const toxContract = useTokenContract<ERC20>(TOX_ADDRESSSES)
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        // console.log('Success:', values);
        if(!toxContract) return
        sendTransaction.mutate({
            title: "Transfer", func: toxContract.transfer, args: [values.address,balanceToBigNumber(values.amount)],
        })
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return(
        <div>
            <Skeleton loading={walletBalance.isLoading} active={true} paragraph={{rows:1}}>
                <p>TOX:{formatBalance(walletBalance.data?.tox)}</p>
                {/*<p>USDT:{formatBalance(walletBalance.data?.usdt)}</p>*/}
            </Skeleton>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="To address"
                    name="address"
                    rules={[{ required: true, message: 'please input address!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Amount"
                    name="amount"
                    rules={[{ required: true, message: 'please input amount!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Transfer
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
function Find(){
    type FieldType = {
        address?: string;
        amount?: string;
    };
    const findWalletBalance = useFindWalletBalance()
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        // console.log('Success:', values);
       findWalletBalance.mutate({address:values.address})
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return(
        <div>

            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'please input address!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Find
                    </Button>
                </Form.Item>
            </Form>
            <Skeleton loading={findWalletBalance.isPending} active={true} paragraph={{rows:1}}>
                <p>TOX:{formatBalance(findWalletBalance.data?.tox)}</p>
                {/*<p>USDT:{formatBalance(findWalletBalance.data?.usdt)}</p>*/}
            </Skeleton>
        </div>
    )
}
function Sign(){
    type FieldType = {
        message?: string;
    };
    const { signMessage } = useSignMessage()
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        // console.log('Success:', values);
        signMessage({ message: values.message })
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return(
        <div>

            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Message"
                    name="message"
                    rules={[{ required: true, message: 'please input message!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Sign
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
