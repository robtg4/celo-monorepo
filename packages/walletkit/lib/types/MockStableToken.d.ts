/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";

export class MockStableToken extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
  _address: string;
  options: contractOptions;
  methods: {
    balanceOf(arg0: string): TransactionObject<string>;

    burn(arg0: number | string): TransactionObject<boolean>;

    resetLastRebase(): TransactionObject<void>;

    transfer(arg0: string, arg1: number | string): TransactionObject<boolean>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: number | string
    ): TransactionObject<boolean>;

    setNeedsRebase(): TransactionObject<void>;

    setTotalSupply(value: number | string): TransactionObject<void>;

    setTargetTotalSupply(value: number | string): TransactionObject<void>;

    mint(to: string, value: number | string): TransactionObject<boolean>;

    _needsRebase(): TransactionObject<boolean>;
    decimals(): TransactionObject<string>;
    _totalSupply(): TransactionObject<string>;
    _targetTotalSupply(): TransactionObject<string>;
    needsRebase(): TransactionObject<boolean>;
    totalSupply(): TransactionObject<string>;
    targetTotalSupply(): TransactionObject<string>;
  };
  deploy(options: {
    data: string;
    arguments: any[];
  }): TransactionObject<Contract>;
  events: {
    allEvents: (
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
  getPastEvents(
    event: string,
    options?: {
      filter?: object;
      fromBlock?: BlockType;
      toBlock?: BlockType;
      topics?: (null | string)[];
    },
    cb?: Callback<EventLog[]>
  ): Promise<EventLog[]>;
  setProvider(provider: Provider): void;
  clone(): MockStableToken;
}
