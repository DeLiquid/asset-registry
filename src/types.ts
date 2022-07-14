/* ----- Key Registrations ----- */

export const SupportedChains = [
  'solana',
  'ethereum',
  'polygon',
  'binance-smart-chain',
  'avalanche-c',
  'cosmoshub',
] as const;

export type SupportedChain = typeof SupportedChains[number];

export const SupportedNetworks: Record<SupportedChain, Readonly<string[]>> = {
  solana: ['mainnet', 'testnet', 'devnet'] as const,
  ethereum: ['mainnet', 'goerli'] as const,
  polygon: ['mainnet', 'mumbai'] as const,
  'binance-smart-chain': ['mainnet', 'testnet'] as const,
  'avalanche-c': ['mainnet', 'fuji'] as const,
  cosmoshub: ['mainnet', 'theta'] as const,
};

export function isSupportedNetwork<C extends SupportedChain>(chain: C, network: string) {
  return SupportedNetworks[chain].includes(network);
}

export function assertIsSupportedNetwork<C extends SupportedChain>(chain: C, network: string) {
  if (!isSupportedNetwork(chain, network)) {
    throw new Error(`The provided network key (${network}) is not valid for ${chain}.`);
  }
}

/* ----- Schema ----- */

export interface NativeTokenInfo {
  key: string;
  decimals: number;
  baseUnit?: string; // for cosmos (e.g. 'uatom'), no need for base units on other chains (e.g. 'wei', 'lamport')
  extra?: Record<string, any>; // for any chain/network-specific info
}

export interface FungibleTokenInfo {
  key: string;
  decimals: number;
  address: string;
  baseUnit?: string;
  extra?: Record<string, any>;
}

export interface TokenNetworkInfo {
  chain: SupportedChain;
  network: string;
  decimals: number;
  address?: string;
  baseUnit?: string;
  extra?: Record<string, any>;
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

export interface BasicTokenMetadata {
  key: string;
  name: string;
  symbol: string;
  logoURI: string;
  networks: TokenNetworkInfo[];
  coingeckoId?: string;
}

export interface TokenMetadata extends BasicTokenMetadata {
  website: string;
  description: string;
  links: LinkMetadata;
}

export interface NetworkMetadata<C extends SupportedChain> {
  key: string;
  chainKey: C;
  displayedName: string;
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
