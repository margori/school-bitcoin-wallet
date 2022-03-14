# school-bitcoin-wallet

School project to create a bitcoin wallet using ReactJS, PHP, Shared Hosting and Testnet

:rotating_light: This project is not yet ready for MainNet :rotating_light:

:bug: This project is currently on **halt** due to the usage of Buffer obeject sin signing transactions by bitcore-lib, wich is not fully compatible with browser javascript.

## Road map

-   [ ] handle latest transaction format in local offline blockchain
-   [ ] handle latest transaction format in testnet blockchain
-   [ ] handle multisig addresses
-   [ ] allow usage of application in shared servers using testnet and public bitcoin nodes
-   [ ] handle legacy transaction utxo
-   [ ] use mnemonic code for address creation
-   [ ] handle multisig wallets

## Supported Address types

1. P2PKH: starts with the number “1”.

Example: 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2

ScriptPubKey = OP_DUP OP_HASH160 `<Public KeyHash>` OP_EQUAL OP_CHECKSIG

ScriptSig= `<Signature>` `<Public Key>`

Example:

>ScriptPubKey = OP_DUP OP_HASH160 12ab8dc588ca9d5787dde7eb29569da63c3a238c OP_EQUALVERIFY OP_CHECKSIG
>
> ScriptSig = 
>
> 304502203f004eeed0cef2715643e2f25a27a28f3c578e94c7f0f6a4df104e7d163f7f8f022100b8b248c1cfd8f77a0365107a9511d759b7544d979dd152a955c867afac0ef78601 
>
> 044d05240cfbd8a2786eda9dadd520c1609b8593ff8641018d57703d02ba687cf2f187f0cee2221c3afb1b5ff7888caced2423916b61444666ca1216f26181398c 

2. P2SH (pending implementation): starts with the number “3”.

Example: 3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy

Locking script format:

Unlocking script format:

3. Bech32 (pending implementation)

Bech32 type starting with “bc1”.

Example: bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq

Locking script format:

Unlocking script format:
