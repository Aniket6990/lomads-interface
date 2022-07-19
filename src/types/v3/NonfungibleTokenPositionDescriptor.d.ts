/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface NonfungibleTokenPositionDescriptorInterface
  extends ethers.utils.Interface {
  functions: {
    "WETH9()": FunctionFragment;
    "flipRatio(address,address,uint256)": FunctionFragment;
    "nativeCurrencyLabel()": FunctionFragment;
    "nativeCurrencyLabelBytes()": FunctionFragment;
    "tokenRatioPriority(address,uint256)": FunctionFragment;
    "tokenURI(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "flipRatio",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nativeCurrencyLabel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nativeCurrencyLabelBytes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenRatioPriority",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flipRatio", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nativeCurrencyLabel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nativeCurrencyLabelBytes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenRatioPriority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;

  events: {};
}

export class NonfungibleTokenPositionDescriptor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: NonfungibleTokenPositionDescriptorInterface;

  functions: {
    WETH9(overrides?: CallOverrides): Promise<[string]>;

    flipRatio(
      token0: string,
      token1: string,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    nativeCurrencyLabel(overrides?: CallOverrides): Promise<[string]>;

    nativeCurrencyLabelBytes(overrides?: CallOverrides): Promise<[string]>;

    tokenRatioPriority(
      token: string,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenURI(
      positionManager: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  WETH9(overrides?: CallOverrides): Promise<string>;

  flipRatio(
    token0: string,
    token1: string,
    chainId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  nativeCurrencyLabel(overrides?: CallOverrides): Promise<string>;

  nativeCurrencyLabelBytes(overrides?: CallOverrides): Promise<string>;

  tokenRatioPriority(
    token: string,
    chainId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenURI(
    positionManager: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    WETH9(overrides?: CallOverrides): Promise<string>;

    flipRatio(
      token0: string,
      token1: string,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    nativeCurrencyLabel(overrides?: CallOverrides): Promise<string>;

    nativeCurrencyLabelBytes(overrides?: CallOverrides): Promise<string>;

    tokenRatioPriority(
      token: string,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(
      positionManager: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    WETH9(overrides?: CallOverrides): Promise<BigNumber>;

    flipRatio(
      token0: string,
      token1: string,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nativeCurrencyLabel(overrides?: CallOverrides): Promise<BigNumber>;

    nativeCurrencyLabelBytes(overrides?: CallOverrides): Promise<BigNumber>;

    tokenRatioPriority(
      token: string,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(
      positionManager: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    flipRatio(
      token0: string,
      token1: string,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nativeCurrencyLabel(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nativeCurrencyLabelBytes(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenRatioPriority(
      token: string,
      chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenURI(
      positionManager: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
