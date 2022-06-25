import { ChainMetadata, NetworkMetadata } from '../types';

export const BSC_CHAIN_METADATA: Readonly<ChainMetadata<'binance-smart-chain'>> = Object.freeze({
  key: 'binance-smart-chain',
  name: 'Binance Smart Chain',
  logoURI: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
  website: 'https://binance.org/en/smartChain',
  links: {
    github: 'https://github.com/binance-chain/',
    twitter: 'https://twitter.com/binance_dex',
    reddit: 'https://reddit.com/r/BinanceExchange',
    whitepaper: 'https://www.binance.com/resources/ico/Binance_WhitePaper_en.pdf',
  },
  nativeToken: {
    key: 'binancecoin',
    decimals: 18,
  },
});

export const BSC_NETWORK_METADATA: Readonly<
  Readonly<Record<string, NetworkMetadata<'binance-smart-chain'>>>
> = Object.freeze({
  mainnet: {
    key: 'mainnet',
    chainKey: 'binance-smart-chain',
    name: 'Binance Smart Chain Mainnet',
    chainId: 56,
    isTestnet: false,
    explorer: {
      address: 'https://bscscan.com/address/{{id}}',
      token: 'https://bscscan.com/token/{{id}}',
      transaction: 'https://bscscan.com/tx/{{id}}',
    },
    networkId: 56,
  },
  testnet: {
    key: 'testnet',
    chainKey: 'binance-smart-chain',
    name: 'Binance Smart Chain Testnet',
    chainId: 97,
    isTestnet: true,
    explorer: {
      address: 'https://testnet.bscscan.com/address/{{id}}',
      token: 'https://testnet.bscscan.com/token/{{id}}',
      transaction: 'https://testnet.bscscan.com/tx/{{id}}',
    },
    networkId: 97,
  },
});
