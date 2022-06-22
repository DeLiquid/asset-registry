import { ChainMetadata, NetworkMetadata, SupportedNetwork } from '../types';

export const POLYGON_CHAIN_METADATA: Readonly<ChainMetadata<'polygon'>> = Object.freeze({
  key: 'polygon',
  name: 'Polygon',
  logoURI: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912',
  website: 'https://polygon.technology/',
  links: {
    github: 'https://github.com/celo-org/celo-blockchain',
    twitter: 'https://twitter.com/0xPolygon',
    reddit: 'https://reddit.com/r/maticnetwork/',
    whitepaper: 'https://github.com/maticnetwork/whitepaper',
  },
  nativeToken: {
    key: 'matic-network',
    decimals: 18,
  },
});

export const POLYGON_NETWORK_METADATA: Readonly<{
  [N in SupportedNetwork['polygon']]: NetworkMetadata<'polygon'>;
}> = Object.freeze({
  mainnet: {
    key: 'mainnet',
    chainKey: 'polygon',
    name: 'Polygon Mainnet',
    chainId: 137,
    isTestnet: false,
    explorer: {
      address: 'https://polygonscan.com/address/{{id}}',
      token: 'https://polygonscan.com/token/{{id}}',
      transaction: 'https://polygonscan.com/tx/{{id}}',
    },
    networkId: 137,
  },
  mumbai: {
    key: 'mumbai',
    chainKey: 'polygon',
    name: 'Polygon Mumbai Testnet',
    chainId: 80001,
    isTestnet: true,
    explorer: {
      address: 'https://mumbai.polygonscan.com/address/{{id}}',
      token: 'https://mumbai.polygonscan.com/token/{{id}}',
      transaction: 'https://mumbai.polygonscan.com/tx/{{id}}',
    },
    networkId: 80001,
  },
});
