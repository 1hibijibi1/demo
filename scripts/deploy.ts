import { ethers } from 'hardhat';

async function main() {
  const WinnerCoBadge = await ethers.getContractFactory('WinnerCoBadge');
  const wcid = await WinnerCoBadge.deploy();

  await wcid.deployed();

  console.log('WinnerCoBadge Deployed to ', wcid.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
