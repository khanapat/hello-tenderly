require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@tenderly/hardhat-tenderly");
require("dotenv").config({ path: ".env" });

require("./tasks/accounts");
require("./tasks/setGreeting");

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/your-api-key";
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || "https://matic-mumbai.chainstacklabs.com";
const MNEMONIC = process.env.MNEMONIC || "your mnemonic";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "your private key";
const ETHERSCAN_APIKEY = process.env.ETHERSCAN_APIKEY || "your etherscan api-key";
const POLYGONSCAN_APIKEY = process.env.POLYGONSCAN_APIKEY || "your ploygonscan api-key";

module.exports = {
  networks: {
    localhost: {
      url: "http://localhost:8545"
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY]
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: {
        mnemonic: MNEMONIC
      }
    }
  },
  etherscan: {
    apiKey: POLYGONSCAN_APIKEY
  },
  solidity: "0.8.4",
  tenderly: {
    project: "hello-tenderly",
    username: "trust"
  }
};
