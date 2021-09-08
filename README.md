# Tenderly

## Setup
You can install the Tenderly CLI via the [Homebrew package manager](https://brew.sh/): 
```bash
brew tap tenderly/tenderly
brew install tenderly
```
You can check the current version of the CLI by running:
```bash
tenderly version
```
To upgrade it via Homebrew:
```bash
brew upgrade tenderly
```
To install hardhat-tenderly and others
```bash
npm install --save-dev @tenderly/hardhat-tenderly
npm install dotenv
npm install --save-dev @nomiclabs/hardhat-etherscan
```


## Usage
The `login` command is used to authenticate the Tenderly CLI with your [Tenderly Dashboard](https://dashboard.tenderly.co).
```bash
tenderly login
```
Deploy smartcontract to network. It will automatically upload contract to tenderly dashboard
```bash
npx hardhat run ./script/sample-script.js --network {network}
```
Send transaction to smartcontract
```bash
npx hardhat setGreeting --address {contract address} --network {network}
```

### Manual
How to upload contract to tenderly dashboard
- Publicly verifies the contracts for all tenderly users.
```bash
npx hardhat tenderly:verify {Contract}={Address} --network {network}
```
- Privately adds the contracts to the project defined in hardhat.config.js.
```bash
npx hardhat tenderly:push {Contract}={Address} --network {network}
```

## Optional
These are useful command.
| Command | Explanation |
| --- | --- |
| tenderly login | - connect tenderly by email or api-key |
| tenderly whoami | - get user information |
| tenderly export init | - init tenderly.yaml |
| tenderly export {Txn Hash} | - upload local transaction info to dashboard |
| tenderly logout | - disconnect tenderly |

## Reference
* http://blog.tenderly.co/level-up-your-smart-contract-productivity-using-hardhat-and-tenderly/
* https://hardhat.org/plugins/tenderly-hardhat-tenderly.html
* https://github.com/Tenderly/tenderly-cli?utm_source=blog&utm_medium=post&utm_campaign=10_ways&utm_content=cli_setup#installation