import { ethers } from "hardhat";

const main = async () => {
  const Patreon = await ethers.getContractFactory("Patreon");
  const patreon = await Patreon.deploy();
  await patreon.deployed();

  console.log("Patreon deployed to:", patreon.address);
};

try {
  main();
} catch (err) {
  console.error(err);
  process.exitCode = 1;
}
