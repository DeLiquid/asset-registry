import { ChainMetadata, NetworkMetadata } from '../types';

export const AVALANCHEC_CHAIN_METADATA: Readonly<ChainMetadata<'avalanche-c'>> = Object.freeze({
  key: 'avalanche-c',
  name: 'Avalanche C-Chain',
  logoURI: 'https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png?1604021818',
  website: 'https://www.avax.network/',
  links: {
    twitter: 'https://twitter.com/avalancheavax',
    telegram: 'https://t.me/avalancheavax',
    reddit: 'https://www.reddit.com/r/Avax',
    github: 'https://github.com/ava-labs/avalanchego',
  },
  nativeToken: {
    key: 'avalanche-2',
    decimals: 18,
  },
});

export const AVALANCHEC_NETWORK_METADATA: Readonly<
  Readonly<Record<string, NetworkMetadata<'avalanche-c'>>>
> = Object.freeze({
  mainnet: {
    key: 'mainnet',
    chainKey: 'avalanche-c',
    name: 'Avalanche C-Chain Mainnet',
    chainId: 43114,
    isTestnet: false,
    explorer: {
      address: 'https://avascan.info/blockchain/c/address/{{id}}',
      token: 'https://avascan.info/blockchain/c/address/{{id}}/token',
      transaction: 'https://avascan.info/blockchain/c/tx/{{id}}',
    },
    networkId: 43114,
  },
  fuji: {
    key: 'fuji',
    chainKey: 'avalanche-c',
    name: 'Avalanche C-Chain Fuji Testnet',
    chainId: 43113,
    isTestnet: true,
    explorer: {
      address: 'https://testnet.avascan.info/blockchain/c/address/{{id}}',
      token: 'https://testnet.avascan.info/blockchain/c/address/{{id}}/token',
      transaction: 'https://testnet.avascan.info/blockchain/c/tx/{{id}}',
    },
    networkId: 1,
  },
});
