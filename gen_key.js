const crypto = require('crypto');
const fs = require('fs');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'pkcs1',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs1',
    format: 'pem'
  }
});

fs.writeFileSync('.deploy_key_node', privateKey);
fs.writeFileSync('.deploy_key_node.pub', publicKey);
