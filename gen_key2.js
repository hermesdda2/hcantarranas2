const crypto = require('crypto');
const fs = require('fs');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'rsa',
    format: 'openssh'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
});

fs.writeFileSync('.deploy_key_final', privateKey);
fs.writeFileSync('.deploy_key_final.pub', publicKey);
