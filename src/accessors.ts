import fetch from 'cross-fetch';

import { FungibleTokenInfo, SupportedChain, SupportedNetwork, TokenMetadata } from './types';

export enum FetchStrategy {
  GitHub = 'https://raw.githubusercontent.com/DeLiquid/asset-registry/main/assets',
  JSDelivr = 'https://cdn.jsdelivr.net/gh/DeLiquid/asset-registry@main/assets',
}

export async function getAllTokensMetadata(fetchStrategy: FetchStrategy = FetchStrategy.GitHub) {
  return fetch(`${fetchStrategy}/tokens/info.json`)
    .then((res) => res.json())
    .then((res) => res as { [key: string]: TokenMetadata });
}

export async function getTokenMetadata(
  key: string,
  fetchStrategy: FetchStrategy = FetchStrategy.GitHub,
) {
  return fetch(`${fetchStrategy}/tokens/${key}/info.json`)
    .then((res) => res.json())
    .then((res) => res as TokenMetadata);
}

export async function getTokensByNetwork<C extends SupportedChain>(
  chain: C,
  network: SupportedNetwork[C],
  fetchStrategy: FetchStrategy = FetchStrategy.GitHub,
) {
  return fetch(`${fetchStrategy}/chains/${chain}/${network}/tokenlist.json`)
    .then((res) => res.json())
    .then((res) => res as FungibleTokenInfo[]);
}
