"""
MAINTENANCE USE ONLY

The script iterates over all info.json available in assets/tokens/,
extracts and aggregates basic metadata, and dumps to assets/basic_info.json.

In the root directory, run the following command to run the script:
    python ./scripts/make_tokens_basic_info.py

The generated file must be reformatted through:
    npm run format
before commit.
"""
import os
import json

token_dirs = next(os.walk("./assets/tokens"))[1]
all_basic_info = [None] * len(token_dirs)

for i, d in enumerate(token_dirs):
    with open(f"./assets/tokens/{d}/info.json") as f:
        info = json.load(f)
    basic_info_keys = ["key", "name", "symbol", "logoURI", "coingeckoId"]
    all_basic_info[i] = {k: info[k] for k in basic_info_keys if k in info}

with open("./assets/tokens/basic_info.json", "w") as f:
    json.dump(all_basic_info, f, indent=2)
