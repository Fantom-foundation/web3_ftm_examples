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

  res = await axios(post_config({"jsonrpc":"2.0","method":"net_version","params":[],"id":67}))
  console.log(res.data)

  res = await axios(post_config({"jsonrpc":"2.0","method":"eth_getBalance","params":["0x7f9d1dbaf84d827b0840e38f555a490969978d20", "latest"],"id":1}))
  console.log(res.data)


  res = await axios(post_config({"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["0xf865808609184e72a00082271094d6a37423be930019b8cfea57be049329f3119a3d800026a022ee12db5a53b2a43d79c3d5b30f26287817a785da4be80b85ea368c746b2e0fa06e7178582d58eb80e407062c4afc4f4634e2908ef1b874f36b93b94093902f66"],"id":1}))
  console.log(res.data)
}

function post_config(data) {
  return {
    method: 'post',
    url: 'http://34.243.179.44:3001/',
    data: data,
    headers: {'content-type':'application/json'}
  }
}
