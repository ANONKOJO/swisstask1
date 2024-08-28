require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xa397b7161eb1b44a714c1ffabc24aa1e1be709da68daccfcc76d7e55741dcf03"], //Your private key starting with "0x"
    },
  },
};
