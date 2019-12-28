# DELEGATE

Generate a private/public keypair.

Edit delegate.js

Replace `<private-key>` with private key  
Replace `<address>` with your address  
Replace `<amount-to-delegate>` with the amount in FTM you want to delegate  
Replace validator with the validator ID you want to delegate to

```
const privateKey = Buffer.from(
  '<private-key>',
  'hex',
)
const address = "<address>"
const value = "<amount-to-delegate>"
const validator = 1 // ID of the validator you want to delegate to

```

Install and run

```
git clone https://github.com/Fantom-foundation/web3_ftm_examples.git
cd web3_ftm_examples
npm install
node delegate.js
```
