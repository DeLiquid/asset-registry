import fetch from 'cross-fetch';
import { CHAIN_REGISTRY, NETWORK_REGISTRY } from './metadata';

import {
  assertIsSupportedNetwork,
  BasicTokenMetadata,
  ChainMetadata,
  FungibleTokenInfo,
  NetworkMetadata,
  SupportedChain,
  TokenMetadata,
} from './types';

export enum FetchStrategy {
  GitHub = 'https://raw.githubusercontent.com/DeLiquid/asset-registry/main/assets',
  JSDelivr = 'https://cdn.jsdelivr.net/gh/DeLiquid/asset-registry@main/assets',
}

export async function getAllTokensBasicMetadata(
  fetchStrategy: FetchStrategy = FetchStrategy.GitHub,
) {
  return fetch(`${fetchStrategy}/tokens/basic_info.json`)
    .then((res) => res.json())
    .then((res) => res as BasicTokenMetadata[]);
}

export async function getTokenMetadata(
  key: string,
  fetchStrategy: FetchStrategy = FetchStrategy.GitHub,
) {
  return fetch(`${fetchStrategy}/tokens/${key}/info.json`)
    .then((res) => res.json())
    .then((res) => res as TokenMetadata);
}

export async function getTokensInfoByNetwork<C extends SupportedChain>(
  chain: C,
  network: string,
  fetchStrategy: FetchStrategy = FetchStrategy.GitHub,
) {
  return fetch(`${fetchStrategy}/chains/${chain}/${network}/tokenlist.json`)
    .then((res) => res.json())
    .then((res) => res as FungibleTokenInfo[]);
}

export function getChainMetadata<C extends SupportedChain>(chain: C): ChainMetadata<C> {
  return CHAIN_REGISTRY[chain];
}

export function getNetworksMetadataByChain<C extends SupportedChain>(
  chain: C,
): Record<string, NetworkMetadata<C>> {
  return NETWORK_REGISTRY[chain];
}

export function getNetworkMetadata<C extends SupportedChain>(
  chain: C,
  network: string,
): NetworkMetadata<C> {
  assertIsSupportedNetwork(chain, network);
  return NETWORK_REGISTRY[chain][network];
}
