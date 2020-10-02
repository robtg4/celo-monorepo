/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from 'web3/eth/contract'
import { TransactionObject, BlockType } from 'web3/eth/types'
import { Callback, EventLog } from 'web3/types'
import { EventEmitter } from 'events'
import { Provider } from 'web3/providers'

export class ISortedOracles extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions)
  _address: string
  options: contractOptions
  methods: {
    numRates(arg0: string): TransactionObject<string>

    medianRate(
      arg0: string
    ): TransactionObject<{
      0: string
      1: string
    }>

    numTimestamps(arg0: string): TransactionObject<string>

    medianTimestamp(arg0: string): TransactionObject<string>

    addOracle(arg0: string, arg1: string): TransactionObject<void>

    removeOracle(arg0: string, arg1: string, arg2: number | string): TransactionObject<void>

    report(
      arg0: string,
      arg1: number | string,
      arg2: number | string,
      arg3: string,
      arg4: string
    ): TransactionObject<void>

    removeExpiredReports(arg0: string, arg1: number | string): TransactionObject<void>
  }
  deploy(options: { data: string; arguments: any[] }): TransactionObject<Contract>
  events: {
    allEvents: (
      options?: {
        filter?: object
        fromBlock?: BlockType
        topics?: (null | string)[]
      },
      cb?: Callback<EventLog>
    ) => EventEmitter
  }
  getPastEvents(
    event: string,
    options?: {
      filter?: object
      fromBlock?: BlockType
      toBlock?: BlockType
      topics?: (null | string)[]
    },
    cb?: Callback<EventLog[]>
  ): Promise<EventLog[]>
  setProvider(provider: Provider): void
  clone(): ISortedOracles
}
