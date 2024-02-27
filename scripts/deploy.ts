import { ethers } from "hardhat";

async function main() {
  // 0x52Ce621C521a9882B6CBb3839Fa88030264F7741

  const meta = await ethers.deployContract("Meta");

  await meta.waitForDeployment();

  console.log(
    `Meta ${meta.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});