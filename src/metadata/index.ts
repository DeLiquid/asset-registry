import { ChainMetadata, NetworkMetadata, SupportedChain } from '../types';
import { AVALANCHEC_CHAIN_METADATA, AVALANCHEC_NETWORK_METADATA } from './avalanche-c';
import { BSC_CHAIN_METADATA, BSC_NETWORK_METADATA } from './binance-smart-chain';
import { COSMOSHUB_CHAIN_METADATA, COSMOSHUB_NETWORK_METADATA } from './cosmoshub';
import { ETHEREUM_CHAIN_METADATA, ETHEREUM_NETWORK_METADATA } from './ethereum';
import { POLYGON_CHAIN_METADATA, POLYGON_NETWORK_METADATA } from './polygon';
import { SOLANA_CHAIN_METADATA, SOLANA_NETWORK_METADATA } from './solana';

export const CHAIN_REGISTRY: Readonly<{
  [C in SupportedChain]: ChainMetadata<C>;
}> = Object.freeze({
  'avalanche-c': AVALANCHEC_CHAIN_METADATA,
  'binance-smart-chain': BSC_CHAIN_METADATA,
  cosmoshub: COSMOSHUB_CHAIN_METADATA,
  ethereum: ETHEREUM_CHAIN_METADATA,
  polygon: POLYGON_CHAIN_METADATA,
  solana: SOLANA_CHAIN_METADATA,
});

export const NETWORK_REGISTRY: Readonly<{
  [C in SupportedChain]: Record<string, NetworkMetadata<C>>;
}> = Object.freeze({
  'avalanche-c': AVALANCHEC_NETWORK_METADATA,
  'binance-smart-chain': BSC_NETWORK_METADATA,
  cosmoshub: COSMOSHUB_NETWORK_METADATA,
  ethereum: ETHEREUM_NETWORK_METADATA,
  polygon: POLYGON_NETWORK_METADATA,
  solana: SOLANA_NETWORK_METADATA,
});
