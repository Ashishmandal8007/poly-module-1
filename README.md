# poly-module-1
This is the first project in Polygon-Advance, I was suggested  to deploy an NFT collection on the Ethereum blockchain, Map the collection to Polygon, and Transfer assets over via the Polygon Bridge.

### Executing program
Download the codes by downloading the entire repository which will give you access to other contents of the repository. Navigate to the Poly_Proof project directory,  run:

```shell

 npm install

```

After installing the dependencies, run the test file by using the following command:

```shell
npx hardhat test
```

### Step to follow
1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC20 contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance

## NOTE:
After deploying the address will generate. So, copy that address  stored in metadata folder and also in `mint.js`(stored in scripts folder)

## Authors
Metacrafter Chris Ashsih Mandal

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
