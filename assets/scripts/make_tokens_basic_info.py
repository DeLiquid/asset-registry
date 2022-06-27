import os
import json

# assume the working directory is assets/

token_dirs = next(os.walk("./tokens"))[1]
all_basic_info = [None] * len(token_dirs)

for i, d in enumerate(token_dirs):
    with open(f"./tokens/{d}/info.json") as f:
        info = json.load(f)
    basic_info_keys = ["key", "name", "symbol", "logoURI", "coingeckoId"]
    all_basic_info[i] = {k: info[k] for k in basic_info_keys if k in info}

with open("./tokens/basic_info.json", "w") as f:
    json.dump(all_basic_info, f, indent=2)
