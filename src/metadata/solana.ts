import { ChainMetadata, NetworkMetadata } from '../types';

export const SOLANA_CHAIN_METADATA: Readonly<ChainMetadata<'solana'>> = Object.freeze({
  key: 'solana',
  name: 'Solana',
  logoURI: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422',
  website: 'https://solana.com/',
  links: {
    twitter: 'https://twitter.com/solana',
    telegram: 'https://t.me/solana',
    reddit: 'https://www.reddit.com/r/solana',
    github: 'https://github.com/solana-labs/solana',
  },
  nativeToken: {
    key: 'solana',
    decimals: 9,
  },
});

export const SOLANA_NETWORK_METADATA: Readonly<Record<string, NetworkMetadata<'solana'>>> =
  Object.freeze({
    mainnet: {
      key: 'mainnet',
      chainKey: 'solana',
      name: 'Solana Mainnet',
      chainId: 101,
      isTestnet: false,
      explorer: {
        address: 'https://solscan.io/account/{{id}}',
        token: 'https://solscan.io/token/{{id}}',
        transaction: 'https://solscan.io/tx/{{id}}',
      },
    },
    testnet: {
      key: 'testnet',
      chainKey: 'solana',
      name: 'Solana Testnet',
      chainId: 102,
      isTestnet: true,
      explorer: {
        address: 'https://solscan.io/account/{{id}}?cluster=testnet',
        token: 'https://solscan.io/token/{{id}}?cluster=testnet',
        transaction: 'https://solscan.io/tx/{{id}}?cluster=testnet',
      },
    },
    devnet: {
      key: 'devnet',
      chainKey: 'solana',
      name: 'Solana Devnet',
      chainId: 103,
      isTestnet: true,
      explorer: {
        address: 'https://solscan.io/account/{{id}}?cluster=devnet',
        token: 'https://solscan.io/token/{{id}}?cluster=devnet',
        transaction: 'https://solscan.io/tx/{{id}}?cluster=devnet',
      },
    },
  });
