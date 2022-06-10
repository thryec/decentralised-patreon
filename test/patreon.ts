import { expect } from "chai";
import { ethers } from "hardhat";

describe("Patreon", function () {
  it("Should successfully deploy the Patreon contract", async function () {
    const Patreon = await ethers.getContractFactory("Patreon");
    const patreon = await Patreon.deploy();
    await patreon.deployed();
    console.log("address: ", patreon.address);
    expect(patreon.address).to.not.equal(0);
  });

  describe("createETHStream", () => {
    it("should successfully create a stream", async () => {});
  });
});
