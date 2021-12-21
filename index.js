const axios = require("axios");

async function getPublicGateways() {
  let response;
  try {
    response = await axios.get(
      "https://github.com/ipfs/public-gateway-checker/raw/master/gateways.json"
    )
  } catch(err) {
    return [];
  }
  return response.data;
}

function access(url) {
  return new Promise((resolve, reject) => {
    axios.get(
      url,
      {
        timeout: 10000
      }
    ).then((response) => {
      console.log("✅ " + url);
      resolve();
    }).catch(() => {
      console.log("❌ " + url);
      resolve();
    });
  });
}

async function keep(cids) {
  const gateways = await getPublicGateways();
  for (const cid of cids) {
    const fs = [];
    for (const gateway of gateways) {
      const url = gateway.replace(":hash", cid);
      fs.push(access(url));
    }
    await Promise.all(fs);
  }
}

module.exports = keep;
