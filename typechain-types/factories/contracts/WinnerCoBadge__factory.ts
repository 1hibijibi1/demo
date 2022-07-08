/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  WinnerCoBadge,
  WinnerCoBadgeInterface,
} from "../../contracts/WinnerCoBadge";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "TOTAL_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI_",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isSaleActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI__",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "s",
        type: "bool",
      },
    ],
    name: "setIsSalesActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "t",
        type: "uint256",
      },
    ],
    name: "setTxLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "w",
        type: "uint256",
      },
    ],
    name: "setWalletLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "txLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "walletLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260016009556002600a55600b805460ff191690553480156200002557600080fd5b506040518060400160405280601181526020017057696e6e6572436f20494420426164676560781b8152506040518060400160405280600481526020016315d0d25160e21b81525081600290816200007e91906200019c565b5060036200008d82826200019c565b505060008055506200009f33620000a5565b62000268565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200012257607f821691505b6020821081036200014357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200019757600081815260208120601f850160051c81016020861015620001725750805b601f850160051c820191505b8181101562000193578281556001016200017e565b5050505b505050565b81516001600160401b03811115620001b857620001b8620000f7565b620001d081620001c984546200010d565b8462000149565b602080601f831160018114620002085760008415620001ef5750858301515b600019600386901b1c1916600185901b17855562000193565b600085815260208120601f198616915b82811015620002395788860151825594840194600190910190840162000218565b5085821015620002585787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6118c180620002786000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806370a08231116100f9578063b88d4fde11610097578063e985e9c511610071578063e985e9c51461035b578063f1d5f51714610397578063f259a29e146103aa578063f2fde38b146103b257600080fd5b8063b88d4fde14610322578063c87b56dd14610335578063e8e6252f1461034857600080fd5b8063902d55a5116100d3578063902d55a5146102eb57806394bf804d146102f457806395d89b4114610307578063a22cb4651461030f57600080fd5b806370a08231146102bf578063715018a6146102d25780638da5cb5b146102da57600080fd5b80633c8463a111610166578063564566a811610140578063564566a8146102835780635c85974f146102905780636352211e146102a35780636caae832146102b657600080fd5b80633c8463a11461025457806342842e0e1461025d57806355f804b31461027057600080fd5b806301ffc9a7146101ae57806306fdde03146101d6578063081812fc146101eb578063095ea7b31461021657806318160ddd1461022b57806323b872dd14610241575b600080fd5b6101c16101bc3660046112bb565b6103c5565b60405190151581526020015b60405180910390f35b6101de610417565b6040516101cd9190611330565b6101fe6101f9366004611343565b6104a9565b6040516001600160a01b0390911681526020016101cd565b610229610224366004611378565b6104ed565b005b600154600054035b6040519081526020016101cd565b61022961024f3660046113a2565b61057a565b610233600a5481565b61022961026b3660046113a2565b610585565b61022961027e3660046113de565b6105a0565b600b546101c19060ff1681565b61022961029e366004611343565b6105b5565b6101fe6102b1366004611343565b6105c2565b61023360095481565b6102336102cd366004611450565b6105d4565b610229610623565b6008546001600160a01b03166101fe565b61023361271081565b61022961030236600461146b565b610637565b6101de6107d3565b61022961031d3660046114a7565b6107e2565b6102296103303660046114e7565b610877565b6101de610343366004611343565b6108c8565b6102296103563660046115c3565b61094c565b6101c16103693660046115de565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b6102296103a5366004611343565b610967565b6101de610974565b6102296103c0366004611450565b610a02565b60006001600160e01b031982166380ac58cd60e01b14806103f657506001600160e01b03198216635b5e139f60e01b145b8061041157506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606002805461042690611608565b80601f016020809104026020016040519081016040528092919081815260200182805461045290611608565b801561049f5780601f106104745761010080835404028352916020019161049f565b820191906000526020600020905b81548152906001019060200180831161048257829003601f168201915b5050505050905090565b60006104b482610a7b565b6104d1576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006104f8826105c2565b9050806001600160a01b0316836001600160a01b03160361052c5760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b0382161480159061054c575061054a8133610369565b155b1561056a576040516367d9dca160e11b815260040160405180910390fd5b610575838383610aa6565b505050565b610575838383610b02565b61057583838360405180602001604052806000815250610877565b6105a8610cf2565b600c610575828483611690565b6105bd610cf2565b600955565b60006105cd82610d4c565b5192915050565b60006001600160a01b0382166105fd576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b61062b610cf2565b6106356000610e68565b565b600b5460ff166106835760405162461bcd60e51b815260206004820152601260248201527153616c65206973206e6f742061637469766560701b60448201526064015b60405180910390fd5b6009548211156106d55760405162461bcd60e51b815260206004820152601760248201527f416d6f756e742065786365656473207478206c696d6974000000000000000000604482015260640161067a565b600a546001600160a01b0382166000908152600560205260409020548390600160401b900467ffffffffffffffff1661070e9190611766565b111561075c5760405162461bcd60e51b815260206004820152601b60248201527f416d6f756e7420657863656564732077616c6c6574206c696d69740000000000604482015260640161067a565b6127108261076d6001546000540390565b6107779190611766565b11156107c55760405162461bcd60e51b815260206004820152601a60248201527f546f74616c20737570706c792065786365656473206c696d6974000000000000604482015260640161067a565b6107cf8183610eba565b5050565b60606003805461042690611608565b336001600160a01b0383160361080b5760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610882848484610b02565b6001600160a01b0383163b151580156108a457506108a284848484610ed4565b155b156108c2576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b60606108d382610a7b565b6108f057604051630a14c4b560e41b815260040160405180910390fd5b60006108fa610fc0565b9050805160000361091a5760405180602001604052806000815250610945565b8061092484610fcf565b60405160200161093592919061177e565b6040516020818303038152906040525b9392505050565b610954610cf2565b600b805460ff1916911515919091179055565b61096f610cf2565b600a55565b600c805461098190611608565b80601f01602080910402602001604051908101604052809291908181526020018280546109ad90611608565b80156109fa5780601f106109cf576101008083540402835291602001916109fa565b820191906000526020600020905b8154815290600101906020018083116109dd57829003601f168201915b505050505081565b610a0a610cf2565b6001600160a01b038116610a6f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161067a565b610a7881610e68565b50565b6000805482108015610411575050600090815260046020526040902054600160e01b900460ff161590565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6000610b0d82610d4c565b9050836001600160a01b031681600001516001600160a01b031614610b445760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b0386161480610b625750610b628533610369565b80610b7d575033610b72846104a9565b6001600160a01b0316145b905080610b9d57604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b038416610bc457604051633a954ecd60e21b815260040160405180910390fd5b610bd060008487610aa6565b6001600160a01b038581166000908152600560209081526040808320805467ffffffffffffffff1980821667ffffffffffffffff92831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b42909216919091021783558701808452922080549193909116610ca6576000548214610ca6578054602086015167ffffffffffffffff16600160a01b026001600160e01b03199091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45b5050505050565b6008546001600160a01b031633146106355760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161067a565b604080516060810182526000808252602082018190529181019190915281600054811015610e4f57600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff16151591810182905290610e4d5780516001600160a01b031615610de3579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b820467ffffffffffffffff1693830193909352600160e01b900460ff1615159281019290925215610e48579392505050565b610de3565b505b604051636f96cda160e11b815260040160405180910390fd5b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6107cf8282604051806020016040528060008152506110d0565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290610f099033908990889088906004016117ad565b6020604051808303816000875af1925050508015610f44575060408051601f3d908101601f19168201909252610f41918101906117ea565b60015b610fa2573d808015610f72576040519150601f19603f3d011682016040523d82523d6000602084013e610f77565b606091505b508051600003610f9a576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490505b949350505050565b6060600c805461042690611608565b606081600003610ff65750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611020578061100a81611807565b91506110199050600a83611836565b9150610ffa565b60008167ffffffffffffffff81111561103b5761103b6114d1565b6040519080825280601f01601f191660200182016040528015611065576020820181803683370190505b5090505b8415610fb85761107a60018361184a565b9150611087600a86611861565b611092906030611766565b60f81b8183815181106110a7576110a7611875565b60200101906001600160f81b031916908160001a9053506110c9600a86611836565b9450611069565b61057583838360016000546001600160a01b03851661110157604051622e076360e81b815260040160405180910390fd5b836000036111225760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038516600081815260056020908152604080832080546fffffffffffffffffffffffffffffffff19811667ffffffffffffffff8083168c018116918217600160401b67ffffffffffffffff1990941690921783900481168c01811690920217909155858452600490925290912080546001600160e01b031916909217600160a01b4290921691909102179055808085018380156111cf57506001600160a01b0387163b15155b15611257575b60405182906001600160a01b038916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a46112206000888480600101955088610ed4565b61123d576040516368d2bf6b60e11b815260040160405180910390fd5b8082036111d557826000541461125257600080fd5b61129c565b5b6040516001830192906001600160a01b038916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4808203611258575b50600055610ceb565b6001600160e01b031981168114610a7857600080fd5b6000602082840312156112cd57600080fd5b8135610945816112a5565b60005b838110156112f35781810151838201526020016112db565b838111156108c25750506000910152565b6000815180845261131c8160208601602086016112d8565b601f01601f19169290920160200192915050565b6020815260006109456020830184611304565b60006020828403121561135557600080fd5b5035919050565b80356001600160a01b038116811461137357600080fd5b919050565b6000806040838503121561138b57600080fd5b6113948361135c565b946020939093013593505050565b6000806000606084860312156113b757600080fd5b6113c08461135c565b92506113ce6020850161135c565b9150604084013590509250925092565b600080602083850312156113f157600080fd5b823567ffffffffffffffff8082111561140957600080fd5b818501915085601f83011261141d57600080fd5b81358181111561142c57600080fd5b86602082850101111561143e57600080fd5b60209290920196919550909350505050565b60006020828403121561146257600080fd5b6109458261135c565b6000806040838503121561147e57600080fd5b8235915061148e6020840161135c565b90509250929050565b8035801515811461137357600080fd5b600080604083850312156114ba57600080fd5b6114c38361135c565b915061148e60208401611497565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156114fd57600080fd5b6115068561135c565b93506115146020860161135c565b925060408501359150606085013567ffffffffffffffff8082111561153857600080fd5b818701915087601f83011261154c57600080fd5b81358181111561155e5761155e6114d1565b604051601f8201601f19908116603f01168101908382118183101715611586576115866114d1565b816040528281528a602084870101111561159f57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000602082840312156115d557600080fd5b61094582611497565b600080604083850312156115f157600080fd5b6115fa8361135c565b915061148e6020840161135c565b600181811c9082168061161c57607f821691505b60208210810361163c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561057557600081815260208120601f850160051c810160208610156116695750805b601f850160051c820191505b8181101561168857828155600101611675565b505050505050565b67ffffffffffffffff8311156116a8576116a86114d1565b6116bc836116b68354611608565b83611642565b6000601f8411600181146116f057600085156116d85750838201355b600019600387901b1c1916600186901b178355610ceb565b600083815260209020601f19861690835b828110156117215786850135825560209485019460019092019101611701565b508682101561173e5760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561177957611779611750565b500190565b600083516117908184602088016112d8565b8351908301906117a48183602088016112d8565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906117e090830184611304565b9695505050505050565b6000602082840312156117fc57600080fd5b8151610945816112a5565b60006001820161181957611819611750565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261184557611845611820565b500490565b60008282101561185c5761185c611750565b500390565b60008261187057611870611820565b500690565b634e487b7160e01b600052603260045260246000fdfea26469706673582212204953112e7ffea44fccfcf09f34288d428d40d46817e823d5547e7c01b3322dd264736f6c634300080f0033";

type WinnerCoBadgeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WinnerCoBadgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WinnerCoBadge__factory extends ContractFactory {
  constructor(...args: WinnerCoBadgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WinnerCoBadge> {
    return super.deploy(overrides || {}) as Promise<WinnerCoBadge>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WinnerCoBadge {
    return super.attach(address) as WinnerCoBadge;
  }
  override connect(signer: Signer): WinnerCoBadge__factory {
    return super.connect(signer) as WinnerCoBadge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WinnerCoBadgeInterface {
    return new utils.Interface(_abi) as WinnerCoBadgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WinnerCoBadge {
    return new Contract(address, _abi, signerOrProvider) as WinnerCoBadge;
  }
}
