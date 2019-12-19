const EthUtil = require('ethereumjs-util');
const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

const privateKey = Buffer.from(
  '',
  'hex',
)

web3 = new Web3(new Web3.providers.HttpProvider('http://34.243.179.44:3001/'));


transfer({
      from: "0xd6A37423Be930019b8CFeA57BE049329f3119a3D",
      to: "0xd6A37423Be930019b8CFeA57BE049329f3119a3D",
      value: "1",
      data: "0x00",
      privateKey,
})

async function transfer({ from, to, value, memo, privateKey }) {
  const nonce = await web3.eth.getTransactionCount(from);
  const gasPrice = await web3.eth.getGasPrice();
  console.log(gasPrice)

  const bal = await this.web3.eth.getBalance(from);

  console.log(bal)

  const rawTx = {
    from,
    to,
    value: Web3.utils.toHex(Web3.utils.toWei(value, 'ether')),
    gasLimit: Web3.utils.toHex(21000),
    gasPrice: Web3.utils.toHex(3),
    nonce: Web3.utils.toHex(nonce),
    data: memo,
  };

  const privateKeyBuffer = EthUtil.toBuffer(privateKey);

  const tx = new Tx(rawTx);
  tx.sign(privateKeyBuffer);
  const serializedTx = tx.serialize();

  console.log(tx.getSenderAddress().toString('hex'))

  const res = await this.web3.eth.sendSignedTransaction(`0x${serializedTx.toString('hex')}`);
  console.log(res)
  return res;
}
