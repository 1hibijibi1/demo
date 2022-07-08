import { task, HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import { WinnerCoBadge } from './typechain-types/contracts/WinnerCoBadge';
import dotenv from 'dotenv';
import "@nomiclabs/hardhat-etherscan";

dotenv.config();

task('setBaseURI', 'Sets the BaseURI for the collection')
  .setAction(async (taskArgs: any, env) => {
    const address = taskArgs.address;
    const uri = taskArgs.uri;
    console.log(`Setting BaseURI to ${uri} at contract address ${address}`);

    const signer = (await env.ethers.getSigners())[0];
    const deployedContract = (await (
      await env.ethers.getContractAt('WinnerCoBadge', address, signer)
    ).deployed()) as WinnerCoBadge;

    const tx = await deployedContract.setBaseURI(uri);

    console.log(`Transaction hash: ${tx.hash}`);
  })
  .addParam('address', 'The contract address')
  .addParam('uri', 'The new Base URI');

module.exports = {
  networks: {
    mainnet: { ... },
    rinkeby: { ... }
  },
  etherscan: {
    apiKey: {
        mainnet: "YOUR_ETHERSCAN_API_KEY",
        rinkeby: process.env.ETHERSCANKEY ?? '',
    }
  }
};

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.15',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    rinkeby: {
      chainId: 4,
      accounts: {
        mnemonic: process.env.RINKEBY_MNEMONIC ?? ''
      },
      url: process.env.RINKEBY_URL ?? ''
    },
    mainnet: {
      chainId: 1,
      gasPrice: 100000000000, // 100 gwei
      gasMultiplier: 1.5,
      accounts: {
        mnemonic: process.env.MAINNET_MNEMONIC ?? ''
      },
      url: process.env.MAINNET_URL ?? ''
    }
  }
};

export default config;
