/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";

export class LockedGold extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
  _address: string;
  options: contractOptions;
  methods: {
    getAccountTotalLockedGold(account: string): TransactionObject<string>;

    getAccountNonvotingLockedGold(account: string): TransactionObject<string>;

    getPendingWithdrawals(
      account: string
    ): TransactionObject<{
      0: (string)[];
      1: (string)[];
    }>;

    renounceOwnership(): TransactionObject<void>;

    setRegistry(registryAddress: string): TransactionObject<void>;

    transferOwnership(newOwner: string): TransactionObject<void>;

    initialize(
      registryAddress: string,
      _unlockingPeriod: number | string
    ): TransactionObject<void>;

    setUnlockingPeriod(value: number | string): TransactionObject<void>;

    lock(): TransactionObject<void>;

    incrementNonvotingAccountBalance(
      account: string,
      value: number | string
    ): TransactionObject<void>;

    decrementNonvotingAccountBalance(
      account: string,
      value: number | string
    ): TransactionObject<void>;

    unlock(value: number | string): TransactionObject<void>;

    relock(
      index: number | string,
      value: number | string
    ): TransactionObject<void>;

    withdraw(index: number | string): TransactionObject<void>;

    initialized(): TransactionObject<boolean>;
    unlockingPeriod(): TransactionObject<string>;
    registry(): TransactionObject<string>;
    owner(): TransactionObject<string>;
    isOwner(): TransactionObject<boolean>;
    totalNonvoting(): TransactionObject<string>;
    getTotalLockedGold(): TransactionObject<string>;
    getNonvotingLockedGold(): TransactionObject<string>;
  };
  deploy(options: {
    data: string;
    arguments: any[];
  }): TransactionObject<Contract>;
  events: {
    UnlockingPeriodSet(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    GoldLocked(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    GoldUnlocked(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    GoldWithdrawn(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    RegistrySet(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    OwnershipTransferred(
      options?: {
        filter?: object;
        fromBlock?: BlockType;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

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
  clone(): LockedGold;
}
