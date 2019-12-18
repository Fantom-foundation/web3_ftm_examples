const axios = require('axios')

lachesis()

async function lachesis() {
  res = await axios(post_config({"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}))
  console.log(res.data)
  /*

  { jsonrpc: '2.0',
    id: 57,
    result: 'go-lachesis/v1.9.8-stable/linux-amd64/go1.13.3' }

  */

  res = await axios(post_config({"jsonrpc":"2.0","method":"eth_getBalance","params":["0x3a2851d7bc1725c89ab2fdfaf9b27ab3ee75f07f", "latest"],"id":1}))
  console.log(res.data)
}

function post_config(data) {
  return {
    method: 'post',
    url: 'http://34.245.17.87:3001/',
    data: data,
    headers: {'content-type':'application/json'}
  }
}
