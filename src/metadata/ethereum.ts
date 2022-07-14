import { ChainMetadata, NetworkMetadata } from '../types';

export const ETHEREUM_CHAIN_METADATA: Readonly<ChainMetadata<'ethereum'>> = Object.freeze({
  key: 'ethereum',
  name: 'Ethereum',
  logoURI: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
  website: 'https://ethereum.org/',
  links: {
    twitter: 'https://twitter.com/ethereum',
    facebook: 'https://www.facebook.com/ethereumproject',
    bitcointalk: 'https://bitcointalk.org/index.php?topic=428589',
    reddit: 'https://www.reddit.com/r/ethereum',
    github: 'https://github.com/ethereum',
  },
  nativeToken: {
    key: 'ethereum',
    decimals: 18,
  },
});

export const ETHEREUM_NETWORK_METADATA: Readonly<Record<string, NetworkMetadata<'ethereum'>>> =
  Object.freeze({
    mainnet: {
      key: 'mainnet',
      chainKey: 'ethereum',
      symbol: 'Ethereum',
      name: 'Ethereum Mainnet',
      chainId: 1,
      isTestnet: false,
      explorer: {
        address: 'https://etherscan.io/address/{{id}}',
        token: 'https://etherscan.io/token/{{id}}',
        transaction: 'https://etherscan.io/tx/{{id}}',
      },
      networkId: 1,
    },
    goerli: {
      key: 'goerli',
      chainKey: 'ethereum',
      symbol: 'Ethereum Testnet',
      name: 'Ethereum Goerli Testnet',
      chainId: 5,
      isTestnet: true,
      explorer: {
        address: 'https://goerli.etherscan.io/address/{{id}}',
        token: 'https://goerli.etherscan.io/token/{{id}}',
        transaction: 'https://goerli.etherscan.io/tx/{{id}}',
      },
      networkId: 5,
    },
  });
