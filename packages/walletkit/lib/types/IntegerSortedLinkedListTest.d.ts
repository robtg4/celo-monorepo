/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from "web3/eth/contract";
import { TransactionObject, BlockType } from "web3/eth/types";
import { Callback, EventLog } from "web3/types";
import { EventEmitter } from "events";
import { Provider } from "web3/providers";

export class IntegerSortedLinkedListTest extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions);
  _address: string;
  options: contractOptions;
  methods: {
    contains(key: number | string): TransactionObject<boolean>;

    getElements(): TransactionObject<{
      0: (string)[];
      1: (string)[];
    }>;

    insert(
      key: number | string,
      value: number | string,
      lesserKey: number | string,
      greaterKey: number | string
    ): TransactionObject<void>;

    update(
      key: number | string,
      value: number | string,
      lesserKey: number | string,
      greaterKey: number | string
    ): TransactionObject<void>;

    remove(key: number | string): TransactionObject<void>;

    popN(n: number | string): TransactionObject<(string)[]>;

    getNumElements(): TransactionObject<string>;
    head(): TransactionObject<string>;
    tail(): TransactionObject<string>;
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
  clone(): IntegerSortedLinkedListTest;
}
