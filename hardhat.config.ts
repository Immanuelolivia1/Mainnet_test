import "@nomiclabs/hardhat-ethers";
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config({ path: ".env" });

const INFURA_MAINNET_API_KEY_URL = process.env.INFURA_MAINNET_API_KEY_URL;
const ALCHEMY_RINKEBY_API_KEY_URL = process.env.ALCHEMY_RINKEBY_API_KEY_URL;
const INFURA_ROPSTEN_API_KEY_URL = process.env.INFURA_ROPSTEN_API_KEY_URL;
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;
const ALCHEMY_MAINNET_API_KEY_URL = process.env.ALCHEMY_MAINNET_API_KEY_URL;

const API_TOKEN = process.env.API_TOKEN;

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/j0gv362VYq3-gsjLuV8ETdq_-yKLZXYm",
      }
    },
    rinkeby: {
      url: ALCHEMY_RINKEBY_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    ropsten: {
      url: INFURA_ROPSTEN_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
  },
};







