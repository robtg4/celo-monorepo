/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";

export class Registry extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
  _address: string;
  options: contractOptions;
  methods: {
    registry(arg0: string | number[]): TransactionObject<string>;

    getAddressForOrDie(
      identifierHash: string | number[]
    ): TransactionObject<string>;

    getAddressFor(identifierHash: string | number[]): TransactionObject<string>;

    getAddressForStringOrDie(identifier: string): TransactionObject<string>;

    getAddressForString(identifier: string): TransactionObject<string>;

    renounceOwnership(): TransactionObject<void>;

    transferOwnership(newOwner: string): TransactionObject<void>;

    initialize(): TransactionObject<void>;

    setAddressFor(identifier: string, addr: string): TransactionObject<void>;

    initialized(): TransactionObject<boolean>;
    owner(): TransactionObject<string>;
    isOwner(): TransactionObject<boolean>;
  };
  deploy(options: {
    data: string;
    arguments: any[];
  }): TransactionObject<Contract>;
  events: {
    RegistryUpdated(
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
  clone(): Registry;
}
