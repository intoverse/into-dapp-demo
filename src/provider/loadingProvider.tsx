import React, {createContext, useContext, useState} from "react";
import styles from './loading.scss'
import {useAccount} from "wagmi";
import {formatAccount} from "@/common";
import {getScanLink, getScanName} from "@/contract/chains";
export enum LoadingType {
  confirm=0,
  pending=1,
  error=2,
  success=3
}

const LoadingConfig:any = {
  [LoadingType.confirm]:{
      icon:'/images/loading_comfirm.png',
    color:"#9165F6",
    title:"Waiting for Confirmation",
  },
  [LoadingType.pending]:{
      icon:'/images/loading_pendding.png',
    color:"#62DCF7",
    title:"Waiting for Transaction",
  },
  [LoadingType.error]:{
      icon:'/images/loading_fail.png',
    color:"#CF3E34",
    title:"Transaction Error"
  },
  [LoadingType.success]:{
      icon:'/images/loading_success.png',
    color:"#7FF89F",
    title:"Transaction Success",
  }
}
export const LoadingContext = createContext({
  show: (type:LoadingType,message:string,hash?:string) => {

  },
  hide:()=>{}
})
export function useLoadingContext() {
  const loadingContext = useContext(LoadingContext)
  return loadingContext
}
export default function LoadingProvider({children}:any) {

  const [visible,setVisible] = useState(false)
  const [type,setType] = useState(LoadingType.confirm)
  const [message,setMessage] = useState("")
  const [hash,setHash] = useState("")
  return(
      <LoadingContext.Provider
          value={{
              show:(type, message,hash) => {
                  setType(type)
                  setMessage(message)
                  setHash(hash||"")
                  setVisible(true)
              },
              hide:()=>{
                  setVisible(false)
              }
          }}
      >
          {children}
          <Loading
              visible={visible}
              type={type}
              message={message}
              hash={hash}
              onClose={()=>setVisible(false)}
          ></Loading>
      </LoadingContext.Provider>
  )
}

function Loading({visible,type,message,hash,onClose}:any) {
  const {chain={id:1}} = useAccount()
  if(!visible){
      return null;
  }
  return(
    <div className={styles.modal_view}>
      <div className={styles.loading_content}>
        <div className={styles.row_between}>
          <div className={styles.row}>
            {(type===LoadingType.confirm || type===LoadingType.pending) && <img src={LoadingConfig[type].icon} className={styles.icon_status}></img>}
            {(type===LoadingType.success || type===LoadingType.error) && <img src={LoadingConfig[type].icon} className={styles.icon_status}></img>}
            <div className={styles.loading_title}
              style={{color:LoadingConfig[type].color}}
            >
              {LoadingConfig[type].title}
            </div>
          </div>
          <img onClick={onClose} src={'/images/icon_close.png'} style={{cursor:"pointer"}}/>
        </div>
        <div className={styles.desc_container}>
          {(type===LoadingType.confirm || type===LoadingType.error) && <div className={styles.loading_desc}>
            {message}
          </div>}
          {(type===LoadingType.pending || type===LoadingType.success) && <div className={styles.loading_desc}>
            Transaction Hash: {formatAccount(hash || message)}
          </div>}
          {(type!==LoadingType.confirm) && <div className={styles.loading_hash_view}
            onClick={()=>{
              window.open(getScanLink(chain.id,hash || message,"transaction"))
            }}
          >
            ViewOn {getScanName(chain.id)}
          </div>}
          {type===LoadingType.confirm && <div className={styles.loading_tips}>
            Confirm this transaction in your wallet
          </div>}
        </div>
      </div>
    </div>
  )
}
