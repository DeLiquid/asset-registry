# @deliquid/asset-registry

The registry for chains and tokens supported by DeLiquid.

## Installation

```
npm install @deliquid/asset-registry
```

## Basic Usage

### Query

```
import {
  CHAIN_REGISTRY,
  NETWORK_REGISTRY,
  getAllTokensMetadata,
  getTokenMetadata,
  getTokensByNetwork,
} from '@deliquid/asset-registry';

// chain metadata (key defined in src/types.ts)
CHAIN_REGISTRY['solana'];

// network metadata (key defined in src/types.ts)
NETWORK_REGISTRY['solana']['devnet'];

// metadata of all tokens
await getAllTokensMetadata();

// token metadata (key defined in assets/tokens/)
await getTokenMetadata('usd-coin');

// all available tokens in a network (key defined in src/types.ts)
await getTokensByNetwork('solana', 'mainnet');
```

### Add assets

COMING SOON...
