/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import Contract, { CustomOptions, contractOptions } from 'web3/eth/contract'
import { TransactionObject, BlockType } from 'web3/eth/types'
import { Callback, EventLog } from 'web3/types'
import { EventEmitter } from 'events'
import { Provider } from 'web3/providers'

export class GasCurrencyWhitelistProxy extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: CustomOptions)
  _address: string
  options: contractOptions
  methods: {
    _setAndInitializeImplementation(
      implementation: string,
      callbackData: (string | number[])[]
    ): TransactionObject<void>

    _setImplementation(implementation: string): TransactionObject<void>

    _transferOwnership(newOwner: string): TransactionObject<void>

    _getImplementation(): TransactionObject<string>
    _getOwner(): TransactionObject<string>
  }
  deploy(options: { data: string; arguments: any[] }): TransactionObject<Contract>
  events: {
    OwnerSet(
      options?: {
        filter?: object
        fromBlock?: BlockType
        topics?: (null | string)[]
      },
      cb?: Callback<EventLog>
    ): EventEmitter

    ImplementationSet(
      options?: {
        filter?: object
        fromBlock?: BlockType
        topics?: (null | string)[]
      },
      cb?: Callback<EventLog>
    ): EventEmitter

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
  clone(): GasCurrencyWhitelistProxy
}
