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
                            "name": "TOBIN_TAX_DENOMINATOR",
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
                            "constant": true,
                            "inputs": [
                                {
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "name": "isToken",
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
                            "name": "tobinTaxCache",
                            "outputs": [
                                {
                                    "name": "numerator",
                                    "type": "uint128"
                                },
                                {
                                    "name": "timestamp",
                                    "type": "uint128"
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
                            "inputs": [
                                {
                                    "name": "",
                                    "type": "address"
                                }
                            ],
                            "name": "isSpender",
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
                            "inputs": [],
                            "name": "tobinTaxStalenessThreshold",
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
                                    "name": "value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "TobinTaxStalenessThresholdSet",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "token",
                                    "type": "address"
                                }
                            ],
                            "name": "TokenAdded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "indexed": false,
                                    "name": "index",
                                    "type": "uint256"
                                }
                            ],
                            "name": "TokenRemoved",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "spender",
                                    "type": "address"
                                }
                            ],
                            "name": "SpenderAdded",
                            "type": "event"
                        },
                        {
                            "anonymous": false,
                            "inputs": [
                                {
                                    "indexed": false,
                                    "name": "spender",
                                    "type": "address"
                                }
                            ],
                            "name": "SpenderRemoved",
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
                                    "name": "_tobinTaxStalenessThreshold",
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
                                    "name": "value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "setTobinTaxStalenessThreshold",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "token",
                                    "type": "address"
                                }
                            ],
                            "name": "addToken",
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
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "name": "index",
                                    "type": "uint256"
                                }
                            ],
                            "name": "removeToken",
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
                                    "name": "spender",
                                    "type": "address"
                                }
                            ],
                            "name": "addSpender",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "spender",
                                    "type": "address"
                                }
                            ],
                            "name": "removeSpender",
                            "outputs": [],
                            "payable": false,
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": false,
                            "inputs": [
                                {
                                    "name": "to",
                                    "type": "address"
                                },
                                {
                                    "name": "value",
                                    "type": "uint256"
                                }
                            ],
                            "name": "transferGold",
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
                            "inputs": [],
                            "name": "getOrComputeTobinTax",
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
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "constant": true,
                            "inputs": [],
                            "name": "getTokens",
                            "outputs": [
                                {
                                    "name": "",
                                    "type": "address[]"
                                }
                            ],
                            "payable": false,
                            "stateMutability": "view",
                            "type": "function"
                        }
                    ], "0x77122326af0ffE01303c9A11D35fB6528dad8eE9");
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
