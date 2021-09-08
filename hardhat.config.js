require("@nomiclabs/hardhat-waffle");
require("@tenderly/hardhat-tenderly");
require("dotenv").config({ path: ".env" });

require("./tasks/accounts");
require("./tasks/setGreeting");

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/your-api-key"
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || "https://matic-mumbai.chainstacklabs.com"
const MNEMONIC = process.env.MNEMONIC || "your mnemonic"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "your private key"

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
  solidity: "0.8.4",
  tenderly: {
    project: "hello-tenderly",
    username: "trust"
  }
};
