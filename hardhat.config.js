require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/vKf8iLb9uvdyWR9Wg9r01w_GUlVKpa-A',
      accounts: ['ed992e15501b7c7efed595b68b16c3d4ee348b1cd8195bb897d375134b77f550'],
    },
  },
};