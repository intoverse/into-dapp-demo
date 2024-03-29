/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface GlobalNodeQueryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addAdmin"
      | "allAdmins"
      | "batchAddAdmin"
      | "batchGetElectors"
      | "batchGetVoter"
      | "getAllElectors"
      | "getCampaignerVotes"
      | "getVoteDetail"
      | "getVotes"
      | "globalNode"
      | "initialize"
      | "isAdmin"
      | "removeAdmin"
      | "renounceAdmin"
      | "setGlobalNode"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "AdminAdded" | "AdminRemoved" | "Initialized"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "allAdmins", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "batchAddAdmin",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchGetElectors",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchGetVoter",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllElectors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCampaignerVotes",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVoteDetail",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotes",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "globalNode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalNode",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "addAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allAdmins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchAddAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchGetElectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchGetVoter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllElectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCampaignerVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVoteDetail",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "globalNode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGlobalNode",
    data: BytesLike
  ): Result;
}

export namespace AdminAddedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AdminRemovedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GlobalNodeQuery extends BaseContract {
  connect(runner?: ContractRunner | null): GlobalNodeQuery;
  waitForDeployment(): Promise<this>;

  interface: GlobalNodeQueryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addAdmin: TypedContractMethod<[account: AddressLike], [void], "nonpayable">;

  allAdmins: TypedContractMethod<[], [string[]], "view">;

  batchAddAdmin: TypedContractMethod<
    [amounts: AddressLike[]],
    [void],
    "nonpayable"
  >;

  batchGetElectors: TypedContractMethod<
    [startId: BigNumberish, endId: BigNumberish],
    [[bigint[], string[], bigint[], bigint[], boolean[], bigint[]]],
    "view"
  >;

  batchGetVoter: TypedContractMethod<
    [eId: BigNumberish, startVoteId: BigNumberish, endVoteId: BigNumberish],
    [[bigint[], string[], bigint[], boolean[], bigint[]]],
    "view"
  >;

  getAllElectors: TypedContractMethod<
    [],
    [[bigint[], string[], bigint[], bigint[], boolean[], bigint[]]],
    "view"
  >;

  getCampaignerVotes: TypedContractMethod<
    [_campaigner: AddressLike],
    [[bigint, boolean]],
    "view"
  >;

  getVoteDetail: TypedContractMethod<
    [addr: AddressLike],
    [[bigint[], bigint[], bigint[], bigint[], bigint[], string[]]],
    "view"
  >;

  getVotes: TypedContractMethod<
    [_voter: AddressLike, _campaigner: AddressLike],
    [[bigint, boolean]],
    "view"
  >;

  globalNode: TypedContractMethod<[], [string], "view">;

  initialize: TypedContractMethod<[], [void], "nonpayable">;

  isAdmin: TypedContractMethod<[account: AddressLike], [boolean], "view">;

  removeAdmin: TypedContractMethod<
    [account: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceAdmin: TypedContractMethod<[], [void], "nonpayable">;

  setGlobalNode: TypedContractMethod<
    [_globalNodeAddr: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addAdmin"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allAdmins"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "batchAddAdmin"
  ): TypedContractMethod<[amounts: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "batchGetElectors"
  ): TypedContractMethod<
    [startId: BigNumberish, endId: BigNumberish],
    [[bigint[], string[], bigint[], bigint[], boolean[], bigint[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "batchGetVoter"
  ): TypedContractMethod<
    [eId: BigNumberish, startVoteId: BigNumberish, endVoteId: BigNumberish],
    [[bigint[], string[], bigint[], boolean[], bigint[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAllElectors"
  ): TypedContractMethod<
    [],
    [[bigint[], string[], bigint[], bigint[], boolean[], bigint[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCampaignerVotes"
  ): TypedContractMethod<
    [_campaigner: AddressLike],
    [[bigint, boolean]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVoteDetail"
  ): TypedContractMethod<
    [addr: AddressLike],
    [[bigint[], bigint[], bigint[], bigint[], bigint[], string[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVotes"
  ): TypedContractMethod<
    [_voter: AddressLike, _campaigner: AddressLike],
    [[bigint, boolean]],
    "view"
  >;
  getFunction(
    nameOrSignature: "globalNode"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isAdmin"
  ): TypedContractMethod<[account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeAdmin"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceAdmin"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setGlobalNode"
  ): TypedContractMethod<[_globalNodeAddr: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AdminAdded"
  ): TypedContractEvent<
    AdminAddedEvent.InputTuple,
    AdminAddedEvent.OutputTuple,
    AdminAddedEvent.OutputObject
  >;
  getEvent(
    key: "AdminRemoved"
  ): TypedContractEvent<
    AdminRemovedEvent.InputTuple,
    AdminRemovedEvent.OutputTuple,
    AdminRemovedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;

  filters: {
    "AdminAdded(address)": TypedContractEvent<
      AdminAddedEvent.InputTuple,
      AdminAddedEvent.OutputTuple,
      AdminAddedEvent.OutputObject
    >;
    AdminAdded: TypedContractEvent<
      AdminAddedEvent.InputTuple,
      AdminAddedEvent.OutputTuple,
      AdminAddedEvent.OutputObject
    >;

    "AdminRemoved(address)": TypedContractEvent<
      AdminRemovedEvent.InputTuple,
      AdminRemovedEvent.OutputTuple,
      AdminRemovedEvent.OutputObject
    >;
    AdminRemoved: TypedContractEvent<
      AdminRemovedEvent.InputTuple,
      AdminRemovedEvent.OutputTuple,
      AdminRemovedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
  };
}
