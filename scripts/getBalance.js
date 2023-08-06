// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/artworkNFT.sol/artworkNFT.json");

const tokenAddress = "0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xEb4FDF6AEB1b56B2553693A587e22729219d295d";

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });