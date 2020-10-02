"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function getInstance(web3, account) {
    if (account === void 0) { account = null; }
    return __awaiter(this, void 0, void 0, function () {
        var contract, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    contract = new web3.eth.Contract([
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "stageDurations",
                            "outputs": [
                                {
                                    "name": "approval",
                                    "type": "uint256"
                                },
                                {
                                    "name": "referendum",
                                    "type": "uint256"
                                },
                                {
                                    "name": "execution",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "index",
                                    "type": "uint256"
                                }
                            ],
                            "name": "validatorAddressFromCurrentSet",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "concurrentProposals",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "approver",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "initialized",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "sender",
                                    "type": "address"
                                },
                                {
                                    "name": "blsKey",
                                    "type": "bytes"
                                },
                                {
                                    "name": "blsPop",
                                    "type": "bytes"
                                }
                            ],
                            "name": "checkProofOfPossession",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "minDeposit",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "hotfixes",
                            "outputs": [
                                {
                                    "name": "executed",
                                    "type": "bool"
                                },
                                {
                                    "name": "approved",
                                    "type": "bool"
                                },
                                {
                                    "name": "preparedEpoch",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "name": "refundedDeposits",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [],
                            "name": "renounceOwnership",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "dequeueFrequency",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "registry",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "numberValidatorsInCurrentSet",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "owner",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "queueExpiry",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "isOwner",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "getEpochNumber",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "registryAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "setRegistry",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "name": "emptyIndices",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "name": "dequeued",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "lastDequeue",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "proposalCount",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "getEpochSize",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "aNumerator",
                                    "type": "uint256"
                                },
                                {
                                    "name": "aDenominator",
                                    "type": "uint256"
                                },
                                {
                                    "name": "bNumerator",
                                    "type": "uint256"
                                },
                                {
                                    "name": "bDenominator",
                                    "type": "uint256"
                                },
                                {
                                    "name": "exponent",
                                    "type": "uint256"
                                },
                                {
                                    "name": "_decimals",
                                    "type": "uint256"
                                }
                            ],
                            "name": "fractionMulExp",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "transferOwnership",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "payable": true,
                            "stateMutability": "payable",
                            "type": "fallback"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "approver",
                                    "type": "address"
                                }
                            ],
                            "name": "ApproverSet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "concurrentProposals",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ConcurrentProposalsSet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "minDeposit",
                                    "type": "uint256"
                                }
                            ],
                            "name": "MinDepositSet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "queueExpiry",
                                    "type": "uint256"
                                }
                            ],
                            "name": "QueueExpirySet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "dequeueFrequency",
                                    "type": "uint256"
                                }
                            ],
                            "name": "DequeueFrequencySet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "approvalStageDuration",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ApprovalStageDurationSet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "referendumStageDuration",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ReferendumStageDurationSet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "executionStageDuration",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ExecutionStageDurationSet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "name": "functionId",
                                    "type": "bytes4"
                                },
                                {
                                    "indexed": false,
                                    "name": "threshold",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ConstitutionSet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "proposalId",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": true,
                                    "name": "proposer",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "name": "transactionCount",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "name": "deposit",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "name": "timestamp",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ProposalQueued",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "proposalId",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": true,
                                    "name": "account",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "name": "upvotes",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ProposalUpvoted",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "proposalId",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": true,
                                    "name": "account",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "name": "revokedUpvotes",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ProposalUpvoteRevoked",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "proposalId",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "name": "timestamp",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ProposalDequeued",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "proposalId",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ProposalApproved",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "proposalId",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": true,
                                    "name": "account",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "name": "value",
                                    "type": "uint256"
                                },
                                {
                                    "indexed": false,
                                    "name": "weight",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ProposalVoted",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "proposalId",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ProposalExecuted",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "proposalId",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ProposalExpired",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "participationBaseline",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ParticipationBaselineUpdated",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "participationFloor",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ParticipationFloorSet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "baselineUpdateFactor",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ParticipationBaselineUpdateFactorSet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "baselineQuorumFactor",
                                    "type": "uint256"
                                }
                            ],
                            "name": "ParticipationBaselineQuorumFactorSet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "hash",
                                    "type": "bytes32"
                                },
                                {
                                    "indexed": false,
                                    "name": "whitelister",
                                    "type": "address"
                                }
                            ],
                            "name": "HotfixWhitelisted",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "hash",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "HotfixApproved",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "hash",
                                    "type": "bytes32"
                                },
                                {
                                    "indexed": true,
                                    "name": "epoch",
                                    "type": "uint256"
                                }
                            ],
                            "name": "HotfixPrepared",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "hash",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "HotfixExecuted",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "registryAddress",
                                    "type": "address"
                                }
                            ],
                            "name": "RegistrySet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": true,
                                    "name": "previousOwner",
                                    "type": "address"
                                },
                                {
                                    "indexed": true,
                                    "name": "newOwner",
                                    "type": "address"
                                }
                            ],
                            "name": "OwnershipTransferred",
                            "type": "event"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "registryAddress",
                                    "type": "address"
                                },
                                {
                                    "name": "_approver",
                                    "type": "address"
                                },
                                {
                                    "name": "_concurrentProposals",
                                    "type": "uint256"
                                },
                                {
                                    "name": "_minDeposit",
                                    "type": "uint256"
                                },
                                {
                                    "name": "_queueExpiry",
                                    "type": "uint256"
                                },
                                {
                                    "name": "_dequeueFrequency",
                                    "type": "uint256"
                                },
                                {
                                    "name": "approvalStageDuration",
                                    "type": "uint256"
                                },
                                {
                                    "name": "referendumStageDuration",
                                    "type": "uint256"
                                },
                                {
                                    "name": "executionStageDuration",
                                    "type": "uint256"
                                },
                                {
                                    "name": "participationBaseline",
                                    "type": "uint256"
                                },
                                {
                                    "name": "participationFloor",
                                    "type": "uint256"
                                },
                                {
                                    "name": "baselineUpdateFactor",
                                    "type": "uint256"
                                },
                                {
                                    "name": "baselineQuorumFactor",
                                    "type": "uint256"
                                }
                            ],
                            "name": "initialize",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "_approver",
                                    "type": "address"
                                }
                            ],
                            "name": "setApprover",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "_concurrentProposals",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setConcurrentProposals",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "_minDeposit",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setMinDeposit",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "_queueExpiry",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setQueueExpiry",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "_dequeueFrequency",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setDequeueFrequency",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "approvalStageDuration",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setApprovalStageDuration",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "referendumStageDuration",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setReferendumStageDuration",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "executionStageDuration",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setExecutionStageDuration",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "participationBaseline",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setParticipationBaseline",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "participationFloor",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setParticipationFloor",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "baselineUpdateFactor",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setBaselineUpdateFactor",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "baselineQuorumFactor",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setBaselineQuorumFactor",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "name": "functionId",
                                    "type": "bytes4"
                                },
                                {
                                    "name": "threshold",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setConstitution",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "values",
                                    "type": "uint256[]"
                                },
                                {
                                    "name": "destinations",
                                    "type": "address[]"
                                },
                                {
                                    "name": "data",
                                    "type": "bytes"
                                },
                                {
                                    "name": "dataLengths",
                                    "type": "uint256[]"
                                }
                            ],
                            "name": "propose",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": true,
                            "stateMutability": "payable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "proposalId",
                                    "type": "uint256"
                                },
                                {
                                    "name": "lesser",
                                    "type": "uint256"
                                },
                                {
                                    "name": "greater",
                                    "type": "uint256"
                                }
                            ],
                            "name": "upvote",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "lesser",
                                    "type": "uint256"
                                },
                                {
                                    "name": "greater",
                                    "type": "uint256"
                                }
                            ],
                            "name": "revokeUpvote",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "proposalId",
                                    "type": "uint256"
                                },
                                {
                                    "name": "index",
                                    "type": "uint256"
                                }
                            ],
                            "name": "approve",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "proposalId",
                                    "type": "uint256"
                                },
                                {
                                    "name": "index",
                                    "type": "uint256"
                                },
                                {
                                    "name": "value",
                                    "type": "uint8"
                                }
                            ],
                            "name": "vote",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "proposalId",
                                    "type": "uint256"
                                },
                                {
                                    "name": "index",
                                    "type": "uint256"
                                }
                            ],
                            "name": "execute",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "hash",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "approveHotfix",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "hash",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "whitelistHotfix",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "hash",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "prepareHotfix",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "values",
                                    "type": "uint256[]"
                                },
                                {
                                    "name": "destinations",
                                    "type": "address[]"
                                },
                                {
                                    "name": "data",
                                    "type": "bytes"
                                },
                                {
                                    "name": "dataLengths",
                                    "type": "uint256[]"
                                }
                            ],
                            "name": "executeHotfix",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [],
                            "name": "withdraw",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "account",
                                    "type": "address"
                                }
                            ],
                            "name": "isVoting",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "getApprovalStageDuration",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "getReferendumStageDuration",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "getExecutionStageDuration",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "getParticipationParameters",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "proposalId",
                                    "type": "uint256"
                                }
                            ],
                            "name": "proposalExists",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "proposalId",
                                    "type": "uint256"
                                }
                            ],
                            "name": "getProposal",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "address"
                                },
                                {
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "proposalId",
                                    "type": "uint256"
                                },
                                {
                                    "name": "index",
                                    "type": "uint256"
                                }
                            ],
                            "name": "getProposalTransaction",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "name": "",
                                    "type": "address"
                                },
                                {
                                    "name": "",
                                    "type": "bytes"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "proposalId",
                                    "type": "uint256"
                                }
                            ],
                            "name": "isApproved",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "proposalId",
                                    "type": "uint256"
                                }
                            ],
                            "name": "getVoteTotals",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "account",
                                    "type": "address"
                                },
                                {
                                    "name": "index",
                                    "type": "uint256"
                                }
                            ],
                            "name": "getVoteRecord",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "getQueueLength",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "proposalId",
                                    "type": "uint256"
                                }
                            ],
                            "name": "getUpvotes",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "getQueue",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256[]"
                                },
                                {
                                    "name": "",
                                    "type": "uint256[]"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "getDequeue",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256[]"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "account",
                                    "type": "address"
                                }
                            ],
                            "name": "getUpvoteRecord",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                },
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "account",
                                    "type": "address"
                                }
                            ],
                            "name": "getMostRecentReferendumProposal",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "hash",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "isHotfixPassing",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "byzantineQuorumValidatorsInCurrentSet",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "hash",
                                    "type": "bytes32"
                                }
                            ],
                            "name": "getHotfixRecord",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                },
                                {
                                    "name": "",
                                    "type": "bool"
                                },
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [],
                            "name": "dequeueProposalsIfReady",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "proposalId",
                                    "type": "uint256"
                                }
                            ],
                            "name": "isQueued",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "proposalId",
                                    "type": "uint256"
                                }
                            ],
                            "name": "isProposalPassing",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "bool"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "destination",
                                    "type": "address"
                                },
                                {
                                    "name": "functionId",
                                    "type": "bytes4"
                                }
                            ],
                            "name": "getConstitution",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        }
                    ], "0x97aAD44fFe242eD3Fe4015b962308E5c0Fbf9Ef1");
                    _a = contract.options;
                    _b = account;
                    if (_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, web3.eth.getAccounts()];
                case 1:
                    _b = (_c.sent())[0];
                    _c.label = 2;
                case 2:
                    _a.from = _b;
                    return [2 /*return*/, contract];
            }
        });
    });
}
exports.default = getInstance;
