/* ----- Key Registrations ----- */

export type SupportedNetwork = {
  solana: 'mainnet' | 'testnet' | 'devnet';
  ethereum: 'mainnet' | 'goerli';
  polygon: 'mainnet' | 'mumbai';
  'binance-smart-chain': 'mainnet' | 'testnet';
  'avalanche-c': 'mainnet' | 'fuji';
  cosmoshub: 'mainnet' | 'theta';
};

export type SupportedChain = keyof SupportedNetwork;

/* ----- Schema ----- */

export interface NativeTokenInfo {
  key: string;
  decimals: number;
  baseUnit?: string; // for cosmos (e.g. 'uatom'), no need for base units on other chains (e.g. 'wei', 'lamport')
  extra?: { [key: string]: any }; // for any chain/network-specific info
}

export interface FungibleTokenInfo {
  key: string;
  decimals: number;
  address: string;
  baseUnit?: string;
  extra?: { [key: string]: any };
}

export interface LinkMetadata {
  bitcointalk?: string;
  blog?: string;
  facebook?: string;
  github?: string;
  linkedin?: string;
  medium?: string;
  reddit?: string;
  slack?: string;
  telegram?: string;
  twitter?: string;
  whitepaper?: string;
  youtube?: string;
}

export interface TokenMetadata {
  key: string;
  name: string;
  symbol: string;
  logoURI: string;
  website: string;
  description: string;
  links: LinkMetadata;
  coingeckoId?: string;
}

export interface NetworkMetadata<C extends SupportedChain> {
  key: SupportedNetwork[C];
  chainKey: C;
  name: string;
  chainId: number | string;
  isTestnet: boolean;
  explorer: {
    // usage: template.replace('{{id}}', id)
    address: string; // e.g. https://solscan.io/account/{{id}}?cluster=devnet
    token: string; // e.g. https://solscan.io/token/{{id}}?cluster=devnet
    transaction: string; // e.g. https://solscan.io/tx/{{id}}?cluster=devnet
  };
  networkId?: number;
}

export interface ChainMetadata<C extends SupportedChain> {
  key: C;
  name: string;
  logoURI: string;
  website: string; // official website
  nativeToken: NativeTokenInfo;
  links: LinkMetadata; // other links
}
