import { ChainMetadata, NetworkMetadata, SupportedNetwork } from '../types';

export const COSMOSHUB_CHAIN_METADATA: Readonly<ChainMetadata<'cosmoshub'>> = Object.freeze({
  key: 'cosmoshub',
  name: 'Cosmos Hub',
  logoURI: 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960',
  website: 'http://cosmos.network/',
  links: {
    github: 'https://github.com/cosmos',
    twitter: 'https://twitter.com/cosmos',
    whitepaper: 'http://cosmos.network/whitepaper',
    telegram: 'https://t.me/cosmosproject',
    reddit: 'https://www.reddit.com/r/cosmosnetwork',
  },
  nativeToken: {
    key: 'cosmos',
    decimals: 6,
    baseUnit: 'uatom',
  },
});

export const COSMOSHUB_NETWORK_METADATA: Readonly<{
  [N in SupportedNetwork['cosmoshub']]: NetworkMetadata<'cosmoshub'>;
}> = Object.freeze({
  mainnet: {
    key: 'mainnet',
    chainKey: 'cosmoshub',
    name: 'Cosmos Hub Mainnet',
    chainId: 'cosmoshub-4',
    isTestnet: false,
    explorer: {
      address: 'https://www.mintscan.io/cosmos/account/{{id}}',
      token: '', // N/A
      transaction: 'https://www.mintscan.io/cosmos/txs/{{id}}',
    },
  },
  theta: {
    key: 'theta',
    chainKey: 'cosmoshub',
    name: 'Cosmos Hub v7-Theta Public Mainnet',
    chainId: 'theta-testnet-001',
    isTestnet: true,
    explorer: {
      address: 'https://cosmoshub-testnet.mintscan.io/cosmoshub-testnet/account/{{id}}',
      token: '', // N/A
      transaction: 'https://cosmoshub-testnet.mintscan.io/cosmoshub-testnet/txs/{{id}}',
    },
  },
});
